# Innesto del nuovo design — fatto

> **Stato:** completato, verificato e deployato in produzione.
> Asset e moduli .jsx ricevuti e innestati: nulla manca piu'.

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

## Asset e moduli esterni

Gli 86 file referenziati dal design (46 in `images/`, 40 in `uploads/`) sono in
`public/`, serviti agli stessi percorsi che il design si aspetta. Verificato in
browser su tutte le rotte: **0 immagini rotte, 0 richieste fallite**.

I tre moduli `.jsx` stanno in `src/site/vendor/`. Sono IIFE che si registrano
su `window` e si aspettano `React`/`ReactDOM` globali, quindi `vendor/globals.ts`
li prepara e va importato per primo (`vendor/index.ts` rispetta l'ordine
dichiarato dall'x-import). Nel runtime dc venivano compilati a runtime con Babel
da CDN; qui li trasforma Vite in fase di build, senza dipendenze esterne.
`RegloClipRinnovi` monta correttamente su `/rinnovo-patente`.

Il video `uploads/Gestione autonoma degli istruttori.mp4` (18 MB) carica su
`/istruttori`: readyState 4, 1920x1096.

## Unica deviazione dal riferimento

Due `<a href="Home 2.dc.html">` (logo header e footer) sono artefatti del tool
di design: in produzione darebbero 404. Il codegen li riscrive a `/`. Il
risultato visivo e' identico; cambia solo la destinazione del link.

## Verifica finale

Confronto DOM contro il riferimento renderizzato offline, ad animazioni spente,
su **4 viewport** (390, 768, 1440, 1920) x **16 viste** = 64 combinazioni:
stesso numero di elementi, stessa altezza di pagina, **0 differenze** di tag,
bounding box e stili calcolati.

## Prossimi passi

1. Componentizzazione: sostituire il codice generato con componenti veri e
   Tailwind, vista per vista, col diff DOM come rete di sicurezza.
