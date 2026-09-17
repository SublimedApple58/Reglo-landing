# Responsive mobile — recap vista per vista

> **Stato:** completato e in produzione. Ogni vista e' stata rilasciata appena
> sistemata, non a fine giro (richiesta di Tiziano: voleva controllare dal
> telefono man mano).

## Vincolo assoluto

**Il desktop non si tocca.** Il sito e' codice generato da
`tools/dc-to-react.mjs`: ogni stile e' inline, senza un solo breakpoint. Per
questo il responsive vive in un layer separato:

| File | Cosa contiene |
|---|---|
| `src/site/mobile.css` | tutte le regole, dentro `@media (max-width: 767px)`, con `!important` per battere lo `style=` inline |
| `src/site/mobileHero.ts` | l'unico pezzo di JS: rimette in proporzione il mockup della hero della home, che `_stage()` dimensiona solo sull'altezza del viewport. `RoutedSite` avvolge `_stage` invece di modificare `RegloSite`, che e' un porting fedele |

Niente di tutto questo esiste sopra i 768px: sopra quella soglia il CSS non
matcha e la correzione JS non viene chiamata, quindi il desktop resta
identico. Nessun file generato e' stato modificato a mano.

L'header mobile e' rimasto quello del design, solo ristretto via CSS: logo e
pill piu' piccoli, "Accedi" fuori dalla barra. Non serviva un hamburger —
logo, tre voci di menu e "Prenota" ci stanno in una riga sola gia' a 375px,
e cosi' tutto il comportamento gia' scritto (barra che si nasconde allo
scroll, tono che segue la scena della hero) continua a funzionare.

## Verifica

`puppeteer-core` (installato con `--no-save`, fuori da `package.json`) pilota
il Chrome di sistema a 375px e 390px: screenshot a scaglioni di scroll +
diagnostica di overflow orizzontale (`scrollWidth` vs `innerWidth` e lista
degli elementi che sforano). Script in scratchpad, non versionato.

## Giro delle viste

| # | Vista | Cosa e' stato fatto |
|---|---|---|
| 1 | Header + Footer | colonna a piena larghezza, pill e logo stretti, "Accedi" fuori dalla barra, menu Funzioni a 244px; footer da 6 a 2 colonne |
| 2 | Home `/` | titolo hero non piu' `nowrap`, CTA in colonna, step della hero in fasce sopra/sotto il telefono, mockup ridimensionato (`mobileHero.ts`), Numeri e recensioni a 1 colonna, Storie una card per schermata |
| 3 | `/funzioni` | i tre blocchi "testo + mockup" in colonna, testo prima, mockup a `zoom: 0.62` |
| 4 | `/prezzi` | riga sotto il prezzo in colonna, senza separatori |
| 5 | `/segretaria-virtuale` | le tre card "Tre cose da fare" in colonna |
| 6 | `/rinnovi-automatici` | scocca del telefono a proporzione, a piena larghezza |
| 7 | `/istruttori` | card "Malattie del team" centrata, fascia ferie rientrata, cursore ancorato a destra, `<video>` dentro il contenitore |
| 8 | `/rinnovo-patente` | timeline da centrale a binario sinistro, "Il problema" da 4 colonne a 1 |
| 9 | `/novita` | changelog da `280px \| testo` a colonna, data sopra |
| 10 | `/team` | muro recensioni a 1 colonna (il selettore non copriva "Recensioni team") |
| 11 | `/contatti` | gia' a posto |
| 12 | `/contatta-le-vendite` | form da 2 colonne a 1, filetto da verticale a orizzontale |
| 13 | `/assistenza` | stesso fix di vendite |
| 14 | `/reglo-road` | gia' a posto |
| 15 | `/privacy-policy`, `/termini-e-condizioni` | gia' a posto |
| 16 | 404 | patatine rientrate nel riquadro |

## Verifica finale

16 rotte x 4 viewport (375, 390, 1440, 1920): **nessuno scroll orizzontale**.
Su ogni vista il desktop e' stato ricontrollato a 1440 confrontando le
proprieta' toccate (numero di colonne, zoom, posizioni): sempre invariato.

## Una regressione, trovata da Tiziano sul telefono

La regola che rimetteva in proporzione la scocca di `/rinnovi-automatici`
era scritta senza scope:

```css
div[style*="aspect-ratio: 400 / 654"] { width: 100% !important; }
```

I telefoni con quella proporzione nel sito sono tre. Quello piccolo accanto
al laptop in "Dispositivi" sulla home e' in absolute con `width: 13.5%`:
forzato al 100% diventava gigante e copriva il titolo della sezione.
Risolto restringendo la regola al figlio diretto del contenitore giusto.

**Lezione:** i selettori su `[style*=]` matchano in tutto il sito. Vanno
sempre ancorati a un contenitore (`data-screen-label`, o un figlio diretto),
mai lasciati globali.

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
