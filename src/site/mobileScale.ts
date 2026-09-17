/**
 * Riduzione dei mockup di /funzioni sul telefono.
 *
 * Questi mockup sono composizioni disegnate per una colonna da ~470px, con
 * card in overlay e padding che riserva lo spazio all'elemento sovrapposto.
 * A 350px vanno ridotti, ma le due strade CSS non bastano:
 *
 * - `zoom` NON si puo' usare: su WebKit rimpicciolisce il box e lascia il
 *   testo alla misura originale (il font-size computato viene diviso per lo
 *   zoom), quindi dentro il mockup tutto va a capo e sfora. Su Chrome invece
 *   funziona, ed e' il motivo per cui il problema non si vedeva in devtools.
 *   Misurato su iPhone 12 / iOS 26.2.
 * - `transform: scale()` si comporta uguale sui due motori, ma non tocca il
 *   layout: l'elemento continuerebbe a occupare l'altezza non scalata,
 *   lasciando un buco enorme sotto.
 *
 * Qui si fa la cosa che il CSS da solo non sa fare: l'elemento viene messo in
 * layout alla sua larghezza naturale (quella per cui e' disegnato), scalato
 * con `transform`, e gli si assegna a mano l'altezza che occupa da scalato.
 * Il risultato e' identico a quello che `zoom` da' su Chrome, ma funziona
 * anche su WebKit.
 */
import { isMobileViewport } from './mobileHero';

/** Mockup da ridurre e fattore di riduzione. Gli stessi selettori di mobile.css. */
const TARGETS: ReadonlyArray<readonly [string, number]> = [
  ['div[style*="padding: 0px 130px 0px 0px"]', 0.62],
  ['div[style*="padding: 0px 216px 30px 0px"]', 0.62],
  ['div[style*="grid-template-columns: 0.85fr 1.15fr"] > div:last-child', 0.62],
];

function reset(el: HTMLElement) {
  el.style.removeProperty('transform');
  el.style.removeProperty('transform-origin');
  el.style.removeProperty('width');
  el.style.removeProperty('height');
}

export function applyMobileMockupScale(): void {
  const mobile = isMobileViewport();
  for (const [selector, scale] of TARGETS) {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      reset(el);
      if (!mobile) return;
      // larghezza della colonna, misurata senza trasformazioni
      const column = el.offsetWidth;
      if (!column) return;
      // in layout alla larghezza di progetto, poi ridotto a quella reale
      el.style.width = `${(column / scale).toFixed(1)}px`;
      const naturalHeight = el.offsetHeight;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${scale})`;
      el.style.height = `${(naturalHeight * scale).toFixed(1)}px`;
    });
  }
}
