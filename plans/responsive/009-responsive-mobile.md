# Responsive mobile — recap vista per vista

> **Stato:** in corso. Ogni vista viene rilasciata in produzione appena
> sistemata, non a fine giro (richiesta di Tiziano: vuole controllare dal
> telefono man mano).

## Vincolo assoluto

**Il desktop non si tocca.** Il sito e' codice generato da
`tools/dc-to-react.mjs`: ogni stile e' inline, senza un solo breakpoint. Per
questo il responsive vive in un layer separato:

| File | Cosa contiene |
|---|---|
| `src/site/mobile.css` | tutte le regole, dentro `@media (max-width: 767px)`, con `!important` per battere lo `style=` inline |
| `src/site/MobileNav.tsx` | header mobile vero (logo + Prenota + drawer), montato da `RoutedSite` |

Niente di tutto questo esiste sopra i 768px: sopra quella soglia il CSS non
matcha e il DOM desktop resta identico byte per byte. Nessun file generato e'
stato modificato a mano.

## Verifica

`puppeteer-core` (installato con `--no-save`, fuori da `package.json`) pilota
il Chrome di sistema a 375px e 390px: screenshot a scaglioni di scroll +
diagnostica di overflow orizzontale (`scrollWidth` vs `innerWidth` e lista
degli elementi che sforano). Script in scratchpad, non versionato.

## Giro delle viste

| # | Vista | Stato |
|---|---|---|
| 1 | Header + Footer (chrome condiviso) | da fare |
| 2 | Home `/` | da fare |
| 3 | Funzioni `/funzioni` | da fare |
| 4 | Prezzi `/prezzi` | da fare |
| 5 | Segretaria `/segretaria-virtuale` | da fare |
| 6 | Rinnovi `/rinnovi-automatici` | da fare |
| 7 | Istruttori `/istruttori` | da fare |
| 8 | Rinnovo patente `/rinnovo-patente` | da fare |
| 9 | Novita' `/novita` | da fare |
| 10 | Team `/team` | da fare |
| 11 | Contatti `/contatti` | da fare |
| 12 | Vendite `/contatta-le-vendite` | da fare |
| 13 | Assistenza `/assistenza` | da fare |
| 14 | Reglo Road `/reglo-road` | da fare |
| 15 | Privacy + Termini | da fare |
| 16 | 404 | da fare |

## Cosa era rotto (rilievo iniziale, 390px)

- **Header**: la pill di navigazione e "Accedi"/"Prenota" si sovrappongono.
  `this._fit()` limita `[data-header-inner]` a `clientWidth * 1320/1560`
  (330px su 390) e dentro non ci sta niente.
- **Hero home**: l'`h1` e' `white-space: nowrap`, quindi esce dallo schermo
  da entrambi i lati; la scritta "(finalmente digitale)" sfora a destra.
- **Step dell'hero**: griglia `1fr auto 1fr`, il telefono prende tutto e le
  due colonne di testo si azzerano: su mobile il copy sparisce.
- **Numeri / Recensioni**: griglie a 3 colonne fisse, una parola per riga.
- **Footer**: griglia `1fr repeat(5, 165px)`, le 5 colonne si accavallano.
