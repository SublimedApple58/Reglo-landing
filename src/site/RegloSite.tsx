// @ts-nocheck
/* eslint-disable */
/**
 * Porting fedele della logica di design-reference/sito-finale-v1.html.
 *
 * Il corpo della classe è quello originale, invariato: DCLogic espone la
 * stessa API di React.Component, quindi state / setState / lifecycle
 * funzionano identici. L'unica aggiunta è render(), che nel runtime dc
 * veniva fornito dall'esterno compilando il template.
 *
 * Non modificare a mano per cambiare il design: la fonte di verità resta
 * il file di riferimento. Questo file verrà sostituito da componenti veri
 * nella fase di componentizzazione.
 */
import React from 'react';
import AppOpen from './generated/views/AppOpen';
import Assistenza from './generated/views/Assistenza';
import Contatti from './generated/views/Contatti';
import Core from './generated/views/Core';
import HdrVisible from './generated/views/HdrVisible';
import HdrVisible2 from './generated/views/HdrVisible2';
import Home from './generated/views/Home';
import IscrivitiOpen from './generated/views/IscrivitiOpen';
import Istruttori from './generated/views/Istruttori';
import Login from './generated/views/Login';
import Med from './generated/views/Med';
import Novita from './generated/views/Novita';
import Prezzi from './generated/views/Prezzi';
import Privacy from './generated/views/Privacy';
import Rinnovi from './generated/views/Rinnovi';
import Segretaria from './generated/views/Segretaria';
import Soon from './generated/views/Soon';
import Team from './generated/views/Team';
import Termini from './generated/views/Termini';
import Vendite from './generated/views/Vendite';

class RegloSite extends React.Component<Record<string, never>, any> {
  state = { openFaq: 0, reviewsOpen: false, appOpen: false, store: null, nvTab: 'changelog', nvQ: '', nvMore: false, nvAcc: -1, page: 'home', chatText: '', chatTag: 'A tutti gli allievi', emailValue: 'info@scuolaguidamontreal.it', pwValue: 'password10', pwVisible: false, loggingIn: false, revIdx: 0, revFading: false };

