# Quattro fix UI di Gabriele + ricognizione su vendite/assistenza

**Fatto e in prod** (`www.reglo.it`, 17 settembre 2026) i quattro fix.
**Il quinto punto e' solo una ricognizione**: niente e' stato cancellato, si
aspetta conferma esplicita.

## Cosa e' stato fatto

| # | Richiesta | Dove | Ambito |
|---|-----------|------|--------|
| 1 | La mano deve finire sulla parola "mano" | 4 viste generate + `design-reference` | mobile + desktop |
| 2 | Le card del carosello si tagliano a destra durante lo scroll | `tweaks.css` | tutte le larghezze |
| 3 | Angoli del telefono in "Dispositivi" sballati | `tweaks.css` | tutte le larghezze |
| 4 | Su mobile il default della durata deve essere 45 min | `mobile.css` | solo < 768px |

### 1. La mano

Era un `<img>` in absolute sull'angolo della sezione (`top: 30px`,
`right: -6%`): slegata dal testo. Il titolo va a capo in un punto diverso a
ogni larghezza, quindi nessun offset fisso puo' far cadere la mano sulla
parola giusta.

Ora l'ultima parola sta in uno `<span style="position: relative">` e
l'immagine e' dentro quello span, ancorata con
`transform-origin: 22% 18%` + `translate(-22%, -18%)`: quel punto
dell'immagine (i polpastrelli) cade sempre sulla parola, a qualunque
viewport e senza JS.

La sezione e' ripetuta identica su **home, /funzioni, /prezzi, /team**: il
fix e' stato applicato a tutte e quattro **e al sorgente
`design-reference/sito-finale-v1.html`**, cosi' una rigenerazione con
`tools/dc-to-react.mjs` non rimette la mano all'angolo.

### 2. Il carosello che si taglia

Il fade laterale era un `-webkit-mask-image` sul contenitore che ha dentro
il marquee animato. Su WebKit un layer mascherato con un'animazione di
`transform` viene ri-rasterizzato durante lo scroll della pagina, e il bordo
si taglia di netto — il che spiega perche' da ferma non si vedeva.

Lo stesso sfumato ora lo fanno due gradienti neri sopra le card
(`::before` / `::after`). Il fondo della sezione e' `#000000` pieno, quindi
"card che sfuma nel nero" e "nero che copre la card" danno lo stesso pixel.

Verificato con diff pixel a marquee in pausa:
- mobile 390: **167 pixel su 1.009.320** fuori soglia, scarto max 7/255 (antialiasing);
- desktop 1440: 28.641 su 3.813.120, tutti nella striscia di 90px a destra,
  dove prima la mano si intravedeva attraverso la card che sfumava e ora il
  gradiente la copre. Pixel quasi neri, scarto max 36/255.

**Limite della verifica**: sul simulatore iPhone 12 / iOS 26.2 l'artefatto
**non e' stato riprodotto ne' prima ne' dopo**, perche' uno scroll fatto da
`scrollTo()` non passa per lo scrolling asincrono del dito. Quindi il fix
rimuove il meccanismo noto che causa questa classe di artefatto, ma la
conferma finale puo' darla solo Gabriele dal suo telefono.

### 3. Gli angoli del telefono

