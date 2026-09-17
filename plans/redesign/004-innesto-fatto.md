# Innesto del nuovo design — fatto

> **Stato:** conversione completata e verificata su 16 viste.
> **NON deployato:** mancano 86 asset e 1 modulo video dall'export (sotto).

## Cosa è stato fatto

Il file di riferimento non è HTML statico: è un export del runtime dc di Claude
Design, che a sua volta **gira su React 18.3.1**. Questo ha cambiato la
strategia rispetto al piano 003: invece di trascrivere l'HTML a mano, ho letto
la pipeline di compilazione del runtime (`design-reference/support.js`,
`src/encode.ts` + `src/compile.ts`) e l'ho replicata in un codegen. La fedeltà
così è garantita per costruzione, non per trascrizione.

### Pipeline

| Strumento | Cosa fa |
|---|---|
| `tools/dc-expr.mjs` | traduce il mini-linguaggio di espressioni dc (`{{ a.b }}`, `!x`, `===`) in JS |
| `tools/dc-to-react.mjs` | template dc -> TSX: una vista per file, + `pseudo.css` per `style-hover`/`style-focus` |
| `tools/port-logic.mjs` | porta la classe `Component extends DCLogic` in un componente React |
| `src/site/dcx.tsx` | helper che replicano il render del runtime (`interp`, `sty`, `cssToObj`) |

Il porting della logica è quasi una copia: `DCLogic` espone la stessa API di
`React.Component` (`state`, `setState`, `componentDidMount/DidUpdate`), quindi
le 1.224 righe originali passano invariate. L'unica aggiunta è `render()`, che
nel runtime veniva fornito dall'esterno.

Dettagli replicati perché il DOM risultasse identico, non solo equivalente:
- `cssToObj` con lo stesso split ingenuo su `;` del runtime, bug compreso;
- `<span class="sc-interp">` attorno al testo interpolato: in un contenitore
  flex è un flex item, toglierlo cambierebbe il layout;
- nodi di solo whitespace scartati solo se non contengono spazi;
- `style-hover` -> classe generata con `!important`, come fa `createPseudoSheet`;
- grafia camelCase degli elementi SVG (`clipPath`), che linkedom abbassa e
  Chrome no.

### Verifica

Ho reso renderizzabile il riferimento offline (`design-reference/.render/`,
gitignorata) mappando React 18.3.1 da `node_modules` sugli URL unpkg che il
runtime si aspetta. Poi confronto DOM-a-DOM tra riferimento e build, ad
animazioni spente dal primo frame:

- **parser**: 4320 elementi, identici a Chrome (l'unica differenza trovata,
  `clipPath`, è stata corretta);
- **16 viste**: stesso numero di elementi, stessa altezza di pagina,
  **0 differenze** di tag, bounding box e stili calcolati (32 proprietà).

Viste verificate: home, funzioni, prezzi, novità, login, segretaria, rinnovi,
reglo road, istruttori, team, contatti, privacy, termini, allievi, vendite.

### Rotte

Il design navigava solo via `state.page`, senza URL. `src/site/routes.ts` dà
uno slug reale a ogni vista; `src/site/RoutedSite.tsx` tiene URL e stato
allineati (deep link, pushState, tasto indietro — testati).

| Vista | URL | Vista | URL |
|---|---|---|---|
| home | `/` | team | `/team` |
| core | `/funzioni` | contatti | `/contatti` |
| prezzi | `/prezzi` | vendite | `/contatta-le-vendite` |
| novita | `/novita` | assistenza | `/assistenza` |
| istruttori | `/istruttori` | login | `/accedi` |
| segretaria | `/segretaria-virtuale` | privacy | `/privacy-policy` |
| rinnovi | `/rinnovi-automatici` | termini | `/termini-e-condizioni` |
| med | `/rinnovo-patente` | soon | `/reglo-road` |

`/privacy-policy` conserva lo slug già online. `/allievi`, `/calcolatore` e
`/policy` restano fuori dalla mappa: il nuovo design non li copre.

## Bloccante: asset mancanti dall'export

86 file referenziati dal design non sono nell'export. **Non sono decorativi**:
sono il contenuto di sezioni visibili, con spazio già riservato nel layout.

| Cosa manca | Dove | Perché serve |
|---|---|---|
| `images/logo-reglo-dark.png` | header, **tutte le 15 viste** | il logo Reglo |
| 14 loghi clienti 40x40 (`logo-robatto-scuro`, `logo-alberti-trasparente`, `logo-desensi-trasparente2`, `pasted-*`) | "Loghi clienti", 5 viste | la riga di autoscuole clienti |
| 4 immagini + 4 wordmark (`storia-robatto`, `storia-newdrive`, `logo-macchiavello-bianco`, `logo-montreal-bianco`, …) | "Storie", home + funzioni | i case study clienti |
| `founder-1`, `founder-2`, `team-suardi`, `team-dorta`, `team-altri` | "Founder e team" | le foto delle persone |
| `phone-frame` (606x992), `laptop-frame2` (760x507), `laptop-screen`, `tablet-frame`, `road-ipad` | "Dispositivi", home + funzioni | i mockup di prodotto dell'hero |
| 3 card 718x448 | "Novità" | il contenuto della pagina novità |
| `seg-banco` (561x640), 3 meme 371x371, `seg-reception`, `seg-sera` | segretaria | le immagini della pagina |
| `ferie-valigia` (1178x620), `istr-carlo/martina/valerio`, `icon-palma-teal`, `cursore-mano` | istruttori | l'illustrazione principale + gli avatar |
| `rin-medico`, `rin-visita`, `rin-attesa`, `rin-mappa`, `rin-dott-serra` | rinnovi | le immagini delle card |
| `contatti-demo`, `contatti-cliente` (438x460) | contatti | le due opzioni di contatto |
| `Gemini_Generated_Image_…jpeg` (689x872) | login | lo sfondo della pagina |
| `cartaceo-agenda.jpg`, avatar recensioni | "Recensioni", 5 viste | le recensioni clienti |
| `qr-app-store.png`, `qr-google-play.png` | modale app | i QR per gli store |
| `targa-lavori.png` | reglo road | l'illustrazione "lavori in corso" |

Quasi tutte hanno dimensioni fissate dal CSS, quindi il layout regge anche
senza; `laptop-screen.png` no (altezza calcolata dall'immagine, oggi 0px).

Manca anche **`reglo-video.jsx`** (con `animations-v2.jsx` e `tweaks-panel.jsx`):
è un `x-import` che monta `RegloClipRinnovi` in uno slot 576x324 (16:9) nella
vista `/rinnovo-patente` — un player video. Al suo posto oggi c'è un segnaposto
esplicito (`MissingExternal`), così il buco resta visibile.

**Da chiedere a Gabriele:** i urls sono già i percorsi definitivi
(`images/site/…`, `uploads/…`), quindi basta l'archivio delle due cartelle da
droppare in `public/` e i 3 `.jsx`.

## Prossimi passi

1. Ricevere asset + moduli, metterli in `public/`, ri-verificare.
2. Deploy.
3. Componentizzazione: sostituire il codice generato con componenti veri e
   Tailwind, vista per vista, col diff DOM come rete di sicurezza.
