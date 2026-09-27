# motion-lab — prove di motion design per reglo.it

Pacchetto **separato** dal sito: ha le sue dipendenze (Remotion 4) e il suo
`node_modules`. Il sito non lo importa, `vite build` non lo vede, `eslint` lo
ignora e `.vercelignore` lo esclude dal deploy.

## Lanciare lo Studio (anteprima)

```bash
cd motion-lab
npm install        # solo la prima volta
npm run studio     # apre http://localhost:3000
```

Nella barra a sinistra, cartella **Prove** → `HeroTitolo`. Le props (titolo,
sottotitolo) si modificano dal pannello a destra, senza toccare il codice.

## Esportare

```bash
npm run render -- HeroTitolo out/hero-titolo.mp4       # video
npm run still  -- HeroTitolo out/frame.png --frame=90  # un fotogramma
```

La cartella `out/` non va in git.

## Regole

- Ogni animazione passa da `useCurrentFrame()` + `interpolate`/`spring`:
  le animazioni CSS non vengono renderizzate.
- Colori e font del sito stanno in `src/brand.ts` (Figtree, stessi hex).
- Una prova = un file in `src/compositions/` + una `<Composition>` in
  `src/Root.tsx`, dentro la cartella `Prove`.