  _startRevTimer() {
    if (this._revTimer) clearInterval(this._revTimer);
    this._revTimer = setInterval(() => { if (!this._revPaused) this._goRev((this.state.revIdx + 1) % 3); }, 8000);
  }
  _goRev(idx) {
    this.setState({ revFading: true });
    setTimeout(() => this.setState({ revIdx: idx, revFading: false }), 280);
  }
  componentDidUpdate() {
    // la hero viene smontata/rimontata al cambio pagina: qui il loop riparte
    const hasStage = !!document.querySelector('[data-stage]');
    if (hasStage && !this._raf && this._stageLoop) {
      this._tCur = null;
      this._raf = requestAnimationFrame(this._stageLoop);
    }
    if (!hasStage) { this._tCur = null; this._stepShown = null; this._tweens = []; }   // il loop resta vivo: costa nulla e riprende da solo
    if (this._fit) this._fit();
    // al cambio pagina nessun evento di scroll viene emesso: forziamo un giro di calcolo
    if (this._onScroll) { this._onScroll(); requestAnimationFrame(() => this._onScroll && this._onScroll()); }
  }
  componentDidMount() {
    this._fit = () => {
      const wrap = document.querySelector('[data-scale-wrap]');
      const canvas = document.querySelector('[data-scale-canvas]');
      // la larghezza della colonna non dipende dall'hero: vale anche sulle pagine senza scale-wrap
      const baseW = wrap ? wrap.clientWidth : Math.min(document.documentElement.clientWidth, 1560);
      const contentW = Math.max(320, baseW * (1320 / 1560));
      if (!baseW) return;
      const inner = document.querySelector('[data-header-inner]');
      if (inner) inner.style.maxWidth = contentW + 'px';
      document.querySelectorAll('[data-align-block]').forEach((b) => { b.style.maxWidth = contentW + 'px'; });
      if (!wrap || !canvas) return;
      const s = wrap.clientWidth / 1560;
      canvas.style.transform = 'scale(' + s + ')';
      wrap.style.height = (1000 * s) + 'px';
    };
    // ogni sezione montata al cambio pagina riceve subito la larghezza della colonna
    this._alignObserver = new MutationObserver((records) => {
      for (const r of records) {
        for (const n of r.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.matches?.('[data-align-block]') || n.querySelector?.('[data-align-block]')) { this._fit(); return; }
        }
      }
    });
    this._alignObserver.observe(document.body, { childList: true, subtree: true });
    this._scrollport = () => {
      const st = document.querySelector('[data-stage]');
      let el = st ? st.parentElement : null;
      while (el && el !== document.body) {
        const cs = getComputedStyle(el);
        if (/(auto|scroll|overlay)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 4) return el;
        el = el.parentElement;
      }
      return null;
    };
    this._stageTarget = () => {
      const st = document.querySelector('[data-stage]');
      if (!st) return 0;
      const sp = this._scrollport();
      const portH = sp ? sp.clientHeight : window.innerHeight;
      const portTop = sp ? sp.getBoundingClientRect().top : 0;
      const total = Math.max(1, st.offsetHeight - portH);
      return Math.min(1, Math.max(0, (portTop - st.getBoundingClientRect().top) / total));
    };
    this._stageLoop = () => {
      const target = this._stageTarget();
      if (this._tCur == null) this._tCur = target;
      const d = target - this._tCur;
      this._tCur += d * (Math.abs(d) > 0.08 ? 0.42 : 0.26);  // inseguimento rapido, senza ritardo percepibile
      if (Math.abs(d) < 0.002) this._tCur = target;
      try { this._stage(this._tCur); this._tickTweens(performance.now()); } catch (e) { window.__stageErr = (e && e.message) || String(e); }
      this._rafAlive = true;
      clearTimeout(this._rafWatch);
      this._rafWatch = setTimeout(() => { this._rafAlive = false; }, 300);
      this._syncHeader();
      this._raf = requestAnimationFrame(this._stageLoop);
    };
    // ── curva di uscita: parte di scatto e si assesta a lungo (campionata, non un bezier)
    this._CURVE = [0,0,0.00006,0.00091,0.00278,0.01676,0.04043,0.06337,0.10827,0.15389,0.19482,0.23414,0.27434,0.31392,0.35151,0.38783,0.4232,0.45689,0.48893,0.51998,0.54953,0.57743,0.60368,0.63098,0.65226,0.67367,0.69615,0.71743,0.73428,0.7523,0.76862,0.78387,0.79859,0.81223,0.82503,0.83717,0.84853,0.85865,0.8684,0.87784,0.88711,0.89535,0.90205,0.90944,0.91655,0.92243,0.92787,0.93334,0.93842,0.94297,0.94736,0.95147,0.95509,0.95877,0.962,0.96504,0.96798,0.97072,0.97328,0.97551,0.97749,0.9795,0.98154,0.98305,0.98461,0.98605,0.98738,0.98859,0.98974,0.99079,0.99175,0.99264,0.99345,0.99417,0.99485,0.9955,0.99606,0.99649,0.99697,0.99737,0.99773,0.99807,0.99837,0.99861,0.99883,0.99902,0.99919,0.99935,0.99948,0.99959,0.99968,0.99976,0.99982,0.99987,0.99991,0.99994,0.99996,0.99998,0.99999,1,1];
    this._curveAt = (u) => {
      if (u <= 0) return 0; if (u >= 1) return 1;
      const i = u * 100, i0 = Math.floor(i), C = this._CURVE;
      return C[i0] + (C[i0 + 1] - C[i0]) * (i - i0);
    };
    this._easeOut = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    // ── tween a tempo: le comparse partono al cambio di step, non a ogni pixel di scroll
    this._tweens = [];
    this._tween = (dur, delay, apply) => {
      this._tweens.push({ start: performance.now() + delay * 1000, dur: dur * 1000, apply });
      apply(0);
    };
    this._tickTweens = (now) => {
      if (!this._tweens.length) return;
      this._tweens = this._tweens.filter((tw) => {
        const x = (now - tw.start) / tw.dur;
        if (x < 0) return true;
        tw.apply(Math.min(1, x));
        return x < 1;
      });
    };
    // ── titoli step divisi in lettere (una volta per montaggio)
    this._splitTitles = () => {
      for (let n = 0; n < 3; n++) {
        const l = document.querySelector('[data-step-left="' + n + '"]');
        if (!l) continue;
        const title = l.children[1];
        if (!title || title.dataset.split) continue;
        const lines = title.children.length ? Array.from(title.children).map((c) => c.textContent.trim()) : [title.textContent.trim()];
        title.dataset.split = '1';
        title.setAttribute('aria-label', lines.join(' '));
        title.innerHTML = lines.map((line) => '<span style="display:block;white-space:nowrap">' + line.split(' ').map((w) =>
          '<span style="display:inline-block">' +
          [...w].map((ch) => '<span data-ch="1" aria-hidden="true" style="display:inline-block;opacity:0;will-change:transform,opacity">' + ch + '</span>').join('') +
          '</span>'
        ).join('<span style="display:inline-block;width:0.28em"></span>') + '</span>').join('');
      }
    };
    this._showStep = (i) => {
      this._tweens = [];
      // le barre del dettaglio giornaliero si riempiono una dopo l'altra quando lo step entra
      const bars = Array.from(document.querySelectorAll('[data-bar]'));
      bars.forEach((b) => { b.style.height = '3px'; });
      document.querySelectorAll('[data-bar-val]').forEach((v) => { v.style.opacity = 0; });
      document.querySelectorAll('[data-row]').forEach((r) => { r.style.opacity = 1; r.style.transform = 'none'; });
      if (i === 1) bars.forEach((b, n) => {
        const h = parseFloat(b.dataset.h) || 0;
        const val = document.querySelector('[data-bar-val="' + n + '"]');
        this._tween(0.42, 0.3 + n * 0.11, (v) => {
          const e = this._easeOut(v);
          b.style.height = (3 + h * e).toFixed(1) + 'px';
          if (val) val.style.opacity = (h ? e : e * 0.6).toFixed(3);
        });
      });
      for (let n = 0; n < 3; n++) {
        const st2 = document.querySelector('[data-stage]');
        if (!st2) return;
        const l = st2.querySelector('[data-step-left="' + n + '"]');
        const r = st2.querySelector('[data-step-right="' + n + '"]');
        if (n !== i) {
          if (l) l.querySelectorAll('[data-ch]').forEach((c) => { c.style.opacity = 0; c.style.transform = 'translateY(0.35em)'; });
          if (r) { r.style.opacity = 0; r.style.transform = 'translateY(20px)'; }
          const k = l ? l.children[0] : null;
          if (k) { k.style.opacity = 0; k.style.transform = 'translateY(14px)'; }
          continue;
        }
        const kick = l ? l.children[0] : null;
        if (kick) this._tween(0.3, 0, (v) => {
          const e = this._easeOut(v);
          kick.style.opacity = e.toFixed(3);
          kick.style.transform = e >= 1 ? 'none' : 'translateY(' + (14 * (1 - e)).toFixed(1) + 'px)';
        });
        if (l) l.querySelectorAll('[data-ch]').forEach((ch, idx) => this._tween(0.34, 0.06 + idx * 0.016, (v) => {
          const e = this._easeOut(v);
          ch.style.opacity = e.toFixed(3);
          ch.style.transform = e >= 1 ? 'none' : 'translateY(' + (0.35 * (1 - e)).toFixed(3) + 'em)';
        }));
        if (r) this._tween(0.34, 0.16, (v) => {
          const e = this._easeOut(v);
          r.style.opacity = e.toFixed(3);
          r.style.transform = e >= 1 ? 'none' : 'translateY(' + (20 * (1 - e)).toFixed(1) + 'px)';
        });
      }
    };
    // tempi condivisi fra animazione e fermate: le ancore sono derivate da qui
    this._T = { riseEnd: 0.20, stepsFrom: 0.28 };
    this._stage = (tIn) => {
      const st = document.querySelector('[data-stage]');
      if (!st) return;
      this._splitTitles();
      const sticky = st.querySelector('[data-stage-sticky]');
      const wrap = st.querySelector('[data-phone-wrap]');
      const frame = st.querySelector('[data-phone-frame]');
      const hero = st.querySelector('[data-hero-copy]');
      const dots = st.querySelector('[data-dots]');
      const sp = this._scrollport();
      const vh = sp ? sp.clientHeight : window.innerHeight;
      if (sticky && Math.abs(sticky.offsetHeight - vh) > 2) sticky.style.height = vh + 'px';
      const t = tIn != null ? tIn : this._stageTarget();
      const tRaw = this._stageTarget();
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const smooth = (x, from, to) => { const k = clamp01((x - from) / (to - from)); return k * k * (3 - 2 * k); };

      const headerH = 0;
      const vw = window.innerWidth;
      // un solo mockup: grande e tagliato in hero, poi rimpicciolito fino a entrare intero accanto ai testi
      const sDark = Math.max(0.5, Math.min(1.4, (vh * 0.76) / 556));   // alto ~76% del viewport, come nell'inspo
      const sHero = Math.max(sDark * 1.45, Math.min(2.2, (0.36 * vw) / 340));
      const base = sHero;

      // ── fase 1: il telefono sale dal fondo e la scena diventa nera
      const rise = smooth(tRaw, 0.055, this._T.riseEnd);
      const scale = sHero + (sDark - sHero) * rise;
      const phoneH = 556 * scale;
      const restY = headerH / 2;                                  // centro ottico sotto l'header
      // la cima visibile della scocca mira al 65% dell'altezza, ma non sale mai sopra le CTA
      const heroInner = hero ? hero.querySelector('div') : null;
      const heroBottom = heroInner ? heroInner.getBoundingClientRect().bottom : vh * 0.65;
      const topTarget = Math.max(0.65 * vh, heroBottom + 24);
      const startY = topTarget - vh / 2 + phoneH / 2 - 0.05 * phoneH;
      if (wrap) wrap.style.transform = 'translate(-50%, -50%) translateY(' + (restY + (startY - restY) * (1 - rise)).toFixed(1) + 'px)';
      // zoom invece di scale: il contenuto viene ridisegnato alla dimensione finale, niente sgranatura
      if (frame) { frame.style.zoom = scale.toFixed(4); frame.style.transform = 'none'; }
      this._bgTone = null; // calcolato dopo, quando si conosce lo step attivo
      if (hero) {
        // il titolo resta fermo e sfuma nel fondo: non sale, è il telefono che gli passa davanti
        let o = 1 - smooth(tRaw, 0, 0.05);   // sparito prima che il telefono arrivi: mai sovrapposti
        // tornando indietro la parte alta resta invisibile finché non si è del tutto in cima
        const goingUp = this._tPrev != null && tRaw < this._tPrev - 0.0005;
        // rilascio solo in cima o scendendo oltre l'ultima sezione nera; risalendo si rinasconde
        this._past = tRaw >= 0.985 && !goingUp;
        if (tRaw <= 0.004 || this._past) this._topHidden = false;
        else if (goingUp) this._topHidden = true;
        this._tPrev = tRaw;
        if (this._topHidden) o = 0;
        hero.style.transition = this._topHidden ? 'none' : 'opacity .28s ease';
        hero.style.opacity = o.toFixed(3);
        hero.style.transform = 'none';
        hero.style.pointerEvents = o > 0.6 ? 'auto' : 'none';
      }
      if (dots) dots.style.opacity = smooth(tRaw, this._T.riseEnd - 0.06, this._T.riseEnd).toFixed(3);

      // ── fase 2: tre step con pausa lunga e cambio rapido (una sola scritta per volta)
      const u = clamp01((t - this._T.stepsFrom) / (1 - this._T.stepsFrom));
      const raw = u * 3;
      let i = Math.min(2, Math.floor(raw));
      const frac = raw - i;
      const sw = this._curveAt(frac);             // 0 = fermo, 1 = cambio completato
      const next = Math.min(2, i + 1);
      const gapPx = Math.round(340 * sDark * 0.78 + 96);
      st.style.setProperty('--phone-gap', gapPx + 'px');
      const on = smooth(tRaw, this._T.stepsFrom - 0.08, this._T.stepsFrom);

      // tono di sfondo per step: nero, bianco, nero
      const TONE = [0, 1, 0];
      const toneNext = TONE[Math.min(2, i + 1)];
      const toneSw = smooth(frac, 0.62, 0.86);
      const tone = TONE[i] + (toneNext - TONE[i]) * (i >= 2 ? 0 : toneSw);
      // bianco → nero in una sola rampa: nessun plateau grigio a metà strada
      const intoDark = this._topHidden ? 1 : smooth(tRaw, 0.01, 0.15);   // dal bianco della hero allo step 1
      const light = 1 - intoDark * (1 - tone);
      const bgV = Math.round(255 * Math.pow(Math.max(0, light), 1.45));
      const bgCss = 'rgb(' + bgV + ',' + bgV + ',' + bgV + ')';
      if (sticky) sticky.style.background = bgCss;
      // la barra in alto prende lo stesso tono: nessuna fascia bianca staccata sopra la scena
      const hdrEl = document.querySelector('[data-header]');
      // superata la scena la barra torna chiara come nel resto della pagina
      if (hdrEl) hdrEl.style.background = this._past ? '#ffffff' : bgCss;
      const wantDark = !this._past && light < 0.5;
      if (!!this.state.hdrDark !== wantDark) this.setState({ hdrDark: wantDark });
      // il testo attivo cambia di scatto a metà transizione: la comparsa è a tempo, non a scroll
      const textIdx = sw > 0.5 ? next : i;
      if (textIdx !== this._stepShown) { this._stepShown = textIdx; this._showStep(textIdx); }
      for (let n = 0; n < 3; n++) {
        let o = 0, dir = 0;
        if (n === i) { o = i >= 2 ? 1 : 1 - sw; dir = i >= 2 ? 0 : -1; }
        else if (n === next && next !== i) { o = sw; dir = 1; }
        const step = st.querySelector('[data-step="' + n + '"]');
        if (step) {
          step.style.opacity = (n === textIdx ? on : 0).toFixed(3);
          step.style.pointerEvents = n === textIdx && t > this._T.stepsFrom - 0.02 ? 'auto' : 'none';
        }
        const sc = st.querySelector('[data-phone-screen="' + n + '"]');
        if (sc) {
          // la nuova schermata sale SOPRA la precedente, che resta ferma sotto
          const y = n <= i ? 0 : (n === next && next !== i) ? 100 * (1 - sw) : 100;
          sc.style.opacity = 1;
          sc.style.zIndex = n + 1;
          sc.style.transform = 'translateY(' + y.toFixed(1) + '%)';
          sc.style.pointerEvents = y < 5 ? 'auto' : 'none';
        }
        const dot = st.querySelector('[data-phone-dot="' + n + '"]');
        if (dot) {
          const on = o > 0.5;
          const strong = light > 0.5 ? '#000000' : '#ffffff';
          const weak = light > 0.5 ? 'rgba(0,0,0,0.20)' : 'rgba(255,255,255,0.32)';
          dot.style.background = on ? strong : weak;
          dot.style.width = on ? '26px' : '9px';
        }
      }
    };
    // fermate: hero → telefono salito → inizio esatto di ogni step (frac 0, schermata a translateY(0))
    this._snapAnchors = () => {
      const s = this._T.stepsFrom, span = (1 - s) / 3;
      // niente fermata a metà salita: dalla hero si va diretti al primo step
      return [0, s + 0.002, s + span + 0.002, s + 2 * span + 0.002];
    };
    // ── un gesto = un passo, con attesa obbligatoria: scrollare veloce non brucia i tre step
    this._stagePinned = (dirDown) => {
      const st = document.querySelector('[data-stage]');
      if (!st) return false;
      const sp = this._scrollport();
      const portH = sp ? sp.clientHeight : window.innerHeight;
      const portTop = sp ? sp.getBoundingClientRect().top : 0;
      const r = st.getBoundingClientRect();
      if (r.top - portTop > 1 || r.bottom - portTop < portH - 1) return false;
      const t = this._stageTarget();
      return dirDown ? t < 0.995 : t > 0.005;
    };
    this._goAnchor = (idx) => {
      const st = document.querySelector('[data-stage]');
      if (!st) return;
      const a = this._snapAnchors().concat([1]);
      idx = Math.max(0, Math.min(a.length - 1, idx));
      const sp = this._scrollport();
      const portH = sp ? sp.clientHeight : window.innerHeight;
      const total = st.offsetHeight - portH;
      if (total <= 0) return;
      const stTop = sp ? (st.getBoundingClientRect().top - sp.getBoundingClientRect().top + sp.scrollTop) : (st.getBoundingClientRect().top + window.scrollY);
      const from = sp ? sp.scrollTop : window.scrollY;
      const to = stTop + a[idx] * total;
      const dur = idx === 1 ? 1150 : 700;   // il primo passo ribalta bianco→nero: va preso con calma
      this._lockUntil = performance.now() + dur + 240;   // finestra di attesa: i gesti in eccesso vengono ignorati
      clearInterval(this._snapTween);
      const write = (y) => { if (sp) sp.scrollTop = y; else window.scrollTo(0, y); };
      const t0 = performance.now();
      this._snapping = true;
      this._snapTween = setInterval(() => {
        const k = Math.min(1, (performance.now() - t0) / dur);
        write(from + (to - from) * (1 - Math.pow(1 - k, 3)));
        if (this._stage) this._stage();
        if (k >= 1) { clearInterval(this._snapTween); this._snapping = false; this._snapEnd = performance.now(); }
      }, 16);
    };
    this._stageGesture = (dirDown) => {
      const t = this._stageTarget();
      const a = this._snapAnchors().concat([1]);
      let idx = null;
      if (dirDown) { for (let k = 0; k < a.length; k++) if (a[k] > t + 0.01) { idx = k; break; } }
      else { for (let k = a.length - 1; k >= 0; k--) if (a[k] < t - 0.01) { idx = k; break; } }
      if (idx == null) return;
      this._goAnchor(idx);
    };
    this._onWheel = (e) => {
      if (Math.abs(e.deltaY) < 1) return;
      const dirDown = e.deltaY > 0;
      if (!this._stagePinned(dirDown)) return;
      e.preventDefault();
      if (performance.now() < (this._lockUntil || 0)) return;
      this._stageGesture(dirDown);
    };
    this._onTouchStart = (e) => { this._tY = e.touches && e.touches[0] ? e.touches[0].clientY : null; };
    this._onTouchMove = (e) => {
      if (this._tY == null || !e.touches || !e.touches[0]) return;
      const dy = this._tY - e.touches[0].clientY;
      const dirDown = dy > 0;
      if (!this._stagePinned(dirDown)) return;
      e.preventDefault();
      if (performance.now() < (this._lockUntil || 0)) return;
      if (Math.abs(dy) < 26) return;
      this._tY = e.touches[0].clientY;
      this._stageGesture(dirDown);
    };
    this._onKeyStage = (e) => {
      const k = e.key;
      const dirDown = k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'Spacebar';
      const dirUp = k === 'ArrowUp' || k === 'PageUp';
      if (!dirDown && !dirUp) return;
      if (!this._stagePinned(dirDown)) return;
      e.preventDefault();
      if (performance.now() < (this._lockUntil || 0)) return;
      this._stageGesture(dirDown);
    };
    // il vecchio snap a fine scroll è disattivato: lo stage è guidato solo dai gesti (_goAnchor)
    this._snap = () => {};
    this._snapOld = () => {
      const st = document.querySelector('[data-stage]');
      if (!st || this._snapping) return;
      const sp = this._scrollport();
      const portH = sp ? sp.clientHeight : window.innerHeight;
      const total = st.offsetHeight - portH;
      if (total <= 0) return;
      const t = this._stageTarget();
      if (t <= 0.001 || t >= 0.999) return;
      const anchors = this._snapAnchors().concat([1]);
      const down = this._hDir !== 'up';
      let target = null;
      if (down) { for (const x of anchors) if (x > t + 0.004) { target = x; break; } }
      else { for (let k = anchors.length - 1; k >= 0; k--) if (anchors[k] < t - 0.004) { target = anchors[k]; break; } }
      // se nella direzione del gesto non c'è più nulla, aggancia il più vicino: mai due step a metà
      if (target == null) {
        target = anchors.reduce((best, x) => Math.abs(x - t) < Math.abs(best - t) ? x : best, anchors[0]);
      }
      if (Math.abs(target - t) < 0.004) return;
      const stTop = sp ? (st.getBoundingClientRect().top - sp.getBoundingClientRect().top + sp.scrollTop) : (st.getBoundingClientRect().top + window.scrollY);
      const from = sp ? sp.scrollTop : window.scrollY;
      const to = stTop + target * total;
      // tween scritto a mano su timer: lo scroll smooth nativo qui non muove nulla
      const dur = Math.min(700, Math.max(260, Math.abs(to - from) * 0.9));
      const t0 = performance.now();
      this._snapping = true;
      clearInterval(this._snapTween);
      const write = (y) => { if (sp) sp.scrollTop = y; else window.scrollTo(0, y); };
      this._snapTween = setInterval(() => {
        if (!this._snapping) { clearInterval(this._snapTween); return; }
        const k = Math.min(1, (performance.now() - t0) / dur);
        write(from + (to - from) * (1 - Math.pow(1 - k, 3)));
        if (this._stage) this._stage();
        if (k >= 1) {
          clearInterval(this._snapTween);
          this._snapping = false;
          this._snapEnd = performance.now();
        }
      }, 16);
    };

