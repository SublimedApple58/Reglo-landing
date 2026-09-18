# "Accedi" porta allo store quando si è sul telefono

**Fatto.** Il pulsante "Accedi" (header e footer) continua a portare al login
della web app su desktop, ma da iPhone/iPad va all'App Store e da Android al
Google Play. Nessun'altra parte del sito è toccata.

## Perché

`app.reglo.it/sign-in` è la web app: non è pensata per uno schermo da 390px.
Chi apre il sito dal telefono e clicca "Accedi" vuole l'app Reglo. Lo store
fa entrambe le cose in un colpo solo: apre l'app se è già installata, la fa
scaricare se non lo è.

## Gli URL degli store

Non sono stati inventati né presi dalla pagina pubblica dello store: sono gli
stessi due che la web app usa già per i link istruttore
(`reglo/lib/autoscuole/instructor-link-deeplink.ts`), coerenti con
`app.json` del repo mobile.

| | |
|---|---|
| App Store | `https://apps.apple.com/app/id6759302065` |
| Google Play | `https://play.google.com/store/apps/details?id=com.tiziano.developer.reglomobile` |
| Package Android | `com.tiziano.developer.reglomobile` (`expo.android.package`) |

Verificati online: l'id App Store risolve su `apps.apple.com/us/app/reglo-autoscuole/id6759302065`
("Reglo autoscuole"), e la pagina Play risponde 200 con titolo "Reglo autoscuole".
Con user agent iPhone, `apps.apple.com` fa 301 verso `itms-appss://…`, cioè
passa la mano all'app App Store: è esattamente il comportamento voluto.

I QR in `public/images/qr-*.png` NON sono stati usati come fonte: sono
placeholder del design, non contengono nessun codice leggibile (verificato
con il decoder QR di CoreImage).

## Il riconoscimento del dispositivo

`src/site/store.ts`, funzione `detectMobilePlatform()`. Guarda lo **user
agent**, non la larghezza della finestra:

- serve sapere QUALE store aprire, e il media query non lo dice;
- una finestra desktop stretta non è un telefono. Con `isMobileViewport()`
  (la soglia 767px di `mobileHero.ts`) chi rimpicciolisce la finestra su Mac
  finirebbe sullo store senza avere nessuna app da installare, e resterebbe
  senza login.

Stessa logica di `detectMobilePlatform` nella web app, più un caso in piu':
da iPadOS 13 l'iPad dichiara "Macintosh", quindi lo si riconosce da
`navigator.maxTouchPoints > 1` (un Mac non ha lo schermo tattile). L'app
supporta il tablet (`ios.supportsTablet: true`), quindi anche da iPad si va
all'App Store.

## Cosa è cambiato

| File | |
|---|---|
| `src/site/store.ts` | **nuovo** — URL degli store, `detectMobilePlatform()`, `storeUrl()`, `loginTarget()` |
| `src/site/RoutedSite.tsx` | `goLogin` ora usa `loginTarget()` invece di `LOGIN_URL` fisso |

L'override resta in `RoutedSite.renderVals()`, fuori dal generato: `RegloSite.tsx`
è un porting fedele rigenerato da `tools/port-logic.mjs` e non si tocca a mano.
Header e footer passano dallo stesso `goLogin`, quindi un solo punto copre
tutti e due gli ingressi.

## Verifica

Click vero sul bottone in Chrome headless (build di produzione servita da
`vite preview`), con user agent, viewport e `navigator.maxTouchPoints` del
dispositivo, e la navigazione intercettata per leggere la destinazione:

| Dispositivo | header | footer |
|---|---|---|
| iPhone 14 · Safari iOS 17 | App Store | App Store |
| Pixel 8 · Chrome Android 14 | Google Play | Google Play |
| iPad · Safari (UA "Macintosh", 5 touch) | App Store | App Store |
| Desktop macOS · Chrome 1440px | `app.reglo.it/sign-in` | `app.reglo.it/sign-in` |
| Desktop Windows · finestra 380px | `app.reglo.it/sign-in` | `app.reglo.it/sign-in` |

L'ultima riga è il caso che il media query avrebbe sbagliato.

Più 11 user agent passati direttamente a `detectMobilePlatform()` (iPhone
Safari e Chrome, Android telefono e tablet, iPad vecchio e nuovo, Mac Safari
e Chrome, Windows normale e touch, Linux Firefox): nessun desktop finisce
sullo store, nessun telefono resta sulla web app.

`npm run typecheck` e `npm run lint` puliti (restano i 3 warning
pre-esistenti di `dcx.tsx`).

## Lasciato fuori di proposito

`/accedi`, il vecchio URL del mockup di login, continua a reindirizzare alla
web app anche da telefono (`componentDidMount` in `RoutedSite.tsx`). Non è
linkato da nessuna parte del sito: se si vuole la stessa regola anche lì, è
una riga.
