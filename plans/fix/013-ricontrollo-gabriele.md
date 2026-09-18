# Ricontrollo dei fix di Gabriele: 3 su 4 non erano a posto

**Fatto e in prod.** Gabriele ha riverificato i quattro fix di
`011-fix-ui-gabriele.md` e ne ha segnalati tre ancora rotti. Aveva ragione su
tutti e tre. Gli angoli del telefono (punto 3 di quel doc) sono l'unico che
era davvero a posto.

Questo giro la verifica e' stata fatta **anche su Safari iOS vero**
(simulatore iPhone 12 / iOS 26.2), non solo su Chrome: due dei tre problemi
si vedevano solo li'.

## 1 — La mano (e, di rimbalzo, le card dei loghi)

Attenzione: **"la card tagliata" di Gabriele NON era questa** — vedi il
punto 2 qui sotto, chiarito da Tiziano a lavoro gia' iniziato. Quello che
segue resta comunque un difetto vero, trovato e sistemato per strada.

`mano.png` ha l'avambraccio **tagliato di netto sul bordo destro del file**:
il contenuto arriva a filo, x=1253 su 1254 px (misurato leggendo l'alpha del
PNG). Nel design originale non si vedeva perche' l'immagine stava a
`right: -6%`: sporgeva dalla sezione e quel bordo finiva oltre il ritaglio di
`overflow: hidden`.

Il fix precedente ha ancorato la mano alla parola "mano" — cosa giusta, la
segue a ogni capo riga — ma cosi' ha **riportato quel bordo dentro la
pagina**. Misurato sul sito in prod, larghezze da 320 a 1920:

| | |
|---|---|
| larghezze in cui il bordo tagliato cadeva **dentro** la sezione | **12 su 13** |
| unica larghezza salva | 600px, per caso |
| quanto la mano **copriva le card** | da 20px (320) a 276px (da 1280 in su) |

C'e' poi un secondo effetto: la mano non passa dietro alle card dei loghi,
passa **sopra**. Sta dentro il blocco del titolo (`position: relative; z-index: 1`),
quindi tutto quel sottoalbero — anche con `z-index: -1` sull'immagine — si
disegna sopra le righe del carosello, che non sono posizionate. Sulle card
diventava una macchia che le faceva sembrare sporche o tagliate di netto.

**Cosa e' stato fatto** (`tweaks.css`):

1. una maschera sfumata sull'immagine: sfuma a zero prima di arrivare ai
   propri bordi, quindi un bordo da tagliare non c'e' piu'. Nessuna geometria
   poteva risolverlo davvero — la parola "mano" finisce in un punto diverso a
   ogni larghezza, non esiste una misura che tenga quel bordo sempre fuori;
2. il contenitore del carosello sale sopra il titolo (`z-index: 3`): le card
   tornano pulite e la mano resta dietro, che e' il suo posto.

Il fade laterale del carosello dei loghi **non c'entrava e funzionava
gia'**: misurata la luminanza delle colonne, al bordo e' 0 su tutti e due i
lati, a 1440 e a 390. La mask tolta nel giro precedente aggancia anche su
WebKit (verificato sul simulatore), quindi quel pezzo era corretto.

## 2 — La card tagliata: e' il carosello "Storie" su mobile

Chiarimento di Tiziano: non e' un problema della card, e' il **carosello
orizzontale delle storie** ("Come sono passate a Reglo"). La pagina ha un
padding laterale e, **mentre si scorre**, quel bianco copre la card che sta
passando. La card deve poter **sforare** il padding, non restare tagliata.

Riprodotto e misurato su mobile 390:

| | prima | dopo |
|---|---|---|
| Sezione `Storie` | `padding: 110px 20px 120px` | invariata |
| Scroller | `20 → 370` (largo 350) | **`0 → 390`** |
| Card | 350 | 350 (invariata) |
| Atterraggio snap | tutte a x=20 | tutte a x=20 (invariato) |
| `scrollWidth` / max scroll | 1460 / 1110 | 1500 / **1110** (invariato) |

Il ritaglio dell'overflow cadeva sui bordi dello scroller, cioe' a 20px dai
bordi dello schermo: da fermi non si nota, perche' la card e' esattamente in
posizione, **si vede solo durante lo scorrimento** — ed e' esattamente quello
che segnalava Gabriele.