    this._syncHeader = () => {
      const h = document.querySelector('[data-header]');
      if (!h) return;
      let dark = false;
      if (document.querySelector('[data-stage]')) return;   // sulla home il tono lo detta lo stage
      if (!!this.state.hdrDark !== dark) this.setState({ hdrDark: dark });
      h.style.background = dark ? '#000000' : '#ffffff';
    };
    this._onScroll = () => {
      this._syncHeader();
      // se la hero è in pagina ma il loop non gira (es. dopo un cambio pagina), riparte qui
      if (!this._rafAlive && this._stageLoop) this._raf = requestAnimationFrame(this._stageLoop);
      if (this._stage) this._stage();
      const h = document.querySelector('[data-header]');
      const inner = document.querySelector('[data-header-inner]');
      if (!h || !inner) return;
      // sopra l'hero-cielo la barra è trasparente, poi diventa bianca piena
      // header che si nasconde scendendo e ricompare risalendo
      const y = window.scrollY;
      const prev = this._lastY == null ? y : this._lastY;
      const dy = y - prev;
      if (Math.abs(dy) > 2) this._hDir = dy > 0 ? 'down' : 'up';
      if (!this._snapping) this._lastDy = dy;
      this._lastY = y;
      // finché la scena nera sta dietro la barra (in qualunque direzione) la barra resta fuori
      const st = document.querySelector('[data-stage]');
      let overDark = false;
      if (st) { const r = st.getBoundingClientRect(); overDark = r.top < h.offsetHeight * 0.5 && r.bottom > h.offsetHeight * 0.5; }
      const hidden = (y > 140 && this._hDir === 'down') || (overDark && y > 10) || !!this._topHidden;
      h.style.transition = 'transform 380ms cubic-bezier(.22,.61,.36,1), opacity 260ms ease';
      h.style.transform = hidden ? 'translateY(-100%)' : 'translateY(0)';
      h.style.opacity = hidden ? '0' : '1';
      h.style.pointerEvents = hidden ? 'none' : 'auto';
      h.style.backdropFilter = 'none';
      h.style.boxShadow = 'none';
    };
    const track = document.querySelector('[data-rotator-track]');
    const lines = Array.from(document.querySelectorAll('[data-line]'));
    let wi = 0;
    const paintLines = () => lines.forEach((l, k) => { l.style.color = (k === wi + 1) ? '#000000' : '#c4c4d0'; });
    const step = () => (lines[0] ? lines[0].getBoundingClientRect().height : 65);
    if (track) {
      paintLines();
      this._wt = setInterval(() => {
        wi += 1;
        track.style.transition = 'transform 0.85s cubic-bezier(0.22,1,0.36,1)';
        track.style.transform = 'translateY(' + (-step() * wi) + 'px)';
        paintLines();
        if (wi === 4) {
          setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateY(0)';
            wi = 0;
            paintLines();
          }, 900);
        }
      }, 2200);
    }
    this._onScroll();
    window.addEventListener('scroll', this._onScroll, { passive: true });
    // in alcune viste il contenitore che scorre non è la finestra: intercetta anche quelli
    document.addEventListener('scroll', this._onScroll, { passive: true, capture: true });
    this._syncHeader();
    window.addEventListener('resize', this._syncHeader);
    this._raf = requestAnimationFrame(this._stageLoop);
    // guardia: se la scena c'è ma il loop non gira (cambio pagina, tab in background), riparte
    this._keepAlive = setInterval(() => {
      if (!document.querySelector('[data-stage]')) return;
      if (!this._rafAlive) this._raf = requestAnimationFrame(this._stageLoop);
    }, 400);
    // lo snap parte solo dopo un gesto reale dell'utente, mai dagli eventi di scroll che genera lui stesso
    this._userIntent = () => {
      this._snapping = false;
      clearTimeout(this._snapT);
      this._snapT = setTimeout(() => {
        if (performance.now() - (this._snapEnd || 0) < 300) return;
        this._snap();
      }, 140);
    };
    this._breakSnap = this._userIntent;
    window.addEventListener('wheel', this._onWheel, { passive: false });
    window.addEventListener('touchstart', this._onTouchStart, { passive: true });
    window.addEventListener('touchmove', this._onTouchMove, { passive: false });
    window.addEventListener('keydown', this._onKeyStage);
    this._fit();
    window.addEventListener('resize', this._fit);
    window.addEventListener('resize', () => { if (this._stage) this._stage(); });
    this._startChat();
    this._t = setTimeout(this._fit, 300);
  }
  _startChat() {
    const msgs = [
      { t: "Domani l'autoscuola resta chiusa per il ponte.", tag: 'A tutti' },
      { t: 'Da lunedì la teoria si sposta alle 18:30.', tag: 'Allievi patente B' },
      { t: 'Ricordate il foglio rosa alla guida di domani.', tag: 'Guide di domani' },
      { t: "Nuovi quiz disponibili nell'app: allenatevi!", tag: 'A tutti gli allievi' },
      { t: 'Grazie a tutti, siete stati grandi questo mese.', tag: 'Istruttori' },
    ];
    let mi = 0, ci = 0, dir = 1;
    const tick = () => {
      const m = msgs[mi];
      if (dir === 1) {
        ci += 1;
        this.setState({ chatText: m.t.slice(0, ci), chatTag: m.tag });
        if (ci >= m.t.length) { dir = -1; this._chatTimer = setTimeout(tick, 1900); return; }
        this._chatTimer = setTimeout(tick, 40 + Math.random() * 40);
      } else {
        ci -= 1;
        this.setState({ chatText: m.t.slice(0, ci) });
        if (ci <= 0) { dir = 1; mi = (mi + 1) % msgs.length; this._chatTimer = setTimeout(tick, 360); return; }
        this._chatTimer = setTimeout(tick, 18);
      }
    };
    this._chatTimer = setTimeout(tick, 700);
  }
  // in riproduzione: se il video esce dalla vista passa in picture-in-picture, e rientra quando torna visibile
  _bindAutoPiP(el) {
    if (!el || el === this._pipEl) return;
    this._pipEl = el;
    // hover del riquadro con listener nativi: più affidabili degli onMouse* delegati
    const box = el.parentElement;
    if (box && !box._hoverBound) {
      box._hoverBound = true;
      const show = () => { if (!this.state.istrHover) this.setState({ istrHover: true }); };
      const hide = () => this.setState({ istrHover: false });
      box.addEventListener('mouseenter', show);
      box.addEventListener('mousemove', show);
      box.addEventListener('mouseover', show);
      box.addEventListener('mouseleave', hide);
    }
    if (!el._playBound) {
      el._playBound = true;
      el.addEventListener('play', () => this.setState({ istrPlaying: true }));
      el.addEventListener('pause', () => this.setState({ istrPlaying: false }));
      el.addEventListener('ended', () => this.setState({ istrPlaying: false }));
    }
    if (this._pipObs) this._pipObs.disconnect();
    this._pipObs = new IntersectionObserver(async (entries) => {
      const e = entries[0];
      if (!e) return;
      const supported = document.pictureInPictureEnabled && !el.disablePictureInPicture;
      if (!supported) return;
      try {
        if (!e.isIntersecting && !el.paused && document.pictureInPictureElement !== el) {
          await el.requestPictureInPicture();
        } else if (e.isIntersecting && document.pictureInPictureElement === el) {
          await document.exitPictureInPicture();
        }
      } catch (err) {}
    }, { threshold: 0.35 });
    this._pipObs.observe(el);
  }
  _openMail(addr) {
    const url = 'mailto:' + addr;
    try { if (window.top && window.top !== window) { window.top.location.href = url; return; } } catch (e) {}
    const a = document.createElement('a');
    a.href = url; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
  }
  componentWillUnmount() {
    if (this._pipObs) this._pipObs.disconnect();
    if (this._alignObserver) this._alignObserver.disconnect();
    window.removeEventListener('resize', this._fit);
    window.removeEventListener('scroll', this._onScroll);
    window.removeEventListener('wheel', this._onWheel);
    window.removeEventListener('touchstart', this._onTouchStart);
    window.removeEventListener('touchmove', this._onTouchMove);
    window.removeEventListener('keydown', this._onKeyStage);
    clearTimeout(this._snapT);
    clearInterval(this._keepAlive);
    clearInterval(this._snapTween);
    this._snapping = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    clearTimeout(this._t);
    clearInterval(this._wt);
    clearTimeout(this._chatTimer);
  }
  _refOptStyle(sel) {
    return {
      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginTop: '1px',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      border: sel ? 'none' : '1.5px solid #bbbbbb',
      background: sel ? '#000000' : '#ffffff', transition: 'background 0.15s',
    };
  }
  renderVals() {
    const _mesi = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
    const _d = new Date();
    const dataNumeri = _mesi[_d.getMonth()] + ' ' + _d.getFullYear();
    const PAL = [
      { bg: '#dbeafe', fg: '#1e3a5f' }, { bg: '#fce7f0', fg: '#be1250' }, { bg: '#dcfce7', fg: '#15803d' },
      { bg: '#ede9fe', fg: '#5b21b6' }, { bg: '#fff0dd', fg: '#b45309' }, { bg: '#d9f2f4', fg: '#0e7490' },
    ];
    const reviewsData = [
      { name: 'n.mor95', role: 'Recensione su App Store', date: '4 mag', img: 1, title: 'Applicazione Fantastica e comodissima', text: "Applicazione comodissima… prima di questa eravamo abituati al cartaceo… tutto un altra storia fluidità nel gestire le guide il lavoro diventa molto più dinamico, il lavoro della segreteria diventa molto più snello… da non sottovalutare il lavoro dei moderatori !!! Sono fortissimi e sempre pronti a risolvere i problemi soggettivi che ogni autoscuola può avere… super consigliata !!" },
      { name: 'Marco', role: 'Istruttore · Scuola Guida Montreal', date: '29 gen 2026', title: 'La mia giornata sempre in tasca', text: "A me interessava una cosa sola: sapere chi ho in macchina e quando, senza dover chiamare in sede tra una guida e l'altra. Apro l'app e c'è la mia giornata. Se un allievo disdice, mi arriva la notifica e vedo lo slot riempirsi da solo." },
      { name: 'Vinicio', role: 'Titolare · Autoscuola New Drive', date: '14 mar 2026', title: 'Crediti chiari, zero discussioni', text: "I crediti guida sul quaderno erano discussioni continue: «io avevo pagato», «a me ne mancavano due»… Adesso allievo e segreteria vedono lo stesso numero, aggiornato a ogni guida. Non se ne parla più, letteralmente." },
      { name: 'Autoscuola Robatto', role: 'Da un loro suggerimento sono nate le guide di gruppo', date: '22 mag 2026', title: 'Ci hanno ascoltato davvero', text: "Le uscite collettive erano un incastro impossibile da segnare in agenda: uno slot per allievo, tutto a mano.\n\nL'abbiamo detto a Reglo e qualche mese dopo c'era la funzione: crei l'uscita con i posti, gli allievi abilitati si iscrivono da soli. Oggi le guide di gruppo le facciamo ogni settimana." },
      { name: 'Francesca', role: 'Segreteria · Autoscuola Centrale', date: '3 apr 2026', title: 'Il centralino non lo faccio più io', text: "Il telefono squillava tutto il giorno, quasi sempre per spostare o disdire una guida. Ora quel giro passa dall'app, e la Segretaria AI risponde quando siamo chiuse. Io mi occupo delle pratiche, non del centralino." },
      { name: 'Giorgio', role: 'Titolare · due sedi', date: '18 giu 2026', title: 'Due sedi, una sola testa', text: 'Due sedi, due agende, gli stessi istruttori che girano tra le due. Con un solo account vedo tutto: chi è dove, quali veicoli, quali allievi. Prima erano due lavagne e un gruppo WhatsApp.' },
      { name: 'Martina', role: 'Istruttrice', date: '9 mag 2026', title: '«Sostituiscimi» mi ha salvato la settimana', text: 'Mi sono ammalata un lunedì con dodici guide in settimana. Ho premuto «Sostituiscimi» e le guide sono passate ai colleghi, con gli allievi avvisati in automatico. Nessuna telefonata dal letto.' },
      { name: 'Luca', role: 'Titolare · Autoscuola Sprint', date: '27 feb 2026', title: 'Meno bocciature alla teoria', text: "Prima di prenotare l'esame di teoria guardo le percentuali dei quiz sull'app: se un argomento è rosso, si ripassa. Le bocciature al primo tentativo sono calate, e si vede anche sul calendario delle guide." },
      { name: 'Paola', role: 'Segreteria', date: '30 giu 2026', title: 'Un avviso, tutti informati', text: "Chiusura di Ferragosto: un comunicato dall'app e l'hanno ricevuto tutti gli allievi, con conferma. Gli anni scorsi era un pomeriggio di telefonate e un cartello in vetrina." },
      { name: 'Andrea', role: 'Titolare', date: '5 lug 2026', title: "Preso per l'agenda, tenuto per la Segretaria", text: "L'ho preso per l'agenda. Lo tengo per la Segretaria AI: risponde lei anche alle otto di sera, e la mattina trovo le conversazioni trascritte." },
    ];
    const faqsData = [
      { q: 'Io non faccio prenotare i ragazzi, posso usare Reglo?', a: "Certo. La prenotazione autonoma si può spegnere o limitare: in quel caso le guide le fissa la segreteria come hai sempre fatto, e gli allievi usano l'app solo per vedere agenda, crediti e promemoria. Detto questo, abbiamo previsto qualsiasi limite, preferenza e impostazione — cutoff, tetti settimanali, chi può prenotare cosa e quando — quindi puoi far prenotare gli allievi in totale tranquillità." },
      { q: 'Posso continuare a usare i miei moduli e le mie ricevute?', a: 'Sì. Reglo organizza agenda, allievi e crediti, ma non ti obbliga a cambiare la parte amministrativa: moduli, ricevute e fatturazione restano come li hai sempre gestiti.' },
      { q: 'Quanto tempo richiede la migrazione dei dati?', a: "Le impostazioni le scegliamo insieme in una call di onboarding di 30 minuti con il consulente dedicato;  dove carichiamo dati, allievi, crediti residui, istruttori e orari, ecc — Mentre la migrazione completa richiede circa una settimana e la seguiamo noi." },
      { q: 'I miei dati sono al sicuro?', a: 'Sì: server in Unione Europea e trattamento conforme al GDPR. I dati restano tuoi — se un giorno te ne vai, te li riconsegnamo.' },
      { q: 'Cosa succede se voglio annullare?', a: "Disdici in un click dall'area personale, senza penali: l'abbonamento resta attivo fino alla scadenza già pagata e non si rinnova." },
      { q: 'Funziona anche per altri tipi di patenti oltre la B?', a: 'Sì, abbiamo pensato a tutti: agenda, crediti, app e notifiche funzionano allo stesso modo per qualsiasi categoria di patente. I quiz ministeriali riguardano le patenti auto e moto.' },
    ];
    const rinFaqsData = [
      { q: 'Chi rinnova la patente con voi non è un allievo: lo devo comunque caricare?', a: "No. Chi rinnova entra da un link pubblico, carica i documenti e prenota senza diventare un allievo della tua autoscuola: resta nei rinnovi, con la sua pratica e il suo storico." },
      { q: 'Posso mandarlo al posto del messaggio lungo su WhatsApp?', a: "È esattamente il suo scopo. Al posto del messaggio con documenti, orari, costi e lista delle patologie mandi un link: la persona segue i passaggi e tu ricevi la pratica completa." },
      { q: 'Posso tenere il mio medico invece della mappa?', a: "Sì. Puoi lasciare la mappa dei medici certificatori più vicini, oppure fissare un solo medico affiliato: in quel caso gli allievi vedono solo i suoi orari liberi." },
      { q: 'Il questionario sulle patologie ha valore legale?', a: "Non sostituisce la visita: serve a capire prima cosa portare. I percorsi di domande sono costruiti con flussi di intelligenza artificiale e poi validati da medici militari abilitati dalla Motorizzazione, così nessuno scopre in visita che non può rinnovare." },
      { q: 'La patente dove arriva?', a: 'Dopo la visita resta il permesso provvisorio di guida. La patente nuova arriva a casa in pochi giorni, oppure si ritira in sede: lo stato della pratica è sempre visibile in app. Sul corriere che non trova nessuno a casa — con la patente che torna in centrale — stiamo ancora lavorando per trovare una soluzione: oggi ti avvisiamo prima della consegna, ma non ci basta.' },
      { q: 'Serve cambiare il modo di lavorare in autoscuola?', a: "No: i rinnovi restano tuoi, con i tuoi prezzi e i tuoi medici. Cambia solo che le pratiche arrivano già in ordine, senza il messaggio lungo su WhatsApp." },
    ];
    const przFaqsData = [
      { q: 'Il canone si paga per istruttore: se ne aggiungo uno?', a: "Ogni account istruttore in più si aggiunge al canone, pro rata fino alla scadenza dell'abbonamento. Se invece un istruttore lascia, il suo account può essere riassegnato a un nuovo istruttore senza costi aggiuntivi, per l'intera durata dell'abbonamento." },
      { q: 'Ci sono costi di attivazione o di migrazione?', a: "No. Attivazione, migrazione dei dati e formazione sono comprese: allievi, crediti residui, istruttori e orari li carichiamo insieme in una chiamata dedicata di 30 minuti." },
      { q: 'Come funziona la fatturazione?', a: "Canone annuale anticipato, fatturato all'attivazione e a ogni rinnovo. I moduli aggiuntivi seguono la stessa scadenza, così hai una sola data da ricordare." },
      { q: 'Come si paga la Segretaria AI?', a: "Un costo di attivazione una volta, poi solo il consumo: 0,06 € al minuto di conversazione. Nessun canone fisso e nessun minimo, quindi nei mesi tranquilli spendi poco." },
      { q: 'Cosa succede se voglio annullare?', a: "Disdici in un click dall'area personale, senza penali: l'abbonamento resta attivo fino alla scadenza già pagata e non si rinnova." },
    ];
    const segFaqsData = [
      { q: 'Serve cambiare il numero dell\'autoscuola?', a: "Dipende da come vuoi usarla, e le strade sono tre. Puoi pubblicare il numero nuovo della segretaria, che risponde sempre e passa la chiamata a una persona quando serve. Puoi collegare il numero che usi oggi alla segretaria, rinunciando al passaggio all'operatore. Oppure tenere il numero attuale e farla rispondere solo a porte chiuse: operatore quando siete aperti, segretaria di notte, con un codice da digitare dal telefono in apertura e in chiusura." },
      { q: 'Quanto costa?', a: "Si paga un costo di attivazione una volta, poi solo il consumo: paghi le chiamate che risponde davvero. Nessun canone fisso, nessun minimo — nei mesi tranquilli spendi meno." },
      { q: 'Chi chiama capisce che non è una persona?', a: "Si presenta come assistente dell'autoscuola, con il nome e la voce che scegli tu: niente finzioni. Nella pratica chi chiama ottiene la risposta su orari, prezzi o documenti e chiude, invece di restare in attesa o riattaccare." },
      { q: 'Posso decidere cosa può dire e cosa no?', a: "Sì, ed è la parte che conta. Scrivi tu le informazioni che può dare e gli argomenti su cui non deve rispondere: fuori da quei confini prende il messaggio o passa la chiamata, secondo le regole che imposti." },
      { q: 'Cosa resta dopo la telefonata?', a: "Tutto: registrazione, trascrizione e un riassunto di cosa voleva la persona, dentro Reglo. Se il numero è di un allievo finisce nella sua scheda, così nessuno deve più chiedere «chi era e cosa voleva?»." },
    ];
    const coreFaqsData = [{"q":"Gli allievi possono prenotare all’infinito?","a":"No, sei tu ad aprire il calendario per una, due, quattro settimane o più. Oltre quel limite gli allievi non vedono nulla, così non ti riempiono l’agenda a mesi di distanza."},{"q":"E i giorni di chiusura o le festività?","a":"I giorni che segni come festivi — nazionali o locali — restano chiusi alle prenotazioni, senza doverli bloccare uno per uno."},{"q":"Come evito le prenotazioni all’ultimo minuto?","a":"Fissi un orario di chiusura e l’allievo non può più prendere la guida del giorno dopo. Tu e gli istruttori potete sempre inserirla a mano."},{"q":"C’è chi prenota cinque guide in una settimana e blocca gli altri.","a":"Metti un massimo settimanale per allievo. Resta un limite per l’app: tu e gli istruttori potete sempre superarlo confermando voi la guida."},{"q":"Le prime ore del mattino restano sempre vuote.","a":"Puoi indicare una fascia poco richiesta: chi è disponibile in quell’orario potrà prenotare solo lì, finché non si riempie."}];
    const reviewsOpen = this.state.reviewsOpen;
    const openFaq = this.state.openFaq === undefined ? 0 : this.state.openFaq;
    const istrFaqsData = [
      { q: 'A cosa serve inserire le disponibilità degli istruttori?', a: "Le disponibilità possono essere fisse oppure inserite settimana per settimana quando ci sono cambi. Servono agli allievi per prenotare rispettando orari e pause di ogni istruttore." },
      { q: 'Se un allievo non può venire, deve chiamare?', a: "No, se attivi l\u2019annullamento da app. Lo slot torna libero subito e gli altri possono prenderlo, senza telefonate in segreteria." },
      { q: 'L\u2019allievo può scegliere il suo istruttore?', a: "Come preferisci. Se lo consenti, sceglie l\u2019istruttore in fase di prenotazione; altrimenti vede le proposte di tutti. Un allievo può anche restare assegnato allo stesso istruttore per tutto il percorso." },
      { q: 'Gli allievi vedono le note degli istruttori?', a: "Decidi tu: puoi tenere le note interne alla scuola oppure renderle visibili in app, così l\u2019allievo sa su cosa lavorare alla guida successiva." },
      { q: 'Ho un istruttore che ha tutto un suo modo di gestire l\u2019agenda.', a: "Abbiamo pensato anche ai più esigenti: con la modalità autonoma gestisce da solo allievi e regole, dentro i confini che decidi tu. E sappiamo che l\u2019età media degli istruttori è alta: per questo l\u2019app e il modo di gestire le cose sono semplici davvero per tutti." },
    ];
    const PHOTOS = [
      'uploads/7-99ac5f3b.png', 'uploads/1.png', 'uploads/2.png', 'uploads/8.png', 'uploads/3.png',
      'uploads/4.png', 'uploads/5.png', 'uploads/10.png', 'uploads/6.png', 'uploads/11.png',
    ];
    const mk = (r, i) => ({
      ...r,
      text: r.text.replace(/\n+/g, ' '),
      initials: '',
      avatarStyle: {
        display: 'inline-block', width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
        backgroundColor: '#f0f0f4',
        backgroundImage: 'url(' + PHOTOS[i % PHOTOS.length] + ')',
        backgroundSize: 'cover', backgroundPosition: 'center 22%',
      },
    });
    const half = Math.ceil(reviewsData.length / 2);
    const aList = reviewsData.slice(0, half).map(mk);
    const bList = reviewsData.slice(half).map(mk);
    const store = this.state.store;
    const btn = (on) => ({
      display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 26px',
      borderRadius: '999px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', userSelect: 'none',
      background: on ? '#000000' : '#ffffff',
      color: on ? '#ffffff' : '#000000',
      border: on ? '1.5px solid #000000' : '1.5px solid #e0e0e6',
      transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
    });
    const menuOpen = !!this.state.menuOpen;
    const NV_TABS = [
      { id: 'tutte', label: 'Tutte' }, { id: 'changelog', label: 'Changelog' }, { id: 'lanci', label: 'Lanci di prodotto' },
      { id: 'team', label: 'Dal team' }, { id: 'autoscuole', label: 'Dalle autoscuole' }, { id: 'stampa', label: 'Stampa' },
    ];
    const NV_CARDS = [
      { cat: 'lanci', slotId: 'nv-guide-gruppo', ph: 'Immagine guide di gruppo', title: 'Arrivano le guide di gruppo', desc: "Crea un'uscita con più posti e lascia che gli allievi abilitati si iscrivano da soli, fino a esaurimento. Senza moltiplicare gli slot in agenda.", meta: 'Team Reglo · 20 lug 2026' },
      { cat: 'autoscuole', slotId: 'nv-robatto', ph: 'Foto Autoscuola Robatto', title: "L'Autoscuola Robatto e le uscite collettive", desc: "Cercavano un modo per gestire le lezioni pratiche di gruppo senza riempire l'agenda a mano. Dal loro suggerimento è nata la funzione.", meta: 'Storia cliente · 15 lug 2026' },
      { cat: 'lanci', slotId: 'nv-segretaria', ph: 'Immagine Segretaria AI', title: 'La Segretaria AI risponde per te', desc: 'Informazioni, richieste e trasferimenti secondo le tue regole, anche a scuola chiusa. Ogni chiamata resta registrata e trascritta.', meta: 'Team Reglo · 12 giu 2026' },
      { cat: 'team', slotId: 'nv-ritardi', ph: 'Immagine manifesto', title: 'Odiamo i ritardi', desc: 'Il tempo si perde nelle cose su cui si perde tempo: telefonate, quaderni, crediti da ricontare. Perché Reglo esiste.', meta: 'Dal team · 4 giu 2026' },
      { cat: 'lanci', slotId: 'nv-aula', ph: 'Immagine Reglo Aula', title: 'Reglo Aula: la teoria entra in piattaforma', desc: "Quiz ministeriali ed esercitazioni nell'app dell'allievo, con i progressi visibili in segreteria. Attivabile come modulo.", meta: 'Team Reglo · 28 mag 2026' },
      { cat: 'team', slotId: 'nv-migrazione', ph: 'Immagine migrazione', title: 'Come accompagniamo la migrazione', desc: 'Allievi, crediti residui, istruttori e orari: carichiamo tutto insieme in un pomeriggio. Dal giorno dopo si lavora su Reglo.', meta: 'Dal team · 19 mag 2026' },
      { cat: 'stampa', slotId: 'nv-capterra', ph: 'Badge Capterra', title: 'Reglo premiata su Capterra', desc: "Best Ease of Use 2025: il riconoscimento assegnato ai software con la migliore esperienza d'uso della categoria.", meta: 'Stampa · 30 apr 2026' },
    ];
    const NV_STRIP = [
      { title: 'Guide di gruppo', desc: 'Uscite collettive con posti limitati e iscrizione autonoma degli allievi abilitati.', date: '22 lug 2026', hot: true },
      { title: 'Priorità esame in agenda', desc: "Slot riservati e precedenza automatica a chi ha l'esame nei giorni successivi.", date: '16 lug 2026' },
      { title: 'Comunicati push mirati', desc: 'Un avviso a tutti gli allievi o solo a chi riguarda, con conferma di lettura.', date: '30 giu 2026' },
      { title: '«Sostituiscimi» con un tap', desc: 'Le guide di un istruttore assente passano a un collega e gli allievi vengono avvisati.', date: '17 giu 2026' },
    ];
    const NV_ARCHIVE = [
      { title: 'Perché abbiamo tolto il registro cartaceo', meta: 'Gab · 19 dic 2025' },
      { title: 'Come lavora il supporto di Reglo', meta: 'Team Reglo · 6 nov 2025' },
      { title: 'Pianificare le guide senza telefonate', meta: 'Team Reglo · 30 ott 2025' },
      { title: 'Due sedi, un solo account', meta: 'Team Reglo · 29 ott 2025' },
      { title: 'Quiz ministeriali: i numeri del primo anno', meta: 'Team Reglo · 22 ott 2025' },
      { title: 'Un tour della nuova agenda', meta: 'Team Reglo · 21 ott 2025' },
    ];
    const NV_MORE = [
      { title: 'Crediti guida: la fine delle discussioni', meta: 'Team Reglo · 7 ott 2025' },
      { title: 'Le penali disdette spiegate bene', meta: 'Team Reglo · 24 set 2025' },
      { title: 'Il primo anno di Reglo, in numeri', meta: 'Gab · 10 set 2025' },
    ];
    const NV_ACC = [
      { label: 'Correzioni', items: ['Risolto un caso in cui la disdetta di una guida di gruppo non liberava il posto.', 'Sistemato il conteggio ore istruttore nelle settimane con festivi.', 'Corretti i promemoria duplicati per gli allievi con due patenti in corso.'] },
      { label: 'Miglioramenti', items: ["L'agenda settimanale carica il doppio più veloce sulle sedi con molti istruttori.", 'La ricerca allievi ora trova anche i numeri di telefono parziali.', 'Nuovo riepilogo posti disponibili nella scheda della guida di gruppo.'] },
      { label: 'API', items: ['Nuovo endpoint per leggere le iscrizioni alle guide di gruppo.', 'Il webhook delle prenotazioni include ora il luogo di ritrovo.'] },
    ];
    const nvTab = this.state.nvTab || 'changelog', nvQ = (this.state.nvQ || '').trim().toLowerCase();
    const nvFiltered = NV_CARDS.filter(c => (nvTab === 'tutte' || c.cat === nvTab) && (!nvQ || c.title.toLowerCase().includes(nvQ) || c.desc.toLowerCase().includes(nvQ)));
    const page = this.state.page || 'home';
    return {
      // fuori dalla home e dagli istruttori l'header è sempre chiaro: niente logo bianco su bianco
      hdrDark: !!this.state.hdrDark && page === 'home',
      hdrLight: !(!!this.state.hdrDark && page === 'home'),
      hdrAccediStyle: {
        display: 'inline-flex', alignItems: 'center', height: '44px', padding: '0 20px', borderRadius: '12px',
        fontSize: 'clamp(14px, 1.15vw, 16px)', fontWeight: 600,
        color: page === 'login' ? '#000000' : (this.state.hdrDark ? '#ffffff' : '#4a4a55'),
        background: page === 'login' ? '#ececef' : 'transparent',
        cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s ease, color 0.2s ease',
      },
      hdrCtaStyle: {
        display: 'inline-flex', alignItems: 'center', height: '44px', padding: '0 24px', borderRadius: '12px',
        background: this.state.hdrDark ? '#ffffff' : '#000000',
        color: this.state.hdrDark ? '#000000' : '#ffffff',
        fontSize: 'clamp(14px, 1.15vw, 16px)', fontWeight: 700, whiteSpace: 'nowrap',
        transition: 'background 0.2s ease',
      },
      dataNumeri,
      menuOpen,
      isHome: page === 'home',
      isNovita: page === 'novita',
      isPrezzi: page === 'prezzi',
      isSoon: page === 'soon',
      goSoon: () => { this.setState({ page: 'soon', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goPrezzi: () => { this.setState({ page: 'prezzi', menuOpen: false }); window.scrollTo({ top: 0 }); },
      isCore: page === 'core',
      isTeam: page === 'team',
      isPrivacy: page === 'privacy',
      is404: page === '404',
      isLogin: page === 'login',
      hdrVisible: page !== 'login',
      go404: () => { this.setState({ page: '404', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goLogin: () => {
        if (!this._revTimer) this._startRevTimer();
        this.setState({ page: 'login', menuOpen: false });
        window.scrollTo({ top: 0 });
      },
      emailValue: this.state.emailValue,
      onEmailInput: (e) => this.setState({ emailValue: e.target.value }),
      pwValue: this.state.pwValue,
      onPwInput: (e) => this.setState({ pwValue: e.target.value }),
      pwType: this.state.pwVisible ? 'text' : 'password',
      pwHidden: !this.state.pwVisible,
      pwShown: this.state.pwVisible,
      togglePw: () => this.setState(s => ({ pwVisible: !s.pwVisible })),
      loginLabel: this.state.loggingIn ? 'Accesso in corso…' : 'Accedi',
      doLogin: () => {
        if (this.state.loggingIn) return;
        this.setState({ loggingIn: true });
        setTimeout(() => { window.location.href = 'Dashboard.dc.html'; }, 900);
      },
      ...(() => {
        const REVIEWS = [
          { name: 'Paolo', role: 'Titolare di autoscuola', photo: 'uploads/11-b46ce018.png', text: 'I crediti guida sul quaderno erano discussioni continue. Adesso allievo e segreteria vedono lo stesso numero, aggiornato a ogni guida. Non se ne parla più, letteralmente.' },
          { name: 'Francesca', role: 'Segreteria', photo: 'uploads/7-99ac5f3b.png', text: "Il telefono squillava tutto il giorno, quasi sempre per spostare o disdire una guida. Ora quel giro passa dall'app, e la Segretaria AI risponde quando siamo chiuse. Io mi occupo delle pratiche, non del centralino." },
          { name: 'Martina', role: 'Istruttrice', photo: 'uploads/12-96442ea5.png', text: 'Mi sono ammalata un lunedì con dodici guide in settimana. Ho premuto «Sostituiscimi» e le guide sono passate ai colleghi, con gli allievi avvisati in automatico. Nessuna telefonata dal letto.' },
        ];
        const idx = this.state.revIdx % REVIEWS.length;
        const r = REVIEWS[idx];
        const fading = this.state.revFading;
        return {
          revName: r.name, revRole: r.role, revText: r.text,
          revPhotoStyle: { width: '52px', height: '52px', borderRadius: '14px', backgroundImage: 'url("' + r.photo + '")', backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0, opacity: fading ? 0 : 1, transition: 'opacity 0.28s ease' },
          revNameFadeStyle: { flex: 1, minWidth: 0, opacity: fading ? 0 : 1, transition: 'opacity 0.28s ease' },
          revTextFadeStyle: { fontSize: '15px', fontWeight: 500, color: '#333333', lineHeight: 1.65, flex: 1, opacity: fading ? 0 : 1, transition: 'opacity 0.28s ease' },
          nextReview: () => { this._startRevTimer(); this._goRev((this.state.revIdx + 1) % REVIEWS.length); },
          revPause: () => { this._revPaused = true; },
          revResume: () => { this._revPaused = false; },
          revDots: REVIEWS.map((_, i) => ({
            go: (e) => { e.stopPropagation(); this._startRevTimer(); this._goRev(i); },
            style: { width: i === idx ? '20px' : '7px', height: '7px', borderRadius: '4px', background: i === idx ? '#1c1c1c' : '#d5d5de', cursor: 'pointer', transition: 'all 0.25s ease' },
          })),
        };
      })(),
      isTermini: page === 'termini',
      goPrivacy: () => { this.setState({ page: 'privacy', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goTermini: () => { this.setState({ page: 'termini', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goTeam: () => { this.setState({ page: 'team', menuOpen: false }); window.scrollTo({ top: 0 }); },
      toggleMenu: () => this.setState(s => ({ menuOpen: !s.menuOpen })),
      goCore: () => { this.setState({ page: 'core', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goNovita: () => { this.setState({ page: 'novita' }); window.scrollTo({ top: 0 }); },
      isContatti: page === 'contatti',
      // il video è tagliato a 2:35: controlli propri, così durata e barra si fermano lì
      istrVideoRef: (el) => { this._istrVideo = el; this._bindAutoPiP(el); },
      istrVideoCap: (e) => {
        const v = e.target;
        if (v.currentTime >= 154) { v.pause(); v.currentTime = 154; }
        this.setState({ istrT: Math.min(v.currentTime, 154), istrPlaying: !v.paused });
      },
      istrTogglePlay: () => {
        const v = this._istrVideo; if (!v) return;
        if (v.paused) { if (v.currentTime >= 154) v.currentTime = 0; v.play(); } else v.pause();
        this.setState({ istrPlaying: !v.paused });
      },
      istrToggleMute: () => { const v = this._istrVideo; if (!v) return; v.muted = !v.muted; this.setState({ istrMuted: v.muted }); },
      istrSeek: (e) => {
        const v = this._istrVideo; if (!v) return;
        const r = e.currentTarget.getBoundingClientRect();
        v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * 154;
        this.setState({ istrT: v.currentTime });
      },
      istrPlayIcon: this.state.istrPlaying
        ? React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 12 12' },
            React.createElement('rect', { x: 2, y: 1.6, width: 2.6, height: 8.8, rx: 0.8, fill: '#000' }),
            React.createElement('rect', { x: 7.4, y: 1.6, width: 2.6, height: 8.8, rx: 0.8, fill: '#000' }))
        : React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 12 12' },
            React.createElement('path', { d: 'M3.5 2.2v7.6L10 6L3.5 2.2z', fill: '#000' })),
      istrProgressStyle: { position: 'absolute', left: 0, top: 0, bottom: 0, width: Math.min(100, ((this.state.istrT || 0) / 154) * 100) + '%', borderRadius: '999px', background: '#ffffff' },
      istrTimeLabel: (() => {
        const f = (s) => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
        return f(this.state.istrT || 0) + ' / 2:34';
      })(),
      istrMuteLabel: this.state.istrMuted ? 'Audio off' : 'Audio on',
      // la barra compare al passaggio del mouse o a video in pausa, altrimenti sparisce
      istrBarShow: () => { if (!this.state.istrHover) this.setState({ istrHover: true }); },
      istrBarHide: () => this.setState({ istrHover: false }),
      istrBarStyle: (() => {
        const visible = this.state.istrHover || !this.state.istrPlaying;
        return {
          position: 'absolute', left: 0, right: 0, bottom: 0, padding: '14px 16px',
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        };
      })(),
      isVendite: page === 'vendite',
      // il preview è in iframe: la navigazione mailto va forzata sul contesto in alto
      mailCommerciale: () => this._openMail('gabriele.torta@reglo.it'),
      mailSupport: () => this._openMail('support@reglo.it'),
      isAssistenza: page === 'assistenza',
      goAssistenza: () => { this.setState({ page: 'assistenza', menuOpen: false }); window.scrollTo({ top: 0 }); },
      assistNotSent: !this.state.assistSent,
      assistSent: !!this.state.assistSent,
      assistMsg: this.state.assistMsg || '',
      assistEmail: this.state.assistEmail || '',
      assistEmailSent: this.state.assistEmailSent || '',
      assistHasError: !!this.state.assistError,
      assistError: this.state.assistError || '',
      onAssistMsg: (e) => this.setState({ assistMsg: e.target.value }),
      onAssistEmail: (e) => this.setState({ assistEmail: e.target.value }),
      sendAssist: () => {
        const msg = (this.state.assistMsg || '').trim();
        const mail = (this.state.assistEmail || '').trim();
        if (!msg) return this.setState({ assistError: 'Scrivici cosa non va, anche in due righe' });
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(mail)) return this.setState({ assistError: 'Controlla l’indirizzo email' });
        this.setState({ assistSent: true, assistError: '', assistEmailSent: mail });
      },
      goVendite: () => { this.setState({ page: 'vendite', menuOpen: false }); window.scrollTo({ top: 0 }); },
      venditeNotSent: !this.state.venditeSent,
      venditeSent: !!this.state.venditeSent,
      vendNome: this.state.vendNome || '',
      vendEmail: this.state.vendEmail || '',
      vendIstruttori: this.state.vendIstruttori || '',
      vendMsg: this.state.vendMsg || '',
      vendEmailSent: this.state.vendEmailSent || '',
      vendHasError: !!this.state.vendError,
      vendError: this.state.vendError || '',
      onVendNome: (e) => this.setState({ vendNome: e.target.value }),
      onVendEmail: (e) => this.setState({ vendEmail: e.target.value }),
      onVendIstruttori: (e) => this.setState({ vendIstruttori: e.target.value.replace(/[^0-9]/g, '') }),
      onVendMsg: (e) => this.setState({ vendMsg: e.target.value }),
      sendVendite: () => {
        const nome = (this.state.vendNome || '').trim();
        const mail = (this.state.vendEmail || '').trim();
        if (!nome) return this.setState({ vendError: 'Dicci come ti chiami' });
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(mail)) return this.setState({ vendError: 'Controlla l’indirizzo email' });
        this.setState({ venditeSent: true, vendError: '', vendEmailSent: mail });
      },
      goContatti: () => { this.setState({ page: 'contatti', menuOpen: false }); window.scrollTo({ top: 0 }); },
      contattiLinkStyle: {
        display: 'inline-flex', alignItems: 'center', padding: '9px 16px', borderRadius: '999px',
        fontSize: 'clamp(13px, 1.15vw, 16.5px)', fontWeight: (page === 'contatti' || page === 'vendite' || page === 'assistenza') ? 600 : 500,
        color: (page === 'contatti' || page === 'vendite' || page === 'assistenza') ? '#000000' : '#4a4a55',
        background: 'transparent',
        cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s ease',
      },
      goHome: () => { this.setState({ page: 'home' }); window.scrollTo({ top: 0 }); },
      novitaLinkStyle: {
        display: 'inline-flex', alignItems: 'center', padding: '9px 18px', borderRadius: '11px',
        fontSize: 'clamp(14px, 1.2vw, 17px)', fontWeight: 600,
        color: page === 'novita' ? '#000000' : '#7a7a86',
        background: page === 'novita' ? '#ececef' : 'transparent',
        cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s ease, color 0.2s ease',
      },
      prezziLinkStyle: {
        display: 'inline-flex', alignItems: 'center', padding: '9px 18px', borderRadius: '11px',
        fontSize: 'clamp(14px, 1.2vw, 17px)', fontWeight: 600,
        color: page === 'prezzi' ? '#000000' : '#7a7a86',
        background: page === 'prezzi' ? '#ececef' : 'transparent',
        cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s ease, color 0.2s ease',
      },
      isMed: page === 'med',
      isSegretaria: page === 'segretaria',
      isRinnovi: page === 'rinnovi',
      bookCal: () => { (window.top || window).open('https://cal.com/reglo/analisi-strategica-autoscuola', '_blank', 'noopener'); },
      goDemo: () => { this.setState({ page: 'contatti', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goRinnovi: () => { this.setState({ page: 'rinnovi', menuOpen: false }); window.scrollTo({ top: 0 }); },
      goSegretaria: () => { this.setState({ page: 'segretaria', menuOpen: false }); window.scrollTo({ top: 0 }); },
      medScaleRef: (el) => {
        if (el) this._medEl = el;
        if (!this._medFit) {
          this._medFit = () => {
            const n = this._medEl;
            if (!n || !n.isConnected) return;
            const k = Math.max(window.innerWidth / 576, window.innerHeight / 324) * 1.06;
            n.style.transform = 'translate(-50%, -50%) scale(' + k + ')';
          };
          window.addEventListener('resize', this._medFit);
        }
        if (el) {
          const k = Math.max(window.innerWidth / 576, window.innerHeight / 324) * 1.06;
          el.style.transform = 'translate(-50%, -50%) scale(' + k + ')';
          requestAnimationFrame(this._medFit);
        }
      },
      medFlowRef: this._flowRef || (this._flowRef = (el) => {
        if (!el || this._flowEl === el) return;
        this._flowEl = el;
        Array.from(el.querySelectorAll('[data-flow-step]')).forEach((s, i) => {
          if (s.dataset.shown) return;
          s.style.opacity = '0';
          s.style.transform = 'translate(' + (i % 2 ? '22px' : '-22px') + ', 22px)';
          s.style.transition = 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)';
          if (this._flowObs) this._flowObs.observe(s);
        });
        if (!this._flowObs) {
          this._flowObs = new IntersectionObserver((ents) => {
            ents.forEach((en) => {
              if (!en.isIntersecting) return;
              en.target.dataset.shown = '1';
              en.target.style.opacity = '1';
              en.target.style.transform = 'none';
              this._flowObs.unobserve(en.target);
            });
          }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
          Array.from(el.querySelectorAll('[data-flow-step]')).forEach((s) => this._flowObs.observe(s));
        }
        this._flowProg = () => {
          const n = this._flowEl;
          if (!n || !n.isConnected) return;
          const line = n.querySelector('[data-flow-progress]');
          if (!line) return;
          const r = n.getBoundingClientRect(), span = r.height - 74;
          const p = Math.max(0, Math.min(1, (window.innerHeight * 0.62 - r.top) / span));
          line.style.height = (p * span) + 'px';
        };
        if (!this._flowBound) {
          this._flowBound = () => { if (this._flowProg) this._flowProg(); };
          window.addEventListener('scroll', this._flowBound, { passive: true });
          window.addEventListener('resize', this._flowBound);
        }
        requestAnimationFrame(this._flowProg);
      }),
      loopVideoRef: this._lvRef || (this._lvRef = (el) => {
        if (!el) return;
        el.muted = true;
        el.loop = true;
        el.autoplay = true;
        el.playbackRate = 0.6;
        el.playsInline = true;
        el.setAttribute('playsinline', '');
        const p = el.play();
        if (p && p.catch) p.catch(() => {});
      }),
      anno: new Date().getFullYear(),
      ...(() => {
        const st = this.state;
        const step = st.qStep || 1;
        const dot = (n) => ({
          width: n === step ? '20px' : '7px', height: '7px', borderRadius: '99px',
          background: n <= step ? '#000000' : '#d5d5dd', transition: 'width .25s ease, background .25s ease',
        });
        const chip = (on) => ({
          display: 'inline-flex', alignItems: 'center', padding: '13px 20px', background: on ? '#000000' : '#ffffff',
          color: on ? '#ffffff' : '#000000', border: on ? '1.5px solid #000000' : '1.5px solid #dddddd',
          borderRadius: '12px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', userSelect: 'none',
        });
        const pick = (key, val) => () => this.setState({ [key]: val, qStep: Math.min(3, step + 1) });
        const PROB = ['Troppe telefonate in segreteria', 'Agenda sempre da rifare', 'Allievi che non si presentano', 'Tutto a mano, su carta'];
        const SIZE = ['Piccola · fino a 100 allievi', 'Media · 100–300 allievi', 'Grande · oltre 300 allievi'];
        return {
          qStepLabel: String(step),
          qIs1: step === 1, qIs2: step === 2, qIs3: step === 3,
          qDot1: dot(1), qDot2: dot(2), qDot3: dot(3),
          qProblemi: PROB.map((label) => ({ label, style: chip(st.qProb === label), onPick: pick('qProb', label) })),
          qTaglie: SIZE.map((label) => ({ label, style: chip(st.qSize === label), onPick: pick('qSize', label) })),
          qPickAltro: () => this.setState({ qProb: 'Altro', qAltro: true }),
          qAltroStyle: chip(st.qProb === 'Altro'),
          qAltroOpen: step === 1 && st.qProb === 'Altro',
          qAltroText: st.qAltroText || '',
          qSetAltro: (e) => this.setState({ qAltroText: e.target.value }),
          qAltroNext: () => this.setState({ qStep: 2 }),
          qNome: st.qNome || '', qTel: st.qTel || '',
          qSetNome: (e) => this.setState({ qNome: e.target.value }),
          qSetTel: (e) => this.setState({ qTel: e.target.value }),
          qCanBack: step > 1 && !st.qSent,
          qBack: () => this.setState({ qStep: Math.max(1, step - 1) }),
          qSend: () => { if ((st.qNome || '').trim() && (st.qTel || '').trim()) this.setState({ qSent: true }); },
          qSendLabel: st.qSent ? 'Richiesta inviata — ti richiamiamo noi' : 'Prenota la demo',
          qSendStyle: {
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px', marginTop: '16px',
            background: st.qSent ? '#2f7a4d' : '#000000', color: '#ffffff', borderRadius: '12px',
            fontSize: '16px', fontWeight: 700, cursor: st.qSent ? 'default' : 'pointer', userSelect: 'none',
          },
        };
      })(),
      refPickParlato: () => this.setState({ refAware: 'parlato' }),
      refPickVoi: () => this.setState({ refAware: 'voi' }),
      refParlatoDot: this._refOptStyle((this.state.refAware ?? 'parlato') === 'parlato'),
      refVoiDot: this._refOptStyle((this.state.refAware ?? 'parlato') === 'voi'),
      parlatoSel: (this.state.refAware ?? 'parlato') === 'parlato',
      voiSel: (this.state.refAware ?? 'parlato') === 'voi',
      sendReferral: () => {
        this.setState({ refSent: true });
        clearTimeout(this._refT);
        this._refT = setTimeout(() => this.setState({ refSent: false }), 2400);
      },
      refSendLabel: this.state.refSent ? 'Inviato! Ti richiamiamo noi' : 'Prenota la demo',
      refSendBtnStyle: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '22px', padding: '14px 28px', background: '#000000', borderRadius: '6px', fontSize: '15px', fontWeight: 600, color: '#ffffff', cursor: 'pointer', userSelect: 'none', transition: 'background 0.15s' },
      clipLoopRef: this._clipRef || (this._clipRef = (el) => {
        if (!el || el.dataset.bound) return;
        el.dataset.bound = '1';
        el.muted = true;
        el.playsInline = true;
        el.setAttribute('playsinline', '');
        el.playbackRate = 0.6;
        let seeking = false;
        let stop = 3;
        el.addEventListener('seeked', () => { seeking = false; });
        const init = () => {
          stop = Math.max(0.8, (el.duration || 4) - 1);
          if (el.currentTime < 0.5) el.currentTime = 0.5;
        };
        if (el.readyState >= 1) init();
        el.addEventListener('loadedmetadata', init, { once: true });
        el.addEventListener('timeupdate', () => {
          if (seeking) return;
          if (el.currentTime >= stop) { seeking = true; el.currentTime = 0.5; }
        });
        const p = el.play();
        if (p && p.catch) p.catch(() => {});
      }),
      openMedVideo: () => { this.setState({ page: 'med', menuOpen: false }); window.scrollTo({ top: 0 }); },
      iscrivitiOpen: !!this.state.iscrivitiOpen,
      openIscriviti: () => this.setState({ iscrivitiOpen: true, iscrivitiSent: false, iscrivitiEmail: '', iscrivitiError: '', iscrivitiKnown: false }),
      closeIscriviti: () => this.setState({ iscrivitiOpen: false }),
      iscrivitiIdle: !this.state.iscrivitiSent,
      iscrivitiDone: !!this.state.iscrivitiSent,
      iscrivitiEmail: this.state.iscrivitiEmail || '',
      iscrivitiEmailShown: (this.state.iscrivitiEmail || '').trim() || 'la tua email',
      onIscrivitiEmail: (e) => this.setState({ iscrivitiEmail: e.target.value, iscrivitiError: '' }),
      iscrivitiError: this.state.iscrivitiError || '',
      iscrivitiDoneTitle: this.state.iscrivitiKnown ? 'Sei già della famiglia!' : 'Grazie!',
      iscrivitiDoneText: this.state.iscrivitiKnown ? 'Questa email è già iscritta alle novità:' : 'La prossima novità arriva a',
      onIscrivitiFocus: () => this.setState({ iscrivitiFocus: true }),
      onIscrivitiBlur: () => this.setState({ iscrivitiFocus: false }),
      iscrivitiFieldStyle: {
        flex: 1, minWidth: 0, height: '46px', display: 'flex', alignItems: 'center', gap: '9px',
        padding: '0 16px', background: '#ffffff', borderRadius: '999px',
        border: this.state.iscrivitiFocus ? '1.5px solid #000000' : '1.5px solid #ececf0',
        boxShadow: this.state.iscrivitiFocus ? '0 0 0 3px rgba(0,0,0,0.10)' : 'none',
        transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
      },
      iscrivitiBtnStyle: {
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '46px',
        padding: '0 24px', background: '#000000', color: '#ffffff', fontSize: '15px', fontWeight: 600,
        borderRadius: '999px', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap', flexShrink: 0,
      },
      submitIscriviti: () => {
        const v = (this.state.iscrivitiEmail || '').trim();
        if (!v) return this.setState({ iscrivitiError: 'Inserisci la tua email per continuare' });
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) return this.setState({ iscrivitiError: 'Questa email non sembra valida' });
        const known = ['info@reglo.it', 'gabriele.ruzzu@reglo.it', 'demo@autoscuola.it'];
        this.setState({ iscrivitiSent: true, iscrivitiError: '', iscrivitiKnown: known.includes(v.toLowerCase()) });
      },
      nvQ: this.state.nvQ || '',
      nvOnSearch: (e) => this.setState({ nvQ: e.target.value }),
      nvTabs: NV_TABS.map(t => ({
        label: t.label,
        onPick: () => this.setState({ nvTab: t.id }),
        style: { fontSize: '16.5px', fontWeight: nvTab === t.id ? 600 : 500, color: nvTab === t.id ? '#000000' : '#6f6f7c', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s ease' },
      })),
      nvShowGrid: false,
      nvShowChangelog: true,
      nvGoChangelog: () => {
        this.setState({ nvTab: 'changelog' });
        const el = document.getElementById('novita');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
      },
      nvCards: nvFiltered.map((c, i) => ({
        ...c,
        cellStyle: { padding: i % 3 === 0 ? '0 34px 0 0' : '0 34px', borderLeft: i % 3 === 0 ? 'none' : '1px solid #ececf0' },
      })),
      nvLogStrip: NV_STRIP.map(s => ({
        ...s,
        dotStyle: { position: 'absolute', left: 0, top: '-5px', width: '9px', height: '9px', borderRadius: '50%', background: s.hot ? '#9fc3f0' : '#d9d9df' },
      })),
      nvArchive: this.state.nvMore ? NV_ARCHIVE.concat(NV_MORE) : NV_ARCHIVE,
      nvLoadMore: () => this.setState(s => ({ nvMore: !s.nvMore })),
      nvLoadLabel: this.state.nvMore ? 'Mostra meno' : 'Carica altri',
      nvAccRows: NV_ACC.map((a, i) => ({
        ...a,
        open: this.state.nvAcc === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: this.state.nvAcc === i ? 'rotate(90deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ nvAcc: s.nvAcc === i ? -1 : i })),
      })),
      openMenu: () => { clearTimeout(this._mt); this.setState({ menuOpen: true }); },
      closeMenu: () => { clearTimeout(this._mt); this._mt = setTimeout(() => this.setState({ menuOpen: false }), 120); },
      funzioniStyle: {
        display: 'inline-flex', alignItems: 'center', padding: '9px 18px', borderRadius: '11px',
        fontSize: 'clamp(14px, 1.2vw, 17px)', fontWeight: 600,
        color: (menuOpen || page === 'core' || page === 'segretaria' || page === 'rinnovi' || page === 'soon') ? '#000000' : '#7a7a86',
        background: (menuOpen || page === 'core' || page === 'segretaria' || page === 'rinnovi' || page === 'soon') ? '#ececef' : 'transparent',
        cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s ease, color 0.2s ease',
      },
      isIstruttori: page === 'istruttori',
      chatText: this.state.chatText || '',
      chatTag: this.state.chatTag || 'A tutti gli allievi',
      chatCaretStyle: { display: 'inline-block', width: '2px', height: '1.05em', background: '#2a6fdb', marginLeft: '3px', verticalAlign: '-0.14em', animation: 'om-blink 1s steps(1) infinite' },
      goIstruttori: () => { this.setState({ page: 'istruttori', menuOpen: false }); window.scrollTo({ top: 0 }); },
      appOpen: this.state.appOpen,
      openApp: () => this.setState({ appOpen: true, store: null }),
      closeApp: () => this.setState({ appOpen: false, store: null }),
      stop: (e) => e.stopPropagation(),
      pickIos: () => this.setState({ store: 'ios' }),
      pickAndroid: () => this.setState({ store: 'android' }),
      iosBtnStyle: btn(store === 'ios'),
      androidBtnStyle: btn(store === 'android'),
      qrOpen: !!store,
      isIos: store === 'ios',
      isAndroid: store === 'android',
      qrTitle: store === 'android' ? 'Scarica su Google Play' : "Scarica su App Store",
      appSub: store ? 'Inquadra il QR dal telefono, oppure apri lo store.' : 'Scegli il tuo store: da telefono si apre subito, da computer ti mostriamo il QR.',
      showTestimonianze: true,
      rowA: aList.concat(aList),
      rowB: bList.concat(bList),
      reviews: reviewsData.map(mk),
      reviewsTop: reviewsData.slice(0, 6).map(mk),
      faqsTeam: faqsData.slice(0, 4).map((f, i) => ({        q: f.q, a: f.a,
        open: openFaq === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ openFaq: s.openFaq === i ? -1 : i })),
      })),
      _reviewsOld: reviewsData.map((r, i) => {
        const pal = PAL[i % PAL.length];
        const parts = r.name.trim().split(/\s+/);
        return {
          ...r,
          initials: (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase(),
          avatarStyle: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', background: pal.bg, color: pal.fg, fontSize: '13px', fontWeight: 700, flexShrink: 0 },
        };
      }),
      wallStyle: { position: 'relative', maxHeight: reviewsOpen ? 'none' : '640px', overflow: 'hidden' },
      reviewsClosed: !reviewsOpen,
      reviewsOpen: reviewsOpen,
      toggleReviews: () => this.setState(s => ({ reviewsOpen: !s.reviewsOpen })),
      reviewsBtnLabel: reviewsOpen ? 'Mostra meno' : 'Leggi tutte le recensioni',
      passaRef: (el) => { this._passaEl = el; },
      passaPrev: () => { if (this._passaEl) this._passaEl.scrollBy({ left: -this._passaEl.clientWidth, behavior: 'smooth' }); },
      passaNext: () => { if (this._passaEl) this._passaEl.scrollBy({ left: this._passaEl.clientWidth, behavior: 'smooth' }); },
      rinFaqs: rinFaqsData.map((f, i) => ({
        q: f.q, a: f.a,
        open: (this.state.rinFaq === undefined ? 0 : this.state.rinFaq) === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: (this.state.rinFaq === undefined ? 0 : this.state.rinFaq) === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ rinFaq: (s.rinFaq === undefined ? 0 : s.rinFaq) === i ? -1 : i })),
      })),
      przFaqs: przFaqsData.map((f, i) => ({
        q: f.q, a: f.a,
        open: (this.state.przFaq === undefined ? 0 : this.state.przFaq) === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s ease', transform: (this.state.przFaq === undefined ? 0 : this.state.przFaq) === i ? 'rotate(180deg)' : 'none' },
        onToggle: () => this.setState(s => ({ przFaq: (s.przFaq === undefined ? 0 : s.przFaq) === i ? -1 : i })),
      })),
      segFaqs: segFaqsData.map((f, i) => ({
        q: f.q, a: f.a,
        open: (this.state.segFaq === undefined ? 0 : this.state.segFaq) === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: (this.state.segFaq === undefined ? 0 : this.state.segFaq) === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ segFaq: (s.segFaq === undefined ? 0 : s.segFaq) === i ? -1 : i })),
      })),
      coreFaqs: coreFaqsData.map((f, i) => ({
        q: f.q, a: f.a,
        open: (this.state.coreFaq === undefined ? 0 : this.state.coreFaq) === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: (this.state.coreFaq === undefined ? 0 : this.state.coreFaq) === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ coreFaq: (s.coreFaq === undefined ? 0 : s.coreFaq) === i ? -1 : i })),
      })),
      faqs: faqsData.map((f, i) => ({        q: f.q, a: f.a,
        open: openFaq === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ openFaq: s.openFaq === i ? -1 : i })),
      })),
      istrFaqs: istrFaqsData.map((f, i) => ({        q: f.q, a: f.a,
        open: (this.state.istrFaq === undefined ? 0 : this.state.istrFaq) === i,
        chevStyle: { flexShrink: 0, transition: 'transform 0.2s', transform: (this.state.istrFaq === undefined ? 0 : this.state.istrFaq) === i ? 'rotate(180deg)' : 'rotate(0deg)' },
        onToggle: () => this.setState(s => ({ istrFaq: (s.istrFaq === undefined ? 0 : s.istrFaq) === i ? -1 : i })),
      })),
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <>
        {v.hdrVisible ? HdrVisible(v) : null}
        {v.isHome ? Home(v) : null}
        {v.isCore ? Core(v) : null}
        {v.isAssistenza ? Assistenza(v) : null}
        {v.isVendite ? Vendite(v) : null}
        {v.isContatti ? Contatti(v) : null}
        {v.isPrezzi ? Prezzi(v) : null}
        {v.isNovita ? Novita(v) : null}
        {v.isIstruttori ? Istruttori(v) : null}
        {v.isSegretaria ? Segretaria(v) : null}
        {v.isRinnovi ? Rinnovi(v) : null}
        {v.isMed ? Med(v) : null}
        {v.iscrivitiOpen ? IscrivitiOpen(v) : null}
        {v.appOpen ? AppOpen(v) : null}
        {v.isTeam ? Team(v) : null}
        {v.isPrivacy ? Privacy(v) : null}
        {v.isTermini ? Termini(v) : null}
        {v.isSoon ? Soon(v) : null}
        {v.hdrVisible ? HdrVisible2(v) : null}
        {v.isLogin ? Login(v) : null}
      </>
    );
  }
}

export default RegloSite;
