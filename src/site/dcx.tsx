/**
 * Helper che replicano il comportamento di dc-runtime in fase di render.
 * Riferimento: design-reference/support.js, src/compile.ts + src/encode.ts.
 * Servono perché il codice generato da tools/dc-to-react.mjs deve produrre
 * lo stesso DOM del runtime originale, non uno equivalente.
 */
import React from 'react';

/** cssToObj del runtime: split ingenuo su ';', kebab->camel, '--var' intatte. */
export function cssToObj(css: string): Record<string, string> {
  const o: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    o[key] = decl.slice(i + 1).trim();
  }
  return o;
}

/** Il runtime converte lo style in oggetto solo se arriva come stringa. */
export function sty(value: unknown): React.CSSProperties | undefined {
  if (typeof value === 'string') return cssToObj(value) as React.CSSProperties;
  if (value && typeof value === 'object') return value as React.CSSProperties;
  return undefined;
}

/**
 * Interpolazione di testo. Il runtime avvolge il valore in
 * <span class="sc-interp">: lo span resta, perché in un contenitore flex
 * diventa un flex item e toglierlo cambierebbe il layout.
 */
export function interp(value: unknown): React.ReactNode {
  if (value === undefined || value === null || typeof value === 'boolean') return null;
  if (React.isValidElement(value) || Array.isArray(value)) {
    return React.createElement(React.Fragment, null, value as React.ReactNode);
  }
  return React.createElement('span', { className: 'sc-interp' }, String(value));
}

/**
 * Segnaposto per i moduli .jsx esterni che l'export non contiene
 * (animations-v2.jsx, tweaks-panel.jsx, reglo-video.jsx). Riproduce il
 * segnaposto del runtime invece di far sparire il buco silenziosamente.
 */
export function MissingExternal(
  { name, from, style }: { name: string; from: string; style?: React.CSSProperties },
) {
  return (
    <div
      className="sc-placeholder"
      title={name + ' (' + from + ')'}
      style={{ width: '100%', minHeight: 60, ...style }}
      data-missing-external={name}
    />
  );
}

/**
 * Componente esterno registrato su window dai moduli .jsx del design
 * (es. RegloClipRinnovi da reglo-video.jsx).
 *
 * Riproduce il wrapper che dc-runtime metteva attorno a un <x-import>:
 * un div.sc-host-x con `display: contents`, così non introduce un box.
 */
export function External(
  { name, hintSize }: { name: string; hintSize?: string },
) {
  const C = (window as unknown as Record<string, React.ComponentType>)[name];
  if (!C) {
    const [w, h] = (hintSize || '100%,60px').split(',');
    return <div className="sc-placeholder" style={{ width: w.trim(), height: h?.trim() }} title={name} />;
  }
  return (
    <div className="sc-host-x" style={{ display: 'contents' }}>
      <C />
    </div>
  );
}
