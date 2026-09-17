/**
 * Geometria della hero della home sul telefono.
 *
 * La scena sticky della home e' guidata da `_stage()` in RegloSite (porting
 * del riferimento, non si tocca a mano). Quel codice dimensiona il mockup solo
 * sull'ALTEZZA del viewport:
 *
 *     sDark = clamp(0.5, 1.4, vh * 0.76 / 556)
 *
 * Su un telefono 390x844 fa 1.15, cioe' un mockup largo 392px dentro uno
 * schermo da 390: esce da tutti e due i lati. Su desktop il vincolo non si
 * vede perche' la larghezza e' sempre abbondante.
 *
 * Qui la stessa formula viene rifatta tenendo conto anche della larghezza. La
 * correzione gira DENTRO lo stesso frame, subito dopo `_stage()`, quindi non
 * "combatte" con gli stili inline: li riscrive prima del paint. Tutto il resto
 * della scena (salita, cambio step, schermate, dots) continua a funzionare.
 *
 * Attiva solo sotto i 768px, valutati a ogni frame: ruotando il telefono in
 * orizzontale la scena torna quella desktop senza ricaricare.
 */

/** Stessa soglia di src/site/mobile.css. Le due cose vanno cambiate insieme. */
export const MOBILE_MQ = '(max-width: 767px)';

export function isMobileViewport(): boolean {
  return window.matchMedia(MOBILE_MQ).matches;
}

/** `smooth` di _stage: smoothstep fra due soglie. */
function smooth(x: number, from: number, to: number): number {
  const k = Math.min(1, Math.max(0, (x - from) / (to - from)));
  return k * k * (3 - 2 * k);
}

/** Ancore temporali di _stage (`this._T`): la salita finisce a 0.20. */
const RISE_FROM = 0.055;
const RISE_TO = 0.20;

/** Proporzioni del mockup: 340x556 px a scala 1. */
const PHONE_W = 340;
const PHONE_H = 556;

type Site = {
  _scrollport?: () => Element | null;
  _stageTarget?: () => number;
};

export function correctMobileHeroPhone(site: Site): void {
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return;
  const wrap = stage.querySelector<HTMLElement>('[data-phone-wrap]');
  const frame = stage.querySelector<HTMLElement>('[data-phone-frame]');
  if (!wrap || !frame) return;

  const port = site._scrollport?.() ?? null;
  const vh = port ? port.clientHeight : window.innerHeight;
  const vw = window.innerWidth;
  const t = site._stageTarget?.() ?? 0;
  const rise = smooth(t, RISE_FROM, RISE_TO);

  // a riposo: alto il 42% del viewport ma mai piu' largo del 62% dello schermo,
  // cosi' resta spazio per il titolo sopra e per il testo sotto
  const sRest = Math.min((vh * 0.42) / PHONE_H, (vw * 0.62) / PHONE_W);
  // in hero il mockup e' volutamente grande e tagliato, come su desktop
  const sHero = Math.max(sRest * 1.45, Math.min(1.6, (0.95 * vw) / PHONE_W));
  const scale = sHero + (sRest - sHero) * rise;

  // la cima della scocca mira al 66% dell'altezza, e comunque sotto le CTA
  const heroCta = document.querySelector('[data-hero-copy] div');
  const heroBottom = heroCta ? heroCta.getBoundingClientRect().bottom : vh * 0.66;
  const topTarget = Math.max(0.66 * vh, heroBottom + 20);
  const phoneH = PHONE_H * scale;
  const startY = topTarget - vh / 2 + phoneH / 2 - 0.05 * phoneH;

  // restY di _stage e' 0 (headerH / 2 con headerH = 0)
  const y = startY * (1 - rise);
  wrap.style.transform = `translate(-50%, -50%) translateY(${y.toFixed(1)}px)`;
  frame.style.zoom = scale.toFixed(4);
}
