# TAMPONE — invio dei form via mailto

Scelta di Tiziano (opzione 2) dopo aver accertato che non esiste un endpoint a
cui inviare. Provvisorio: va rimosso quando i form invieranno davvero.

## Perché non si poteva "ripristinare"

L'ipotesi iniziale era che bastasse ricollegare i form a
`/api/marketing/contact`, come faceva il vecchio sito. Non regge:

- **L'endpoint non esiste**: assente da `reglo/` (anche in tutta la storia
  git: `git log -S` non trova nulla) e da `reglo-crm/`; 404 su `app.reglo.it`,
  `staging.reglo.it` e sul deployment di preview.
- **Non era il comportamento del vecchio sito**: al commit `23ef4f0`,
  `submitContact` aveva **zero chiamanti** — li aveva gia' rimossi il commit
  *"Replace client forms with direct Cal.com booking flow"*.
- **Nessuna configurazione**: il progetto Vercel `reglo-landing` non ha
  **nessuna** variabile d'ambiente in produzione, quindi
  `VITE_CONTACT_API_URL` non e' mai stata impostata. Anche il form referral su
  `/allievi` del vecchio sito, a ogni invio, lanciava
  `"VITE_CONTACT_API_URL non configurata"`.

La perdita di lead quindi **non l'ha introdotta il redesign**: i form non hanno
mai funzionato in produzione.

## Cosa fa il tampone

`src/site/mailto.ts` compone una mail precompilata verso `support@reglo.it`;
`RoutedSite.renderVals()` avvolge `sendVendite` e `sendAssist` e la apre dopo
che la validazione originale e' passata. Sta fuori dal codice generato, quindi
sopravvive alla rigenerazione.

| Form | Oggetto | Corpo |
|---|---|---|
| `/contatta-le-vendite` | `Richiesta demo Reglo — <nome>` | nome, email, istruttori, messaggio |
| `/assistenza` | `Richiesta assistenza Reglo` | email, messaggio |

La mail si apre con un anchor sintetico invece di `location.href`: se non c'e'
un client di posta la pagina resta dov'e'.

### La conferma dice la verità

Con il mailto la mail la spedisce l'utente, quindi la conferma del design
("Richiesta inviata" / "Messaggio ricevuto" / "Ti rispondiamo a…") mentirebbe
esattamente come prima. `TAMPONE_COPY` in `tools/dc-to-react.mjs` la
sostituisce con **"Manca un ultimo passo — Ti abbiamo aperto una mail già
pronta per support@reglo.it: premi invia e …"**.

L'indirizzo compare nel testo apposta: se il client di posta non si apre,
l'utente ha comunque dove scrivere.

## Verifica

| Caso | Esito |
|---|---|
| Vendite compilato | mailto con nome, email, istruttori e messaggio |
| Assistenza compilato | mailto con email e messaggio |
| Vendite senza nome | nessuna mail, errore "Dicci come ti chiami" |
| Vendite email non valida | nessuna mail, errore "Controlla l'indirizzo email" |
| Assistenza senza messaggio | nessuna mail, errore "Scrivici cosa non va…" |
| Assistenza email non valida | nessuna mail, errore "Controlla l'indirizzo email" |
| Confronto con il riferimento | invariato su tutte le viste |

## Limite noto

Se l'utente non ha un client di posta configurato (tipico di chi usa solo
webmail da desktop) non si apre nulla. Il testo della conferma lo copre in
parte mostrando l'indirizzo, ma la soluzione vera resta una funzione
serverless in questo repo che inoltri il lead via email: servono un provider
e una API key.
