// Codegen dc -> React/TSX.
//
// Replica *esattamente* la pipeline di compilazione di dc-runtime
// (src/encode.ts + src/compile.ts), che ho letto da design-reference/support.js:
// stessi mapping di attributi, stessa cssToObj, stesso wrapping <span class="sc-interp">
// del testo interpolato, stesse regole sui nodi di solo whitespace, stessa
// generazione delle classi per style-hover/style-focus.
//
// Uso: node tools/dc-to-react.mjs
import fs from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { exprToJs } from './dc-expr.mjs';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC_HTML = path.join(REPO, 'design-reference/sito-finale-v1.html');
const OUT_DIR = path.join(REPO, 'src/site/generated');

/* ── encode.ts ───────────────────────────────────────────────────────── */
const CAMEL_ATTR = 'sc-camel-';
const RAW_WRAP = {
  select: 'sc-raw-select', table: 'sc-raw-table', tbody: 'sc-raw-tbody',
  thead: 'sc-raw-thead', tfoot: 'sc-raw-tfoot', tr: 'sc-raw-tr',
  td: 'sc-raw-td', th: 'sc-raw-th', caption: 'sc-raw-caption',
};
const RAW_UNWRAP = Object.fromEntries(Object.entries(RAW_WRAP).map(([k, v]) => [v, k]));
const EVENT_MAP = {
  onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit',
  onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onkeypress: 'onKeyPress',
  onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter',
  onmouseleave: 'onMouseLeave', onfocus: 'onFocus', onblur: 'onBlur',
  ondoubleclick: 'onDoubleClick', oncontextmenu: 'onContextMenu',
  onmousemove: 'onMouseMove', onmouseover: 'onMouseOver', onmouseout: 'onMouseOut',
  onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp', onpointermove: 'onPointerMove',
  onpointerenter: 'onPointerEnter', onpointerleave: 'onPointerLeave',
  onpointercancel: 'onPointerCancel', onpointerover: 'onPointerOver',
  onpointerout: 'onPointerOut', ongotpointercapture: 'onGotPointerCapture',
  onlostpointercapture: 'onLostPointerCapture', ontouchstart: 'onTouchStart',
  ontouchend: 'onTouchEnd', ontouchmove: 'onTouchMove', ontouchcancel: 'onTouchCancel',
  ondragstart: 'onDragStart', ondragend: 'onDragEnd', ondragenter: 'onDragEnter',
  ondragleave: 'onDragLeave', ondragover: 'onDragOver',
  onanimationstart: 'onAnimationStart', onanimationend: 'onAnimationEnd',
  onanimationiteration: 'onAnimationIteration', ontransitionend: 'onTransitionEnd',
};
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const NUMERIC_PROPS = new Set([
  'tabIndex', 'rowSpan', 'colSpan', 'span', 'start', 'maxLength', 'minLength',
  'cols', 'rows', 'size',
]);

// linkedom abbassa i nomi degli elementi SVG camelCase, Chrome li preserva
// (SVG e' case-sensitive). Ripristiniamo la grafia corretta in emissione.
const SVG_CASE = Object.fromEntries([
  'clipPath', 'linearGradient', 'radialGradient', 'textPath', 'foreignObject',
  'feGaussianBlur', 'feColorMatrix', 'feBlend', 'feOffset', 'feFlood',
  'feComposite', 'feMerge', 'feMergeNode', 'feDropShadow', 'feTurbulence',
  'feDisplacementMap', 'feImage', 'feMorphology', 'feSpecularLighting',
  'feDiffuseLighting', 'feConvolveMatrix', 'feComponentTransfer', 'feTile',
  'animateTransform', 'animateMotion',
].map((n) => [n.toLowerCase(), n]));