Lo schermo dentro la scocca aveva `border-radius: 14px` fisso, misurato sul
telefono grande (schermo 93px, cioe' il 15% della larghezza). Il telefono e'
largo il 13.5% della composizione: sotto i 768px lo schermo scende a ~32px e
quei 14px diventano il **43%**, quindi gli angoli si mangiavano la mappa e
dentro la scocca comparivano spicchi bianchi.

Ora il raggio e' una frazione: `border-radius: 15% / 7.13%`. La seconda cifra
tiene gli angoli **circolari** sulla proporzione fissa dello schermo
(`(68.9% x 400) / (88.6% x 654) = 0.4755`). Sul desktop fa 13.95px contro i
14px di prima: differenza sotto il pixel. Sistema anche la fascia 768-1280px,
che era over-arrotondata allo stesso modo.

Nota per il futuro: la **barra nera** che si vede sporgere sopra il telefono
non e' un difetto del mockup, e' il bordo del laptop che passa dietro. Si
vede identica su desktop, dove pero' si capisce perche' il laptop e' intero.

### 4. Default 45 min su mobile

Le cinque pill della durata sono **markup statico, non uno stato**: "60 min"
e' scritto selezionato nel design. Su mobile le pill vanno a capo 3 + 2 e la
scelta evidenziata finisce in fondo alla prima riga; con "45 min" sta in
mezzo. Solo `< 768px`: sopra resta 60 min.

## Verifiche

- Larghezze 320 / 360 / 375 / 390 / 430 / 767 / 768 / 1024 / 1280 / 1440 /
  1920: nessun overflow orizzontale, raggio sempre proporzionale, mano
  sempre agganciata alla parola.
- Sezione loghi controllata anche su `/funzioni`, `/prezzi`, `/team`.
- Pill della durata: 45 min selezionata a 390px, 60 min a 1440px.
- iPhone 12 / iOS 26.2 (simulatore): telefono e carosello renderizzano
  correttamente, con il limite sullo scroll scritto sopra.

---

## Punto 5 — solo ricognizione, NIENTE cancellato

Richiesta: *"quando metto recupera password non deve andare in assistenza"* e
*"/contatta-le-vendite e /contatta-l'assistenza non devono piu' esistere"*.
Vale sia per mobile che per web.

### Dove sono linkate davvero

Gli slug reali sono **`/contatta-le-vendite`** e **`/assistenza`** (non
`/contatta-l-assistenza`).

| Da | A | Cosa e' |
|----|---|---------|
| `views/Vendite.tsx:54` (`v.goAssistenza`) | `/assistenza` | link "Contatta l'assistenza" in fondo al form vendite |
| `views/Assistenza.tsx:54` (`v.goVendite`) | `/contatta-le-vendite` | link "Contatta le vendite" in fondo al form assistenza |
| `public/sitemap.xml` | entrambe | dichiarate ai motori di ricerca |
| `seo.ts:73` e `seo.ts:78` | entrambe | title + description + canonical |

**Sono le uniche.** In particolare:
- l'**header** non le linka: la voce e' "Contatti" -> `/contatti`;
- il **footer** (`views/HdrVisible2.tsx`) ha 18 voci e nessuna punta alle due
  pagine: la voce contatti va a `/contatti`;
- **`/contatti`** non le linka: manda a `cal.com` (due calendari diversi per
  demo e supporto), a `mailto:support@reglo.it` e a `tel:+393299144105`.

Quindi le due pagine sono di fatto **orfane**: si raggiungono solo per URL
diretto, l'una dall'altra, e dai motori via sitemap. Rispondono 200.

### Il "recupera password"

**Sul sito non c'e'.** L'unica occorrenza e' `views/Login.tsx:74`, dentro il
mockup di login del design, e quello `<span>` **non ha nessun onClick**: e'
testo morto. Il mockup e' anche irraggiungibile: `routes.ts` manda
`FAKE_LOGIN_PATH = '/accedi'` sul login vero
(`LOGIN_URL = https://app.reglo.it/sign-in`) e "Accedi" di header e footer
punta la' (`RoutedSite.tsx:64`).

Quindi il "recupera password" che finisce in assistenza **sta nella web app
(`reglo/`), non qui** — coerente con REG-481. I repo `reglo/` e
`reglo-mobile/` non sono presenti su questa macchina, quindi la conferma va
fatta la'.

### Da decidere prima di cancellare

1. **Il form vendite e' l'unico canale scritto verso i commerciali.** Va a
   `gabriele.torta@reglo.it` (vedi `008-tampone-form-mailto.md`). Se la
   pagina sparisce, resta solo il calendario cal.com: da decidere se basta.
2. **Che fare degli URL**: 301 verso `/contatti`, oppure 404. Oggi
   rispondono 200 e sono in sitemap; se si cancellano senza redirect
   diventano 404 gia' indicizzate.
3. **Il reset password va risolto nella web app**, non togliendo la pagina
   qui: se `/assistenza` sparisce e l'app continua a linkarla, quel link si
   rompe. L'ordine giusto e' prima l'app, poi il sito.
4. **`/contatti` assorbe tutto?** Oggi offre demo, supporto, mail e
   telefono: se e' il sostituto, i due form spariscono e non c'e' piu' un
   modulo compilabile sul sito.
