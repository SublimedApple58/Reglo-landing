# "Accedi" punta alla web app vera

Il design contiene una propria pagina di login, servita su `/accedi`. È un
**mockup**: ha i campi precompilati (`info@scuolaguidamontreal.it`,
`password10`) e non autentica nessuno.

## Dominio corretto

| | |
|---|---|
| Web app | **`app.reglo.it`** (progetto Vercel `reglo`, Next.js, branch `main`) |
| Login | **`https://app.reglo.it/sign-in`** — 200, `<title>Sign In \| Reglo</title>` |

Verificato che ogni altro percorso dell'app (`/`, `/login`, `/signin`,
`/auth/signin`) redirige a `/sign-in`, e che nel repo `reglo/` la route è
`app/[locale]/(auth)/sign-in`.

Il link non porta prefisso di lingua: sia `/sign-in` sia `/it/sign-in`
rispondono 200 e ci pensa il middleware della web app a scegliere la lingua
del browser. `curl` senza `Accept-Language` finisce su `/en/sign-in`, un
browser italiano su `/it/sign-in`.

## Cosa è cambiato

Gli ingressi al login erano due, entrambi via `goLogin`: header e footer.
`goLogin` è sostituito in `RoutedSite.renderVals()` — fuori dal file generato,
così sopravvive alla rigenerazione — e ora porta a `LOGIN_URL`.

`/accedi` è stato tolto dalla mappa delle rotte e chi ci arriva viene
reindirizzato al login vero: il mockup non è più raggiungibile da nessuna
parte.

La vista `Login` resta nel codice generato ma non viene mai montata: lasciarla
evita di divergere dal riferimento, e sparirà con la componentizzazione.

## Verifica

| Prova | Esito |
|---|---|
| "Accedi" nell'header | -> `https://app.reglo.it/sign-in` |
| "Accedi" nel footer | -> `https://app.reglo.it/sign-in` |
| Apertura diretta di `/accedi` | redirect -> `https://app.reglo.it/sign-in` |
| Confronto con il riferimento | invariato su tutte le altre viste |
