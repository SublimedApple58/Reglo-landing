# Ricontrollo dei fix di Gabriele: 3 su 4 non erano a posto

**Fatto e in prod.** Gabriele ha riverificato i quattro fix di
`011-fix-ui-gabriele.md` e ne ha segnalati tre ancora rotti. Aveva ragione su
tutti e tre. Gli angoli del telefono (punto 3 di quel doc) sono l'unico che
era davvero a posto.

Questo giro la verifica e' stata fatta **anche su Safari iOS vero**
(simulatore iPhone 12 / iOS 26.2), non solo su Chrome: due dei tre problemi
si vedevano solo li'.

## 1 + 2 — La mano, e le card che sembravano tagliate

Erano lo **stesso difetto**, non due.

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

E qui sta anche la "card tagliata": la mano non passa dietro alle card, passa
**sopra**. Sta dentro il blocco del titolo (`position: relative; z-index: 1`),
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

Il fade laterale del carosello **non c'entrava e funzionava gia'**: misurata
la luminanza delle colonne, al bordo e' 0 su tutti e due i lati, a 1440 e a
390. La mask tolta dal carosello nel giro precedente aggancia anche su
WebKit (verificato sul simulatore), quindi quel pezzo era corretto.

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

## Rimasto aperto, serve una decisione

Su `/funzioni` ci sono **due** selettori di durata, non uno:

| Blocco | Default oggi |
|---|---|
| "Durata prenotazione allievo" (quello sistemato) | 45 min su mobile, 60 su desktop |
| "Durata" dentro il mockup "Nuovo appuntamento" | **30 min**, su mobile e su desktop |

Il secondo non e' mai stato toccato e nessuno ha detto cosa deve mostrare.
Non l'ho cambiato di mia iniziativa: e' una scelta di prodotto, non un bug.