function encodeCase(html) {
  html = html.replace(/<(x-import|dc-import)((?:[^>"']|"[^"]*"|'[^']*')*)\/>/gi,
    (_, t, a) => '<' + t + a + '></' + t + '>');
  html = html.replace(/<helmet(\s|>)/gi, '<sc-helmet$1').replace(/<\/helmet\s*>/gi, '</sc-helmet>');
  html = html.replace(/(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g,
    (_, sp, name, eq) => sp + CAMEL_ATTR + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()) + eq);
  for (const [real, alias] of Object.entries(RAW_WRAP)) {
    html = html.replace(new RegExp('(</?)' + real + '(?=[\\s>])', 'gi'), '$1' + alias);
  }
  return html;
}

// identica a cssToObj del runtime: split ingenuo su ';', kebab->camel, '--var' intatte
function cssToObj(css) {
  const o = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return o;
}

/* ── foglio delle pseudo-classi (src/pseudo.ts) ──────────────────────── */
const pseudoRules = [];
const pseudoCache = new Map();
function pseudoClass(pseudo, css) {
  const k = pseudo + '|' + css;
  if (pseudoCache.has(k)) return pseudoCache.get(k);
  const cls = 'scp' + pseudoRules.length.toString(36);
  const isEl = pseudo === 'before' || pseudo === 'after';
  pseudoRules.push({ cls, sel: '.' + cls + (isEl ? '::' : ':') + pseudo, css, importantify: !isEl });
  pseudoCache.set(k, cls);
  return cls;
}
// importantify del runtime: ogni dichiarazione riceve !important
function importantify(css) {
  const decls = []; let start = 0, depth = 0, quote = '';
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) { if (c === '\\') i++; else if (c === quote) quote = ''; }
    else if (c === "'" || c === '"') quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth = Math.max(0, depth - 1);
    else if (c === ';' && depth === 0) { decls.push(css.slice(start, i)); start = i + 1; }
  }
  decls.push(css.slice(start));
  return decls.map((d) => d.trim()).filter(Boolean)
    .map((d) => (/!\s*important$/i.test(d) ? d : d + ' !important')).join(';');
}

/* ── emissione ───────────────────────────────────────────────────────── */
const q = (s) => JSON.stringify(s);
const isIdent = (k) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k);
// i valori marcati RAW finiscono nel literal come espressione, non come stringa
const rawExpr = (js) => ({ __raw: js });
const objLit = (o) => '{' + Object.entries(o)
  .map(([k, val]) => (isIdent(k) ? k : q(k)) + ': ' + (val && val.__raw ? val.__raw : q(val)))
  .join(', ') + '}';

/**
 * TAMPONE — copy delle conferme dei form.
 *
 * I form del design non inviano niente: validano e mostrano "Richiesta
 * inviata". Finche' non c'e' un endpoint vero, l'invio passa da un mailto
 * precompilato (vedi RoutedSite), quindi la mail la deve ancora spedire
 * l'utente: la conferma originale mentirebbe. Qui la rendiamo veritiera.
 *
 * Da rimuovere quando i form invieranno davvero.
 */
const TAMPONE_COPY = new Map([
  ['Richiesta inviata', 'Manca un ultimo passo'],
  ['Messaggio ricevuto', 'Manca un ultimo passo'],
  ['Ti scriviamo entro un giorno lavorativo a ',
   'Ti abbiamo aperto una mail gi\u00e0 pronta per support@reglo.it: premi invia e ti scriviamo a '],
  [' per fissare la demo.', ' entro un giorno lavorativo, per fissare la demo.'],
  ['Ti rispondiamo a ',
   'Ti abbiamo aperto una mail gi\u00e0 pronta per support@reglo.it: premi invia e ti rispondiamo a '],
]);

const PX_RE = /^-?\d+(\.\d+)?px$/;
const isNeg = (v) => typeof v === 'string' && v.trim().startsWith('-');

