/**
 * Link profondi: un `#hash` nell'URL porta a una sezione precisa della pagina.
 *
 * Il sito non aveva niente del genere — `routes.ts` mappa solo i path — e le
 * sezioni non hanno `id`: sono blocchi del design, marcati con
 * `data-screen-label`. Quindi l'ancora non è un id da aggiungere ai file in
 * `generated/` (che vengono rigenerati da `tools/port-logic.mjs` e non si
 * toccano a mano): è una **mappa**, qui, nel livello scritto a mano.
 *
 * Primo uso: la web app, nel cartello "Gestione autonoma" di un'autoscuola
 * consorziata senza Reglo, manda a `/istruttori#video-autonoma` — il play di
 * quel cartello prima non portava a niente (REG-429).
 *
 * Se un hash non è mappato si prova comunque un `id` vero, così `#codice`
 * continuerebbe a funzionare. Un hash sconosciuto non fa niente e non rompe
 * nulla: la pagina resta in cima, che è dove sarebbe atterrata comunque.
 */

/** hash (senza `#`, minuscolo) → `data-screen-label` del blocco di design. */
const HASH_TARGETS: Record<string, string> = {
  'video-autonoma': 'Video autonoma',
};

/** Aria fra header fisso e inizio della sezione, perché non sia incollata. */
const GAP = 24;

/** Altezza dell'header fisso, misurata: è alto 74px oggi, ma non lo fissiamo. */
function headerOffset(): number {
  const fixed = Array.from(document.querySelectorAll<HTMLElement>('body *')).find((el) => {
    const style = getComputedStyle(el);
    if (style.position !== 'fixed') return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= 1 && rect.height > 20 && rect.height < 200;
  });
  return (fixed?.getBoundingClientRect().height ?? 74) + GAP;
}

function targetFor(hash: string): HTMLElement | null {
  const label = HASH_TARGETS[hash];
  if (label) {
    const byLabel = document.querySelector<HTMLElement>(
      `[data-screen-label="${CSS.escape(label)}"]`,
    );
    if (byLabel) return byLabel;
  }
  return document.getElementById(hash);
}

/**
 * Porta la pagina sulla sezione indicata dall'hash.
 *
 * Perché più tentativi: al mount il layout non è fermo — i mockup si
 * rimisurano (`applyMobileMockupScale`), i font e le immagini arrivano dopo, e
 * la scena sticky della home muove le altezze. Un solo scroll atterrerebbe
 * qualche centinaio di pixel più su. Quindi si riprova mentre il layout si
 * assesta, **ma solo finché l'utente non scorre lui**: al primo gesto suo
 * smettiamo, che è più importante dell'atterraggio preciso.
 */
export function scrollToHashTarget(): void {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, '')).toLowerCase();
  if (!hash) return;

  let cancelled = false;
  let lastY = -1;

  const stop = () => {
    cancelled = true;
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };
  window.addEventListener('wheel', stop, { passive: true, once: true });
  window.addEventListener('touchstart', stop, { passive: true, once: true });
  window.addEventListener('keydown', stop, { once: true });

  const attempt = () => {
    if (cancelled) return;
    // Se la pagina non è dove l'avevamo lasciata, l'ha mossa l'utente.
    if (lastY >= 0 && Math.abs(window.scrollY - lastY) > 4) return stop();
    const target = targetFor(hash);
    if (!target) return;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset());
    window.scrollTo({ top, behavior: 'auto' });
    lastY = Math.round(window.scrollY);
  };

  requestAnimationFrame(attempt);
  window.setTimeout(attempt, 150);
  window.setTimeout(attempt, 500);
  window.setTimeout(attempt, 1000);
  // I font cambiano le altezze dei titoli: l'ultimo assestamento è questo.
  if (document.fonts?.ready) void document.fonts.ready.then(() => attempt());
  window.addEventListener('load', attempt, { once: true });
}

/** Un hash che cambia a pagina già aperta (link interno, Indietro del browser). */
export function watchHashChanges(): () => void {
  const onHashChange = () => scrollToHashTarget();
  window.addEventListener('hashchange', onHashChange);
  return () => window.removeEventListener('hashchange', onHashChange);
}
