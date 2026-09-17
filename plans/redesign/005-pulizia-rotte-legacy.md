# Pulizia delle rotte legacy e del codice del vecchio sito

Decisioni di Gabriele (co-founder): `/allievi` e `/calcolatore` si cancellano
(le rifà da zero, nessun redirect); le pagine legali si possono rimuovere
**a condizione** che privacy e termini siano già nel footer del nuovo design.

## Verifica dei link legali: confermata

Controllato sul sito live prima di toccare qualsiasi cosa. Entrambi sono nel
footer, in basso a destra come diceva Gabriele:

| Voce | Posizione nel footer | Click |
|---|---|---|
| Privacy Policy | 74% orizzontale, 92% verticale | -> `/privacy-policy`, titolo "Privacy policy" |
| Termini e Condizioni | 82% orizzontale, 92% verticale | -> `/termini-e-condizioni`, titolo "Termini e condizioni" |

Sono `<span>` con `cursor: pointer` e navigazione client-side (non `<a href>`),
quindi funzionano ma **non sono link crawlabili**: per un motore di ricerca le
due pagine legali non risultano collegate da nessuna parte. Vale la pena
saperlo, non è bloccante.

`/privacy-policy` conserva lo slug che era già online; il contenuto del vecchio
`/policy` vive ora su `/termini-e-condizioni`.

## Rotte rimosse

`/allievi`, `/calcolatore` e `/policy` non sono più mappate. Gli URL non
mappati mostrano la **vista 404 del design** (`data-screen-label="404"`, con
header, footer e link di ritorno funzionante), non più la home.

Nota: è un *soft 404* — il rewrite catch-all di `vercel.json` serve
`index.html`, quindi l'HTTP status resta 200. Per un 404 vero servirebbe
elencare le rotte in `vercel.json`, duplicando la mappa che oggi vive solo in
`src/site/routes.ts`. Se conta per la SEO si fa, ma va deciso.

## Codice rimosso

Le pagine vecchie erano già state cancellate nel reset iniziale; quello che
restava era orfano da quando `App.tsx` monta il nuovo sito:

- `src/pages/DemoPage.tsx`, `src/pages/Placeholder.tsx`
- `src/components/RouteRecovery.tsx`, `src/components/ScrollToTop.tsx`
- `src/lib/calculator.ts` (il calcolatore lo rifà Gabriele)
- `public/404.html` (il suo unico consumatore era `RouteRecovery`)
- dipendenze: `react-router-dom`, `@phosphor-icons/react`, `framer-motion`,
  `lucide-react` — zero import nel nuovo design

`dependencies` è ora solo `react` + `react-dom`.

## Due regressioni rispetto al vecchio sito

Nessuna delle due è un difetto di conversione: il design di riferimento si
comporta identico, era un prototipo. Ma in produzione contano.

### 1. I form non inviano niente

`sendVendite` e `sendAssist` (pagine `/contatta-le-vendite` e `/assistenza`)
validano i campi e poi fanno solo `setState({ sent: true })`. **Nessuna
chiamata di rete.** Chi compila vede la conferma e il contatto non arriva a
nessuno. Lo stesso vale per il form "iscriviti".

Il vecchio sito inviava a `POST /api/marketing/contact` e
`/api/marketing/referral`. Il contratto è ancora in `src/lib/contact.ts`, che
ho tenuto di proposito per questo.

### 2. Nessun evento Pixel sulle CTA

Il vecchio sito sparava `fbq('trackCustom', 'BookingCTA_Click')` sulle CTA di
prenotazione. Il nuovo `bookCal` apre lo stesso URL Cal.com ma non traccia
nulla. Il PageView base continua a funzionare (è in `index.html`).
`trackBookingCTA` è in `src/lib/booking.ts`.

Entrambe richiedono una decisione (quali eventi, dove mandare i lead), quindi
non le ho collegate da solo. Vedi `src/lib/README.md`.
