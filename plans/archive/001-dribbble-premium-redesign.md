# Redesign Reglo — Dribbble Premium

## Decisioni approvate
- **Font:** Inter (eccezione brand consapevole)
- **Palette:** Desaturated brand
  - Rosa: `#D63384` (era `#EC4899`)
  - Giallo: `#E6B800` (era `#FACC15`)
  - Neutri: zinc/slate scale
- **Vibe:** Dribbble premium (parallax, magnetic buttons, glass morphism, choreography)
- **Workflow:** codice diretto (no preview con nano-banana/Stitch)
- **Pagine in scope:** tutte (Home, Allievi, Calculator, 404, About, Platform, Pricing, Demo, Privacy, Policy, Navigation, Footer)

## Foundation
- Stack: React 18 + TS + Vite 7 + Tailwind 3.4
- Aggiunte: `framer-motion`, `@phosphor-icons/react`
- Spring base: `{ type: "spring", stiffness: 100, damping: 20 }`
- Glass: `backdrop-blur` + 1px inner border (`border-white/10`) + inset shadow

## Fasi
1. Foundation: install deps, design tokens nuovi, palette desaturata
2. Hero asimmetrico + magnetic CTA
3. Trusted by → Kinetic marquee
4. Features → Bento grid asimmetrico con 5 archetipi
5. Calcolatore con count-up spring
6. Come funziona → Sticky scroll stack + tilt video
7. Allievi: timeline + form stati
8. Calculator page allineata
9. 404 con glitch
10. Navigation (Dynamic Island/Dock) + Footer Bento
11. Polish, mobile fallback, lighthouse
