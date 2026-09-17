# Fix: card "Storie" e pulsante del muro recensioni

Due bug segnalati da Gabriele sul sito live. Entrambi erano **già nel design di
riferimento**: la conversione li ha riprodotti fedelmente, come doveva. Sono
quindi le prime due correzioni consapevoli al design, non fix di conversione.

## 1. Barra scura sul bordo destro delle card "Storie"

**Sintomo:** sulla card "Autoscuola Robatto" comparivano una striscia blu scuro
sul bordo destro e una cucitura verticale nella sfumatura.

**Causa:** il tool di design aveva scritto misure assolute al posto di `100%`.

```
card:      flex: 0 0 calc((100% - 40px) / 3)   <- fluida
immagine:  inset: 0; width: 388px; height: 660px
sfumatura: inset: 0; width: 371px; height: 623px
```

La card sorella (Montreal) ha correttamente `width: 100%; height: 100%`. Quando
la card supera i 388px (dai ~1500px di viewport in su) l'immagine non la copre
più e affiora il `background: #23233c` della card: la barra scura. La sfumatura,
a 371px, restava scoperta già a 1440.

**Perché la verifica non l'aveva presa:** il confronto DOM girava a 390, 768,
1440 e 1920 e misurava 32 proprietà — ma i bounding box coincidevano con quelli
del riferimento, perché *anche il riferimento ha lo stesso difetto*. Un
confronto contro una fonte che sbaglia non può segnalare l'errore. Ho aggiunto
un rilevatore indipendente (`gaps`) che cerca elementi `position: absolute` con
`inset: 0` e misure fisse che non coprono il contenitore: trova il problema
senza confrontarlo con nulla.

**Correzione** (`fixToolSizing` in `tools/dc-to-react.mjs`): su un elemento che
dichiara `inset: 0`, una misura fissa in px su un asse *senza offset negativo
su quello stesso asse* è un artefatto e diventa `100%`.

La clausola sull'offset negativo è il punto delicato: le foto del team
(`founder-1`, `team-dorta`) hanno `width: 542px; left: -61px`, cioè un ritaglio
voluto, e vanno lasciate stare. Verificato: dopo il fix sono immutate.

## 2. Il pulsante "Mostra meno" addosso all'ultima recensione

**Causa:** il contenitore del pulsante ha `margin-top: -18px` per infilarlo
nella sfumatura che chiude il muro. Ma quella sfumatura esiste solo con il muro
**chiuso** (`<sc-if value="{{ reviewsClosed }}">`). Da aperto il pulsante risale
comunque e finisce contro l'ultima card della colonna centrale.

**Correzione** (`fixReviewsButton`): da aperto il margine diventa `+20px`, la
stessa gronda fra le card del muro. Vale per tutti e 4 i muri (home, prezzi,
istruttori, team). Da chiuso nulla cambia.

## Verifica

- **Blast radius**: confronto contro il riferimento su tutte le viste. Solo
  `home` e `core` differiscono, in 2 elementi ciascuna — esattamente l'immagine
  e la sfumatura corrette. Tutte le altre viste a 0 differenze, `team` compreso.
- **Copertura card**: a 1280 / 1440 / 1680 / 1920 / 2560 immagine e sfumatura
  coprono il contenitore esattamente (buco 0px) su tutte e tre le card.
- **Pulsante**: da aperto 20px di margine e 40px di stacco dalla card più
  vicina, a 1440 e 1920.

---

# Favicon e og-image

## Favicon: non era quella della web app

Gabriele chiedeva solo di verificare il collegamento, dando per scontato che
fosse già quella del backoffice. Non lo era.

| Dove | Cosa c'era |
|---|---|
| Servita dal sito (`public/favicon.svg`) | quadrato rosa `#EC4899` con una "A" — brand vecchio |
| In root, non servita (`favicon.png`) | "R" verde menta — brand ancora precedente |
| Web app (`reglo/public/images/favicon.png` + `app/[locale]/favicon.ico`) | il mark a raggi nero |

Il mark della web app è **lo stesso logo del nuovo design**
(`images/logo-reglo-dark.png`, in navy invece che nero): erano coerenti fra
loro, era la landing a essere rimasta indietro.

Copiati i file esatti della web app in `public/` e collegati come `.ico`
(32x32), `.png` (256x256) e `apple-touch-icon`. Rimossi i due file obsoleti.

## og-image rigenerata dalla hero

`public/og-image.png` era ancora quella del vecchio design. Rigenerata a
1200x630 catturando la hero del nuovo sito dal build di produzione: logo, nav,
titolo, le due CTA e la cima del mockup telefono.

Aggiunti `og:image:width`, `og:image:height` e `og:image:alt`, che mancavano:
senza le dimensioni alcuni client rimandano l'anteprima al primo fetch.
