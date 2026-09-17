/**
 * Navigazione da tastiera per header, menu e footer.
 *
 * Nel design la navigazione e' fatta di <span> e di <a> senza href, con un
 * onClick: cliccabili col mouse, invisibili alla tastiera (non entrano nel
 * tab order) e non annunciati come link. Qui i punti di navigazione
 * diventano raggiungibili con Tab e attivabili con Invio o Spazio.
 *
 * Perimetro volutamente ristretto a header, menu Funzioni e footer, cioe' i
 * punti di cui si conosce la semantica: marcarli `role="link"` e' corretto.
 * Sul resto della pagina (accordion FAQ, frecce dei caroselli, tab) restano
 * decine di span cliccabili non raggiungibili: sistemarli vuol dire dargli il
 * tag giusto nel generatore, non aggiungere attributi a runtime. Vedi il
 * report dell'audit.
 *
 * `el.click()` funziona perche' React delega i click alla radice: il click
 * sintetico passa dallo stesso handler del mouse.
 */

const NAV_SELECTORS = [
  '[data-nav-pill] > span[class]',            // Prezzi, Novita
  '[data-header-inner] > div:last-child > span', // Accedi
  '[data-fx-menu] a',                          // voci del menu Funzioni
  '[data-screen-label="Footer"] span[class]',   // colonne di link del footer
  '[data-screen-label="Footer"] [data-reglo-wm] + div span[class]', // privacy, termini
].join(', ');

const MARK = 'data-a11y-nav';

function onKey(event: KeyboardEvent) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const el = event.currentTarget as HTMLElement;
  event.preventDefault();
  el.click();
}

export function enhanceNavKeyboard(): void {
  document.querySelectorAll<HTMLElement>(NAV_SELECTORS).forEach((el) => {
    if (el.hasAttribute(MARK)) return;
    // se e' gia' un link vero o ha gia' un tabindex, non si tocca
    if (el.tagName === 'A' && el.hasAttribute('href')) return;
    if (el.hasAttribute('tabindex')) return;
    el.setAttribute(MARK, '1');
    el.setAttribute('tabindex', '0');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'link');
    el.addEventListener('keydown', onKey);
  });
}
