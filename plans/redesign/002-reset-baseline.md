# Reset del sito per il nuovo design

> **Stato:** pulizia eseguita sul branch `chore/reset-for-new-design`.
> Nulla pushato, nulla deployato. In attesa dell'HTML approvato da innestare.

## Cosa è stato fatto

Svuotato il sito marketing pubblico mantenendo intatto lo scheletro di progetto
(build, deploy, routing, logica di business), per innestare il nuovo design
pixel-perfect senza residui del design precedente.

Verificato dopo la pulizia: `npm run typecheck`, `npm run build`, `npm run lint`
passano tutti.

## Stack rilevato

| Aspetto | Valore |
|---|---|
| Build | **Vite 7** (`vite.config.ts`), no Next.js |
| UI | React 18.3 + TypeScript 5.5, SPA |
| Routing | `react-router-dom` 7 client-side (`BrowserRouter`) |
| Styling | **Tailwind 3.4** + PostCSS/autoprefixer + `src/index.css` per token e utility custom |
| Animazioni | `framer-motion` 12 (token spring centralizzati, ora rimossi) |
| Icone | `@phosphor-icons/react` (in uso), `lucide-react` (legacy) |
| Origine progetto | template bolt.new (`.bolt/`) |

### Deploy

- Progetto Vercel **`reglo-landing`** (team `Reglo`, `prj_EVFbhmugvAmsySncN3HcC4czxG4u`),
  framework preset `vite`, Node 24.x.
- Collegato a GitHub `SublimedApple58/Reglo-landing`, branch di produzione `master`
  → push su `master` = deploy in produzione automatico.
- Domini: `reglo.it`, `www.reglo.it` + domini `*.vercel.app`.
- `vercel.json`: rewrite catch-all `/(.*)` → `/index.html` (necessario per la SPA).
  `public/_redirects` e `public/.htaccess` fanno lo stesso per altri host.
- `public/404.html` + `src/components/RouteRecovery.tsx`: fallback per host senza
  rewrite, salva il path in `sessionStorage` e lo ripristina dopo il redirect a `/`.

## Rimosso

- **Tutte le sezioni della home**: `src/sections/home/` (Hero, Partners,
  BentoFeatures, Calculator, StickyShowcase).
- **Tutte le pagine tranne `/demo`**: Home, About, Platform, Pricing, Allievi,
  Calculator, PrivacyPolicy, Policy, NotFound.
- **Tutti i componenti di presentazione**: Navigation, Footer, Hero, Benefits,
  Platform, Integrations, Testimonials, Press, TrustedBy, Manifesto, AboutReglo,
  Support, SwitchTo, ThreeWays, FinalCTA, CalculatorTeaser, ReferralPromo,
  IphoneMockup, LegalLayout, Toast.
- **Primitive UI/motion**: `src/components/ui/` (MagneticButton, Marquee, Reveal,
  TiltCard, CountUp), `src/hooks/` (useScrollReveal, useTilt3D, useToast),
  `src/motion/` (token spring/ease/duration).
- **Token di design**: `src/index.css` azzerato (rimossi palette rose/amber,
  glass, grain, dot-grid, diffusion shadows, marquee, skeleton, scrollbar,
  focus ring, utility heading). `tailwind.config.js` azzerato (`theme.extend` vuoto).
- **Font del vecchio design**: rimosso il `<link>` Google Fonts (Inter) da `index.html`.
- **Documentazione del vecchio design**: `DESIGN_SYSTEM.md` e il piano del redesign
  Dribbble spostati in `plans/archive/`.

Lo storico completo del vecchio design resta nel commit **`23ef4f0`**.

## Conservato intenzionalmente

| Cosa | Perché |
|---|---|
| `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig*.json`, `postcss.config.js`, `eslint.config.js` | scheletro di build |
| `vercel.json`, `public/_redirects`, `public/.htaccess`, `public/404.html` | configurazione deploy SPA |
| `index.html`: SEO, Open Graph, Twitter card, Meta Pixel (`916540234045355`) | tracking e SEO, non design |
| `src/lib/booking.ts` | URL Cal.com + evento Pixel `BookingCTA_Click` |
| `src/lib/contact.ts` | contratto API `POST /api/marketing/contact` e `/referral` verso il backend `reglo/`, con i tipi payload |
| `src/lib/calculator.ts` | formula concordata delle perdite (costo guida × slot liberi × 4) |
| `src/components/ScrollToTop.tsx`, `RouteRecovery.tsx` | utility di routing, zero design |
| `src/pages/DemoPage.tsx` | redirect funzionante a Cal.com (riscritto senza classi del vecchio tema) |
| Tutti gli asset in `public/` | logo, favicon, og-image, screenshot app, video tutorial, loghi partner: riutilizzabili |

`src/pages/Placeholder.tsx` è nuovo: cattura tutte le rotte in attesa del nuovo
design, così nessun URL indicizzato dà errore.

## Rotte pubbliche da preservare

Sono live e indicizzate. Oggi tutte servite dal `Placeholder` (tranne `/demo`).

| Path | Contenuto precedente |
|---|---|
| `/` | home |
| `/allievi` | landing referral allievi, con form → `submitReferral` |
| `/calcolatore` | calcolatore perdite |
| `/privacy-policy`, `/policy` | pagine legali |
| `/demo` | redirect a Cal.com (**funzionante, non toccato**) |
| `/about`, `/piattaforma`, `/pricing` | erano redirect → `/` |
| `*` | 404 |

## Da decidere prima di procedere

1. **Come innestare l'HTML** — vedi opzioni discusse con Tiziano.
2. **Dipendenze morte**: `reactflow` e `@supabase/supabase-js` hanno **zero import**
   nel codice. Non rimosse per non desincronizzare `package-lock.json` con il
   build Vercel. Da togliere quando si decide lo stack finale.
3. `.bolt/prompt` contiene ancora l'istruzione del template ("usa lucide-react per
   le icone"): da aggiornare o rimuovere se non rispecchia il nuovo design.
4. Se il nuovo design non ha più `/allievi` o `/calcolatore`, servono redirect
   espliciti per non perdere il traffico indicizzato.
