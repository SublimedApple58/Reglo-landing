# Innesto `sito-finale-v1.html` — analisi e piano

> **Stato: NON deployato, NON mergiato.** Analisi completata, conversione non
> iniziata. Il branch `chore/reset-for-new-design` contiene solo il reset
> (placeholder), non il nuovo design.

## Cosa è realmente il file di riferimento

`design-reference/sito-finale-v1.html` **non è HTML statico**. È un export del
runtime proprietario di Claude Design ("dc"):

- `<script src="./support.js">` — runtime **non incluso** nell'export. Senza di
  esso il file non renderizza affatto: `<x-dc>`, `<sc-if>`, `<sc-for>` sono
  custom element definiti lì.
- `<script type="text/x-dc">` con `class Component extends DCLogic` — **1.225
  righe** di logica: `state`, `setState`, `componentDidMount/DidUpdate`, loop
  `requestAnimationFrame` per le animazioni scroll-driven ("stage"), curva di
  easing campionata a 100 punti, sistema di tween a tempo, `MutationObserver`
  per il ricalcolo delle larghezze, scaling `transform: scale()` su canvas 1560px.
- Template: `{ espressione }` per l'interpolazione, `<sc-if value="{{ flag }}">`
  (54 occorrenze) e `<sc-for list="{{ lista }}" as="x">` (12) per il flusso.
- Stile: **3.850 attributi `style="..."` inline, 1 sola `class`**. Non c'è un
  foglio CSS da preservare: solo ~45 righe di reset/keyframes globali nell'`<helmet>`.
- Font: Figtree, Caveat, Instrument Serif (Google Fonts).

## Non è una pagina: sono 19 viste

Routing client-side interno via `state.page`, non URL. Righe di markup per vista:

| Vista | Righe | Peso | Vista | Righe | Peso |
|---|---|---|---|---|---|
| `home` | 97–1134 | **1037** | `med` | 3711–3980 | 269 |
| `core` | 1135–1894 | **759** | `istruttori` | 2737–2952 | 215 |
| `prezzi` | 2073–2652 | **579** | `segretaria` | 2953–3149 | 196 |
| `rinnovi` | 3150–3710 | **560** | `termini` | 4589–4714 | 125 |
| `team` | 3981–4504 | **523** | `soon` | 4715–4806 | 91 |
| `novita` | 2653–2736 | 83 | `privacy` | 4505–4588 | 83 |
| `vendite` | 1958–2021 | 63 | `assistenza` | 1895–1957 | 62 |
| `login` | 4821–4899 | 78 | `contatti` | 2022–2072 | 50 |
| `404` | 4807–4820 | 13 | `ios`/`android` | 3963–3966 | flag annidati |

Totale: ~4.840 righe di markup + 1.225 di logica. Header/nav condiviso: righe 60–96.

Stato interattivo oltre al routing: accordion FAQ (5 set distinti: `faqs`,
`coreFaqs`, `przFaqs`, `istrFaqs`, `segFaqs`, `rinFaqs`, `faqsTeam`), carosello
recensioni con timer 8s e dots, form con stati idle/sent/error (`vendite`,
`assistenza`, `iscriviti`), modale QR, toggle password, menu mobile, tab changelog.

## Perché non ho deployato

1. **La conversione non è iniziata.** Oggi il branch serve un placeholder
   "Reglo — nuovo sito in arrivo". Un push su `master` sostituirebbe `reglo.it`
   con quella pagina bianca: il sito marketing andrebbe **offline**, non
   "in test".
2. **La fedeltà non è verificabile allo stato attuale.** Il runtime `support.js`
   non è nell'export. Ne ho trovate due copie sulla macchina da altri export
   (`~/Downloads/dashboard`, 57KB, 25 giu — e `~/Desktop/dashboard 2`, 69KB,
   stessa data del nostro file, quindi la versione probabilmente giusta, ma
   illeggibile: il filesystem risponde `EDEADLK` su quel path). Con una versione
   disallineata il rendering di riferimento non è affidabile come ground truth.

## Piano proposto

La conversione dc→React è meccanicamente regolare, quindi va **scriptata**, non
trascritta a mano: 3.850 stili inline riscritti a mano sono 3.850 occasioni di
sbagliare un valore, ed è esattamente la fedeltà che dobbiamo garantire.

1. **Ground truth** — recuperare il `support.js` della versione giusta (o
   ri-esportare il design con il runtime incluso), renderizzare le 19 viste,
   screenshot di riferimento per il confronto.
2. **Converter** — script Node che parsa il markup dc ed emette JSX:
   `style="..."` → oggetto JS, `<sc-if>` → `{cond && ...}`, `<sc-for>` → `.map()`,
   `{ expr }` → `{expr}`. Output: un componente per vista, stili inline intatti.
3. **Port della logica** — le 1.225 righe di `DCLogic` in un hook/provider React:
   stato, loop rAF dello stage, curva di easing, tween, observer.
4. **Routing** — mappare le 19 viste su URL reali react-router (oggi sono solo
   stati interni), decidendo gli slug definitivi.
5. **Verifica** — diff screenshot per vista contro la ground truth, a più
   viewport. Solo dopo: merge e deploy.

## Da decidere

- **Slug URL** per le 19 viste, e cosa succede alle rotte attuali `/allievi` e
  `/calcolatore`: il nuovo design **non le copre** (non c'è vista referral né
  calcolatore). Per ora restano intatte come da indicazione.
- **`support.js`**: recuperarlo dal design originale o ri-esportare?
- Se serve qualcosa online subito, la strada sicura è un **deploy di preview
  Vercel** dal branch, non un push su `master`.

## Fatto in questo passaggio

- Rimossi `reactflow` e `@supabase/supabase-js` (zero import, confermato).
- `design-reference/sito-finale-v1.html` committato come specifica approvata.
- `design-reference/support.js` tenuto fuori dal git (runtime proprietario,
  versione non combaciante).
