/**
 * Carosello "Storie" della home ("Come sono passate a Reglo").
 *
 * Nel design le frecce fanno `scrollBy(clientWidth)`: "avanti di una
 * schermata". Ma la schermata non e' il passo tra una card e l'altra. Su
 * mobile lo scroller e' largo 390 (va a tutta larghezza, vedi mobile.css)
 * mentre una card piu' lo spazio misura 370: ogni freccia sbaglia di 20px.
 * Chrome rimette a posto con lo snap, Safari no: WebKit non ricalcola lo
 * snap dopo uno scroll fatto da codice, quindi la card resta ferma a meta'
 * e l'errore si somma a ogni tocco. E' lo screenshot di REG-546.
 *
 * Qui le frecce vanno esattamente al punto di snap della card vicina,
 * calcolato dalla posizione reale: cosi' frecce e swipe partono sempre
 * dallo stesso stato e non si scollano. L'animazione e' nostra (con lo snap
 * spento mentre corre) perche' lo `scrollTo` smooth di Safari su uno
 * scroller con snap "mandatory" si interrompe o salta.
 *
 * RegloSite e' generato da tools/port-logic.mjs: l'aggancio sta in
 * RoutedSite.renderVals, come per goLogin.
 */

const DURATION_MS = 460;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type Controller = { el: HTMLElement; step: (dir: -1 | 1) => void; detach: () => void };

let current: Controller | null = null;

/** Posizioni di scroll in cui una card e' allineata allo snap, senza doppioni. */
function snapOffsets(sc: HTMLElement): number[] {
  const pad = parseFloat(getComputedStyle(sc).scrollPaddingLeft) || 0;
  const left = sc.getBoundingClientRect().left;
  const max = sc.scrollWidth - sc.clientWidth;
  const out: number[] = [];
  for (const c of Array.from(sc.children) as HTMLElement[]) {
    if (!c.offsetWidth) continue;
    const x = Math.round(sc.scrollLeft + c.getBoundingClientRect().left - left - pad);
    const clamped = Math.min(max, Math.max(0, x));
    if (!out.some((o) => Math.abs(o - clamped) < 2)) out.push(clamped);
  }
  return out;
}

function nearestIndex(offsets: number[], x: number): number {
  let best = 0;
  offsets.forEach((o, i) => {
    if (Math.abs(o - x) < Math.abs(offsets[best] - x)) best = i;
  });
  return best;
}

function attach(sc: HTMLElement): Controller {
  const arrows = Array.from(sc.nextElementSibling?.children ?? []) as HTMLElement[];
  const [prevBtn, nextBtn] = arrows;
  let raf = 0;
  let target: number | null = null;
  const snapType = sc.style.scrollSnapType;

  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    target = null;
    sc.style.scrollSnapType = snapType;
  };

  const syncArrows = () => {
    const max = sc.scrollWidth - sc.clientWidth;
    const x = target ?? sc.scrollLeft;
    prevBtn?.toggleAttribute('data-passa-off', x <= 1);
    nextBtn?.toggleAttribute('data-passa-off', x >= max - 1);
    prevBtn?.setAttribute('aria-disabled', String(x <= 1));
    nextBtn?.setAttribute('aria-disabled', String(x >= max - 1));
  };

  let syncQueued = false;
  const onScroll = () => {
    if (syncQueued) return;
    syncQueued = true;
    requestAnimationFrame(() => {
      syncQueued = false;
      syncArrows();
    });
  };

  const step = (dir: -1 | 1) => {
    const offsets = snapOffsets(sc);
    if (!offsets.length) return;
    const from = sc.scrollLeft;
    const to = offsets[Math.min(offsets.length - 1, Math.max(0, nearestIndex(offsets, target ?? from) + dir))];
    if (raf) cancelAnimationFrame(raf);
    target = to;
    syncArrows();
    if (Math.abs(to - from) < 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sc.scrollLeft = to;
      stop();
      syncArrows();
      return;
    }
    // durante l'animazione lo snap litigherebbe con noi: si spegne e si
    // riaccende quando la card e' gia' sul suo punto di snap
    sc.style.scrollSnapType = 'none';
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / DURATION_MS);
      sc.scrollLeft = from + (to - from) * easeInOutCubic(t);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        sc.scrollLeft = to;
        stop();
        syncArrows();
      }
    };
    raf = requestAnimationFrame(tick);
  };

  // il dito vince sempre: un tocco ferma l'animazione e ridà lo snap nativo
  const interrupt = () => { if (raf) stop(); };

  const onKey = (dir: -1 | 1) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      step(dir);
    }
  };
  const keyPrev = onKey(-1);
  const keyNext = onKey(1);
  for (const [btn, label, key] of [
    [prevBtn, 'Storia precedente', keyPrev],
    [nextBtn, 'Storia successiva', keyNext],
  ] as const) {
    if (!btn) continue;
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', label);
    btn.addEventListener('keydown', key);
  }

  sc.addEventListener('scroll', onScroll, { passive: true });
  sc.addEventListener('touchstart', interrupt, { passive: true });
  sc.addEventListener('pointerdown', interrupt, { passive: true });
  sc.addEventListener('wheel', interrupt, { passive: true });
  window.addEventListener('resize', onScroll);
  syncArrows();

  return {
    el: sc,
    step,
    detach: () => {
      stop();
      sc.removeEventListener('scroll', onScroll);
      sc.removeEventListener('touchstart', interrupt);
      sc.removeEventListener('pointerdown', interrupt);
      sc.removeEventListener('wheel', interrupt);
      window.removeEventListener('resize', onScroll);
      prevBtn?.removeEventListener('keydown', keyPrev);
      nextBtn?.removeEventListener('keydown', keyNext);
    },
  };
}

/**
 * Ref dello scroller. Va passato sempre la stessa funzione: un ref nuovo a
 * ogni render farebbe staccare e riattaccare il controller (e fermerebbe
 * un'animazione a meta').
 */
export function attachPassa(el: HTMLElement | null) {
  if (current && current.el === el) return;
  current?.detach();
  current = el ? attach(el) : null;
}

export const passaPrev = () => current?.step(-1);
export const passaNext = () => current?.step(1);
