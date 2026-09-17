// Traduce il mini-linguaggio di espressioni di dc-runtime (src/expr.ts) in JS.
// Supporta: path, !expr, ==/!=/===/!==, letterali, parentesi. Nient'altro:
// il runtime stesso non supporta di piu'.
const IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*/;
const NUMBER_RE = /^-?\d+(\.\d+)?$/;

function parensWrapWhole(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length - 1; i++) {
    if (expr[i] === '(') depth++;
    else if (expr[i] === ')') { depth--; if (depth === 0) return false; }
  }
  return true;
}

function findTopLevelEquality(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === '[' || c === '(') depth++;
    else if (c === ']' || c === ')') depth--;
    else if (depth === 0 && (c === '=' || c === '!') && expr[i + 1] === '=') {
      if (i > 0 && (expr[i - 1] === '=' || expr[i - 1] === '!')) continue;
      if (!expr.slice(0, i).trim()) continue;
      const op = expr[i + 2] === '=' ? c + '==' : c + '=';
      return { index: i, op };
    }
  }
  return null;
}

// scope = Set dei nomi legati localmente (variabili di sc-for, $index)
export function exprToJs(src, scope) {
  const expr = String(src).trim();
  if (!expr) return 'undefined';
  if (expr[0] === '(' && expr[expr.length - 1] === ')' && parensWrapWhole(expr)) {
    return '(' + exprToJs(expr.slice(1, -1), scope) + ')';
  }
  const eq = findTopLevelEquality(expr);
  if (eq) {
    const l = exprToJs(expr.slice(0, eq.index), scope);
    const r = exprToJs(expr.slice(eq.index + eq.op.length), scope);
    return '(' + l + ' ' + eq.op + ' ' + r + ')';
  }
  if (expr[0] === '!') return '!' + exprToJs(expr.slice(1), scope);
  if (expr === 'true') return 'true';
  if (expr === 'false') return 'false';
  if (expr === 'null') return 'null';
  if (expr === 'undefined') return 'undefined';
  if (NUMBER_RE.test(expr)) return expr;
  if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) {
    return JSON.stringify(expr.slice(1, -1));
  }
  return pathToJs(expr, scope);
}

function pathToJs(expr, scope) {
  const head = expr.match(IDENT_RE);
  if (!head) return 'undefined';
  const name = head[0];
  let out = scope.has(name) ? name : 'v.' + name;
  let i = name.length;
  while (i < expr.length) {
    if (expr[i] === '.') {
      const rest = expr.slice(i + 1);
      const m = rest.match(IDENT_RE) || rest.match(/^\d+/);
      if (!m) return 'undefined';
      out += /^\d/.test(m[0]) ? '?.[' + m[0] + ']' : '?.' + m[0];
      i += 1 + m[0].length;
    } else if (expr[i] === '[') {
      let depth = 1, j = i + 1;
      while (j < expr.length && depth > 0) {
        if (expr[j] === '[') depth++;
        else if (expr[j] === ']') { depth--; if (depth === 0) break; }
        j++;
      }
      if (depth !== 0) return 'undefined';
      out += '?.[' + exprToJs(expr.slice(i + 1, j), scope) + ']';
      i = j + 1;
    } else return 'undefined';
  }
  return out;
}
