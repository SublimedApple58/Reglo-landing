# Audit SEO / tecnico pre-lancio

> Richiesto da Gabriele. Fatto il 17 settembre 2026 sul sito live
> (www.reglo.it) e sul codice. Sotto: cosa era rotto, cosa e' stato
> sistemato e cosa resta da decidere.

## Sistemato e in produzione

| Punto | Com'era | Com'e' |
|---|---|---|
| robots.txt | **non esisteva**: il catch-all di `vercel.json` rispondeva 200 con l'HTML della SPA | file vero, `text/plain`, con riferimento alla sitemap |
| sitemap.xml | **non esisteva**, stesso problema | 15 URL generati dagli slug di `routes.ts` |
| title | **uno solo per 15 rotte** ("Reglo \| L'autoscuola del futuro") | 16 univoci, uno per vista + 404 |
| description | **una sola per 15 rotte** | una per vista, 76-152 caratteri |
| canonical | **assente** | presente su ogni rotta, host `www` |
| og:url | `https://reglo.it`, che risponde 307 verso www | `https://www.reglo.it/` |
| focus da tastiera | `*:focus { outline: none }` cancellava **ogni** indicazione | anello su `:focus-visible` (col mouse non cambia niente) |
| nav da tastiera | header, menu e footer irraggiungibili con Tab | 22 punti di navigazione raggiungibili e attivabili con Invio/Spazio |
| cache | `max-age=0, must-revalidate` **anche sul bundle con hash** | 1 anno immutable su `/assets`, 1 settimana su immagini e upload |

## Verificato e giA' a posto

- **Alt text**: 508 `<img>`, **zero** senza attributo `alt`. 468 con testo
  descrittivo, 40 con `alt=""` sui decorativi — che e' la pratica giusta.
  Su questo il design era curato.
- **Link**: nessun link rotto. 6 esterni piu' il login, tutti raggiungibili
  (LinkedIn risponde 999 a curl, e' il suo anti-bot, dal browser va).
  Nessuna richiesta 4xx/5xx sulle 15 rotte.
- **Form**: funzionano. Vendite e assistenza generano la mail precompilata
  con tutti i campi; a campi vuoti **non** inviano. Resta il tampone via
  `mailto` documentato in `src/site/mailto.ts`: la spedizione la completa
  l'utente dal suo client di posta.

## Da decidere con voi

### 1. Analytics — serve una scelta di account
Oggi **non c'e' nessun analytics**. L'unica cosa installata e' il **Meta
Pixel** (id `916540234045355`), che spara solo `PageView`. Non ho aggiunto
niente perche' serve decidere account e strumento. Nota collegata: il vecchio
sito sparava `fbq('trackCustom', 'BookingCTA_Click')` sulle CTA di
prenotazione, il nuovo no — `trackBookingCTA` e' pronto in
`src/lib/booking.ts` ma non collegato (era gia' segnalato nel piano 005).

### 2. I meta li vede solo chi esegue JavaScript
Title, description e canonical sono applicati da JS al cambio pagina, perche'
il sito e' una SPA con un solo `index.html`. **Google esegue JavaScript e li
vede**; diversi altri crawler e le preview di WhatsApp/LinkedIn no: per loro
tutte le pagine restano quelle di `index.html`. La soluzione e' il
**prerender delle 15 rotte in build** (uno script che salva un HTML statico
per slug). E' un lavoro contenuto ma cambia la pipeline di build: da fare
solo se lo volete.

### 3. Soft 404
Gli URL non mappati mostrano la 404 del design ma rispondono **HTTP 200**
(il rewrite catch-all serve `index.html`). Per un 404 vero servirebbe
elencare le rotte in `vercel.json`, duplicando la mappa che oggi vive solo in
`routes.ts`. Era gia' annotato nel piano 005: conta per la SEO, va deciso.

### 4. Contrasto: tre colori sotto soglia WCAG AA
Sono colori del design, cambiarli e' una scelta vostra. Misurati sulle coppie
reali (il check automatico da' falsi positivi dove il fondo e' una foto):

| Dove | Colori | Ratio | Minimo |
|---|---|---|---|
| Label piccole in /rinnovo-patente | `#9a9aa2` su `#f7f7f9` | **2.61** | 4.5 |
| Sottotitoli dentro i mockup | `#8a8a95` su `#ffffff` | **3.41** | 4.5 |
| Voci nav non attive | `#7a7a86` su `#ffffff` | **4.24** | 4.5 |

Il primo e' il piu' grave. Basterebbe scurire: `#9a9aa2` -> `#6f6f78`,
`#8a8a95` -> `#6a6a74`, `#7a7a86` -> `#71717d`. Ditemi se procedo.

### 5. Peso delle pagine
Misurato in produzione su viewport mobile:

| Rotta | Totale | LCP |
|---|---|---|
| `/` | **18.9 MB** (19 MB di immagini) | 776 ms |
| `/istruttori` | **20.0 MB** (18 MB il solo video) | 240 ms |
| `/team` | 6.2 MB | 824 ms |

L'LCP e' buono perche' la hero e' testo, ma **19 MB su rete mobile sono
tanti**. I due interventi che contano:
- **immagini in WebP**: 64 MB in `public/`, con singoli PNG da 1.5-2.3 MB.
  Convertendoli si taglia il 70-80% del peso. Va fatto riscrivendo i
  riferimenti nel codice generato: fattibile ma non a mano, serve uno script.
- **video da 18 MB** su `/istruttori`: oggi con `preload="metadata"`, ma
  parte al primo scroll. Andrebbe compresso o messo su uno streaming.

Il bundle JS invece e' sano: 957 KB non compressi, **146 KB gzip**, in un
chunk unico.

### 6. Incoerenza sull'indirizzo dei lead
La pagina `/contatta-le-vendite` scrive "Oppure scrivi a
**gabriele.torta@reglo.it**", ma la mail generata dal form va a
**support@reglo.it** (`SUPPORT_EMAIL` in `src/site/mailto.ts`). Cosi' i lead
commerciali finiscono nella casella dell'assistenza. Non l'ho cambiato
perche' e' una scelta vostra su chi deve riceverli.

### 7. Accessibilita': quello che resta
Fuori dal perimetro sistemato restano **24-69 span cliccabili per pagina**
non raggiungibili da tastiera (accordion FAQ, frecce dei caroselli, tab di
/novita). Aggiungere `tabindex` a runtime su tutti sarebbe un cerotto con la
semantica sbagliata: la soluzione giusta e' far emettere al generatore
(`tools/dc-to-react.mjs`) `<button>` e `<a href>` dove il design usa `<span>`.
E' il lavoro di componentizzazione gia' previsto come passo successivo.

Segnalo anche che `/rinnovo-patente` non ha un `<h1>`: il titolo della hero
e' dentro un `<div>`. Le altre 14 rotte ne hanno esattamente uno.
