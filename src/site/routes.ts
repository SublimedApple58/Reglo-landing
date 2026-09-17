/**
 * Mappa URL <-> vista interna del design.
 *
 * Il file di riferimento naviga solo via `state.page` (nessun URL). Qui le
 * viste prendono uno slug reale, in kebab-case e in italiano, così le pagine
 * sono linkabili, condivisibili e indicizzabili.
 *
 * `/privacy-policy` conserva di proposito lo slug già online oggi.
 */
export const PAGE_TO_PATH: Record<string, string> = {
  home: '/',
  core: '/funzioni',
  prezzi: '/prezzi',
  novita: '/novita',
  istruttori: '/istruttori',
  segretaria: '/segretaria-virtuale',
  rinnovi: '/rinnovi-automatici',
  med: '/rinnovo-patente',
  soon: '/reglo-road',
  team: '/team',
  contatti: '/contatti',
  vendite: '/contatta-le-vendite',
  assistenza: '/assistenza',
  login: '/accedi',
  privacy: '/privacy-policy',
  termini: '/termini-e-condizioni',
};

export const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page]),
);

/**
 * Vista per un URL. `null` significa "questo indirizzo non esiste": chi
 * chiama mostra la vista 404 del design.
 *
 * Le rotte del vecchio sito (/allievi, /calcolatore, /policy) non sono piu'
 * mappate: le pagine sono state rimosse e non hanno un equivalente nel nuovo
 * design. /allievi e /calcolatore verranno rifatte da zero.
 */
export function pageFromPath(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return PATH_TO_PAGE[clean] ?? null;
}

export function pathFromPage(page: string): string {
  return PAGE_TO_PATH[page] ?? '/';
}
