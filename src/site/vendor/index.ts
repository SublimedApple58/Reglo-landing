/**
 * Moduli esterni del design, caricati nell'ordine dichiarato dall'x-import
 * del riferimento: `./animations-v2.jsx ./tweaks-panel.jsx ./reglo-video.jsx`.
 * L'ordine conta: reglo-video legge SceneStage e TweaksPanel da window al
 * momento della valutazione.
 *
 * Nel runtime dc venivano compilati a runtime con Babel da CDN; qui li
 * trasforma Vite in fase di build.
 */
import './globals';
import './animations-v2.jsx';
import './tweaks-panel.jsx';
import './reglo-video.jsx';
