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
 * Qui la misura non si stima piu' con una frazione del viewport: si prende lo
 * spazio che AVANZA fra la fascia del titolo e quella del testo, misurate dal
 * vivo. Cosi' il telefono non puo' finire sopra al testo nemmeno quando il
 * viewport e' piu' basso del previsto (barre del browser) o quando il testo
 * va a capo piu' del previsto: e' esattamente il caso in cui il bug si
 * vedeva su iPhone vero ma non nella modalita' responsive di Chrome.
 *
 * La correzione gira DENTRO lo stesso frame, subito dopo `_stage()`, quindi
 * non "combatte" con gli stili inline: li riscrive prima del paint. Tutto il
 * resto della scena (salita, cambio step, schermate, dots) continua a
 * funzionare.
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

/** Altezza massima fra i tre step: il telefono non deve cambiare misura
 *  quando lo step cambia, altrimenti "respira" a ogni transizione. */
function maxBandHeight(selector: string): number {
  let max = 0;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    if (el.offsetHeight > max) max = el.offsetHeight;
  });
  return max;
}

/** Margine fra il bordo del telefono e le due fasce di testo. */
const GAP = 14;

export function correctMobileHeroPhone(site: Site): void {
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return;
  const wrap = stage.querySelector<HTMLElement>('[data-phone-wrap]');
  const frame = stage.querySelector<HTMLElement>('[data-phone-frame]');
  const band = stage.querySelector<HTMLElement>('[data-step-left]');
  const copy = stage.querySelector<HTMLElement>('[data-step-right]');
  if (!wrap || !frame || !band || !copy) return;

  const port = site._scrollport?.() ?? null;
  const vh = port ? port.clientHeight : window.innerHeight;
  const vw = window.innerWidth;
  const t = site._stageTarget?.() ?? 0;
  const rise = smooth(t, RISE_FROM, RISE_TO);

  // Lo spazio per il telefono e' quello che AVANZA fra le due fasce di testo,
  // misurato dal vivo invece che stimato con una frazione del viewport.
  // Gli offset delle fasce li detta mobile.css: vengono letti da li', cosi'
  // non c'e' una costante duplicata che puo' sfasarsi.
  const topOffset = parseFloat(getComputedStyle(band).top) || 0;
  const bottomOffset = parseFloat(getComputedStyle(copy).bottom) || 0;
  const freeTop = topOffset + maxBandHeight('[data-step-left]') + GAP;
  const freeBottom = vh - bottomOffset - maxBandHeight('[data-step-right]') - GAP;
  const freeH = Math.max(160, freeBottom - freeTop);

  // a riposo riempie lo spazio libero, ma senza superare il 62% della
  // larghezza: su uno schermo alto e stretto comanda la larghezza
  const sRest = Math.min(freeH / PHONE_H, (vw * 0.62) / PHONE_W);
  // in hero il mockup e' volutamente grande e tagliato, come su desktop
  const sHero = Math.max(sRest * 1.45, Math.min(1.6, (0.95 * vw) / PHONE_W));
  const scale = sHero + (sRest - sHero) * rise;

  // la cima della scocca mira al 66% dell'altezza, e comunque sotto le CTA
  const heroCta = document.querySelector('[data-hero-copy] div');
  const heroBottom = heroCta ? heroCta.getBoundingClientRect().bottom : vh * 0.66;
  const topTarget = Math.max(0.66 * vh, heroBottom + 20);
  const phoneH = PHONE_H * scale;
  const startY = topTarget - vh / 2 + phoneH / 2 - 0.05 * phoneH;

  // a riposo il telefono si centra nello spazio libero, non a meta' viewport:
  // le due fasce non hanno la stessa altezza (sopra un titolo, sotto un
  // paragrafo piu' una CTA), quindi il centro geometrico non e' il loro
  const restY = (freeTop + freeBottom) / 2 - vh / 2;
  const y = restY + (startY - restY) * (1 - rise);

  // La riduzione va fatta con `transform: scale()`, NON con `zoom`.
  //
  // Su WebKit `zoom` rimpicciolisce il box ma non il testo dentro: il
  // font-size computato viene diviso per lo zoom (16px con zoom 0.52 diventa
  // 30.9px) e il risultato e' che il testo torna a 16px sullo schermo mentre
  // la scocca si riduce a 176px. Dentro il mockup tutto va a capo. Su Chrome
  // lo stesso `zoom` rimpicciolisce anche il testo, ed e' il motivo per cui il
  // bug non si vedeva in devtools. Misurato su iPhone 12 / iOS 26.2.
  //
  // `scale()` si comporta identico sui due motori. La scocca sta in un wrap
  // posizionato in absolute, quindi non lasciare spazio nel flusso non e' un
  // problema; l'origine e' il centro, e translate(-50%,-50%) la centra gia',
  // quindi il centro resta fermo e le traslazioni restano in px non scalati.
  wrap.style.transform =
    `translate(-50%, -50%) translateY(${y.toFixed(1)}px) scale(${scale.toFixed(4)})`;
  // _stage lo riscrive a ogni frame: va neutralizzato, non solo ignorato
  frame.style.zoom = '1';
}