/**
 * CORREZIONE 1 — misure assolute su elementi che dichiarano `inset: 0`.
 *
 * Il tool di design, quando si ridimensiona un elemento con le maniglie,
 * scrive width/height in px anche su overlay che con `inset: 0` dovrebbero
 * riempire il contenitore. Il contenitore pero' e' fluido, quindi appena e'
 * piu' largo di quei px spunta lo sfondo sotto: e' la barra scura sul bordo
 * destro della card "Autoscuola Robatto".
 *
 * Un offset negativo sullo stesso asse (es. `left: -61px`) e' invece un
 * ritaglio voluto — le foto del team — e non va toccato.
 */
function fixToolSizing(o) {
  if (o.inset !== '0' && o.inset !== '0px') return o;
  const out = { ...o };
  if (PX_RE.test(out.width || '') && !isNeg(out.left)) out.width = '100%';
  if (PX_RE.test(out.height || '') && !isNeg(out.top)) out.height = '100%';
  return out;
}

/**
 * CORREZIONE 2 — il pulsante del muro recensioni.
 *
 * Il contenitore del pulsante ha `margin-top: -18px` per infilarlo nella
 * sfumatura che chiude il muro. Ma la sfumatura c'e' solo quando il muro e'
 * chiuso: da aperto il pulsante risale lo stesso e sbatte sull'ultima
 * recensione. Da aperto lo stacchiamo, usando la stessa gronda delle card
 * del muro (20px).
 */
function fixReviewsButton(o) {
  if (o.marginTop !== '-18px' || o.display !== 'flex' || o.zIndex !== '5') return o;
  return { ...o, marginTop: rawExpr("v.reviewsOpen ? '20px' : '-18px'") };
}