Il fix (`mobile.css`): margini negativi da -20px riportano lo scroller a tutta
larghezza, il padding da 20px rimette dentro lo spazio tolto (cosi' la card
resta larga 350, perche' `flex: 0 0 100%` misura il content box) e
`scroll-padding-left: 20px` tiene lo snap allineato al testo della sezione
invece che al bordo dello schermo.

Verificato che il max scroll non cambia (1110): anche l'**ultima** card
arriva in posizione allineata. Era il rischio vero di questo fix — su WebKit
il padding di coda di uno scroller flex storicamente viene ignorato — e sul
simulatore iOS 26.2 il banner conferma `snap c1@20 c2@20 c3@20 c4@20`.

Su desktop non cambia niente: a 768 e 1440 scroller, card, `scrollWidth` e
atterraggi sono identici a prima (card a 1/3, il problema non esiste).

## 3 — Il default 45 min: un selettore che su iPhone non agganciava

Su Chrome era gia' 45. **Su iPhone no, restava 60** — ed e' quello che vedeva
Gabriele.

Causa, trovata leggendo l'attributo `style` sul telefono:

```
Chrome:  "width: 100%; max-width: 720px; text-align: center; user-select: none;"
WebKit:  "width: 100%; max-width: 720px; text-align: center;"
```

React scrive lo stile con `node.style.userSelect = 'none'`. Chrome lo
serializza nell'attributo, **WebKit no**. Il selettore del fix precedente
chiedeva `[style*="user-select: none"]`, quindi sull'iPhone non agganciava
niente e restava il markup del design, cioe' 60 min.

Ora l'aggancio e' `width: 100%` + `max-width: 720px` + `text-align: center`:
tre proprieta' presenti in tutti e due i motori, e la terna e' **unica in
tutto il sito** (le altre `max-width: 720px` sono intestazioni di sezione,
senza `width: 100%`).

**Lezione per i prossimi fix**: `div[style*="..."]` e' l'unico aggancio
possibile sul codice generato, ma va scelto fra proprieta' che WebKit
serializza davvero, e va verificato sul simulatore. Non basta Chrome.

## Verifica

Su Safari iOS 26.2 (iPhone 12, 390px), banco locale con la build di
produzione:

```
mano.maschera=SI  carosello.z=3  righe=3 maskTolta=SI  sfumato=SI  pill=45 min
```

Su Chrome, build locale, 12 larghezze (320 → 1920) x 4 pagine con la sezione
loghi (home, /funzioni, /prezzi, /team) = 48 combinazioni:

- nessun overflow orizzontale;
- maschera della mano attiva ovunque;
- carosello sopra la mano ovunque;
- pill: 45 min fino a 767, 60 min da 768 in su (il default desktop resta
  quello del design, come deciso nel giro precedente).

`npm run typecheck` e `npm run lint` puliti (restano i 3 warning
pre-esistenti di `dcx.tsx`).

Screenshot prima/dopo ritagliati sui tre elementi: vedi allegati al messaggio
di consegna (mano e card su desktop 1440, durata su Safari iOS).

## 4 — Anche il selettore del mockup passa a 45 min

Su `/funzioni` i selettori di durata sono **due**. Il secondo, dentro il
mockup "Nuovo appuntamento", mostrava 30 min e non era mai stato toccato.
Tiziano ha confermato: 45 anche li'.

| Blocco | Prima | Ora |
|---|---|---|
| "Durata prenotazione allievo" | 45 mobile / 60 desktop | invariato |
| "Durata" nel mockup | 30 ovunque | **45 ovunque** |

**Nota sulla scelta**: qui il cambio vale a **tutte le larghezze**, non solo
su mobile. Il mockup e' un'illustrazione del prodotto e mostrava 30 sia su
telefono sia su desktop, quindi non c'era una ragione di layout per
differenziarlo — al contrario del primo selettore, dove il 45 su mobile
nasceva dal fatto che le pill vanno a capo 3 + 2. Se lo si vuole 45 solo
sotto i 768px, e' una regola in `mobile.css`.

Questo non e' un aggancio CSS ma **markup statico**: la pill selezionata e'
scritta nello stile inline. Cambiato lo stile "selezionata" (nero pieno) da
"30 min" a "45 min" sia in `views/Core.tsx` sia in
`design-reference/sito-finale-v1.html`, cosi' una rigenerazione con
`tools/dc-to-react.mjs` non lo riporta indietro. Non passando da un
selettore, non ha il rischio di serializzazione che aveva il punto 3.

Verificato su 9 larghezze (320 → 1920): il primo selettore resta 45/60 come
prima, il secondo e' 45 ovunque, impaginazione delle pill invariata.