function attrValueJs(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return { dynamic: true, js: exprToJs(whole[1], scope) };
  if (raw.includes('{{')) {
    const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
    const js = parts.map((s, i) => (i & 1) ? '${' + exprToJs(s, scope) + ' ?? ""}' : s.replace(/[`$\\]/g, (c) => '\\' + c)).join('');
    return { dynamic: true, js: '`' + js + '`' };
  }
  return { dynamic: false, js: q(raw) };
}

function emitChildren(node, scope, ind) {
  const out = [];
  for (const c of node.childNodes) {
    const e = emitNode(c, scope, ind);
    if (e !== null) out.push(e);
  }
  return out;
}

function wrapChildren(parts, ind) {
  if (!parts.length) return '';
  return '\n' + parts.map((p) => ind + '  ' + p).join('\n') + '\n' + ind;
}

let keySeq = 0;
function emitNode(node, scope, ind) {
  // TEXT
  if (node.nodeType === 3) {
    const txt = node.nodeValue ?? '';
    if (!txt.includes('{{')) {
      // regola del runtime: whitespace puro senza spazi -> nodo scartato
      if (!txt.trim() && !txt.includes(' ')) return null;
      return '{' + q(TAMPONE_COPY.get(txt) ?? txt) + '}';
    }
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    const pieces = parts.map((p, i) => (i & 1)
      ? '{interp(' + exprToJs(p, scope) + ')}'
      : (p ? '{' + q(p) + '}' : '')).filter(Boolean);
    return '<>' + pieces.join('') + '</>';
  }
  if (node.nodeType !== 1) return null;

  const tag = node.localName.toLowerCase();
  if (tag === 'sc-if') return emitIf(node, scope, ind);
  if (tag === 'sc-for') return emitFor(node, scope, ind);
  if (tag === 'x-import') return emitXImport(node, scope, ind);
  if (tag === 'sc-helmet' || tag === 'helmet') return null; // gestito a parte
  return emitElement(node, scope, ind);
}

function emitIf(el, scope, ind) {
  // il valore arriva come "{{ expr }}": va passato da attrValueJs, che
  // toglie le graffe, non direttamente a exprToJs
  const cond = attrValueJs(el.getAttribute('value') || '', scope).js;
  const kids = wrapChildren(emitChildren(el, scope, ind + '  '), ind + '  ');
  return '{' + cond + ' ? <>' + kids + '</> : null}';
}

function emitFor(el, scope, ind) {
  const listJs = attrValueJs(el.getAttribute('list') || '', scope).js;
  const as = el.getAttribute('as') || 'item';
  const sub = new Set([...scope, as, '$index']);
  const kids = wrapChildren(emitChildren(el, sub, ind + '    '), ind + '    ');
  const idx = '__i' + (keySeq++);
  // $index del runtime -> variabile locale
  const body = kids.replace(/\bv\.\$index\b/g, idx).replace(/\$index/g, idx);
  return '{(' + listJs + ' ?? []).map((' + as + ': any, ' + idx + ': number) => (\n'
    + ind + '    <React.Fragment key={' + idx + '}>' + body + '</React.Fragment>\n'
    + ind + '  ))}';
}

function emitXImport(el, scope, ind) {
  // Componente esterno registrato su window dai moduli .jsx del design.
  const name = el.getAttribute('component-from-global-scope') || el.getAttribute('component') || el.getAttribute('name') || '';
  const hint = el.getAttribute('hint-size') || '';
  return '<External name=' + q(name) + (hint ? ' hintSize=' + q(hint) : '') + ' />';
}

function emitElement(el, scope, ind) {
  const lower = el.localName.toLowerCase();
  const realTag = RAW_UNWRAP[el.localName] || SVG_CASE[lower] || lower;
  const props = [];
  const pseudoClasses = [];
  let classNameJs = null;

  for (const attr of [...el.attributes]) {
    let name = attr.name;
    const value = attr.value;
    if (name === 'sc-name' || name === 'data-dc-tpl') continue;
    if (name.startsWith(CAMEL_ATTR)) {
      name = kebabToCamel(name.slice(CAMEL_ATTR.length));
    } else {
      name = name.toLowerCase(); // il browser abbassa i nomi degli attributi
    }
    if (name === 'hint-size' || name.startsWith('hint-placeholder')) continue;
    if (name.startsWith('style-')) {
      pseudoClasses.push(pseudoClass(name.slice(6), value));
      continue;
    }
    let key = name;
    if (key === 'class') key = 'className';
    else if (key === 'for') key = 'htmlFor';
    else if (key.startsWith('on')) key = EVENT_MAP[key] || 'on' + key[2].toUpperCase() + key.slice(3);

    if (key === 'style') {
      const whole = value.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
      if (whole) props.push('style={sty(' + exprToJs(whole[1], scope) + ')}');
      else if (value.includes('{{')) props.push('style={sty(' + attrValueJs(value, scope).js + ')}');
      else props.push('style={' + objLit(fixReviewsButton(fixToolSizing(cssToObj(value)))) + '}');
      continue;
    }
    // Unica deviazione deliberata dal riferimento: il link del logo punta a
    // "Home 2.dc.html", un artefatto del tool di design che in produzione
    // darebbe 404. Il risultato visivo e' identico, il link funziona.
    if (key === 'href' && value.trim() === 'Home 2.dc.html') {
      props.push('href={"/"}');
      continue;
    }
    const v = attrValueJs(value, scope);
    if (key === 'className') { classNameJs = v.js; continue; }
    // React tipizza alcune prop come number: il DOM risultante e' identico,
    // ma con la stringa TypeScript protesta
    if (NUMERIC_PROPS.has(key) && !v.dynamic && /^-?\d+$/.test(value.trim())) {
      props.push(key + '={' + value.trim() + '}');
      continue;
    }
    props.push(key + '={' + v.js + '}');
  }

  if (pseudoClasses.length) {
    const extra = q(pseudoClasses.join(' '));
    classNameJs = classNameJs ? '[' + classNameJs + ', ' + extra + '].filter(Boolean).join(" ")' : extra;
  }
  if (classNameJs) props.unshift('className={' + classNameJs + '}');

  const kids = emitChildren(el, scope, ind + '  ');
  const head = '<' + realTag + (props.length ? ' ' + props.join(' ') : '');
  if (!kids.length) return head + ' />';
  return head + '>' + wrapChildren(kids, ind) + '</' + realTag + '>';
}

/* ── main ────────────────────────────────────────────────────────────── */
const raw = fs.readFileSync(SRC_HTML, 'utf8');
const lines = raw.split('\n');
const tplRaw = lines.slice(59, 4899).join('\n').replace(/<\/x-dc>\s*$/, '');

const { document } = parseHTML('<html><body></body></html>');
const tpl = document.createElement('template');
tpl.innerHTML = encodeCase(tplRaw);

// Le viste sono gli <sc-if> di primo livello: una per file.
const roots = [...tpl.content.childNodes];
const views = [];
let headerNodes = [];

for (const n of roots) {
  if (n.nodeType !== 1 || n.localName !== 'sc-if') continue;
  const cond = (n.getAttribute('value') || '').replace(/[{}\s]/g, '');
  views.push({ cond, node: n });
}

fs.mkdirSync(path.join(OUT_DIR, 'views'), { recursive: true });
const index = [];
const usedNames = new Map();
// isHome -> Home, hdrVisible -> HdrVisible, is404 -> View404; i duplicati
// prendono un suffisso numerico invece di sovrascriversi.
function viewName(cond) {
  let base = /^is[A-Z0-9]/.test(cond) ? cond.slice(2) : cond;
  base = base.replace(/^./, (c) => c.toUpperCase());
  if (/^\d/.test(base)) base = 'View' + base;
  const n = (usedNames.get(base) || 0) + 1;
  usedNames.set(base, n);
  return n === 1 ? base : base + n;
}
for (const view of views) {
  const name = viewName(view.cond) || 'Root';
  const scope = new Set();
  const kids = emitChildren(view.node, scope, '    ');
  const body = kids.length ? kids.map((k) => '    ' + k).join('\n') : '    null';
  // solo gli import effettivamente usati: tsconfig ha noUnusedLocals
  const helpers = ['interp', 'sty', 'External'].filter((h) =>
    new RegExp('\\b' + h + '\\(').test(body) || new RegExp('<' + h + '\\b').test(body));
  const needsReact = /React\.Fragment/.test(body);
  const imports = [
    needsReact ? "import React from 'react';" : null,
    helpers.length ? `import { ${helpers.join(', ')} } from '../../dcx';` : null,
  ].filter(Boolean).join('\n');
  const file = `// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
${imports}

export default function ${name}(${/\bv\./.test(body) ? 'v' : '_v'}: any) {
  return (
    <>
${body}
    </>
  );
}
`;
  fs.writeFileSync(path.join(OUT_DIR, 'views', name + '.tsx'), file);
  index.push({ name, cond: view.cond });
}

// foglio delle pseudo-classi
const css = pseudoRules.map((r) =>
  r.sel + ' { ' + (r.importantify ? importantify(r.css) : r.css) + ' }').join('\n');
fs.writeFileSync(path.join(OUT_DIR, 'pseudo.css'),
  '/* GENERATO da tools/dc-to-react.mjs — style-hover / style-focus del design. */\n' + css + '\n');

// mappa vista -> condizione, consumata da tools/port-logic.mjs
fs.writeFileSync(path.join(OUT_DIR, 'conditions.json'),
  JSON.stringify(index, null, 2) + '\n');

// indice delle viste
fs.writeFileSync(path.join(OUT_DIR, 'index.ts'),
  '// GENERATO da tools/dc-to-react.mjs — non modificare a mano.\n'
  + index.map((i) => `export { default as ${i.name} } from './views/${i.name}';`).join('\n')
  + '\n\nexport const VIEW_CONDITIONS = ' + JSON.stringify(index.map((i) => i.cond), null, 2) + ' as const;\n');

console.log('viste generate:', index.map((i) => i.name + ' (' + i.cond + ')').join(', '));
console.log('regole pseudo:', pseudoRules.length);
