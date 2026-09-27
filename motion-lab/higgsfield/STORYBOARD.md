# CascataAutomatica — versione Higgsfield

Confronto con la composizione Remotion `CascataAutomatica` (motion-lab/src).
Qui vanno SOLO gli output di Higgsfield: la parte Remotion non si tocca.

## Cosa aspettarsi (da verificare con lo strumento vero)

Un generatore video produce clip brevi da prompt: rende bene luce, profondita',
movimento di camera, "cinematografia". Rende male testo leggibile e UI precisa
(orari, nomi, pulsanti). Quindi il confronto onesto e' sullo STILE — frecce/flussi,
atmosfera, transizioni — non sulla fedelta' dell'interfaccia. Probabile uso
realistico: generare i "ponti" (il flusso che parte dallo slot e raggiunge i
telefoni) e comporli sopra la UI di Remotion, invece di sostituirla.

## Direzione visiva comune a tutti gli shot

Product showcase SaaS, sfondo bianco caldo/grigio chiarissimo (#f5f5f7), luce
morbida da studio, profondita' di campo leggera, palette monocroma nero/bianco
con un solo accento verde salvia (#3f8a64) per il successo. Niente neon,
niente coriandoli, niente look cartoon. Font di riferimento: Figtree.

## Shot (5 s ciascuno, 16:9)

1. **Lo slot si libera** — un'agenda settimanale web minimale su uno schermo,
   una cella vuota tratteggiata pulsa piano. Camera: lento dolly-in sulla cella.
2. **Il flusso verso il telefono** — dalla cella parte una scia luminosa sottile
   (non una freccia disegnata: un filo di luce che traccia un arco) e raggiunge
   un iPhone accanto, dove scende un banner di notifica. Camera: pan che segue la scia.
3. **Prenotazione** — un dito tocca il banner, il banner diventa una conferma
   con spunta verde; la cella dell'agenda si riempie con una card scura.
4. **Disdetta** — sul telefono si tocca "Annulla guida"; la card nell'agenda si
   dissolve e la cella torna vuota, pulsante.
5. **La cascata** — dalla cella partono quattro scie luminose a ventaglio verso
   quattro iPhone sfalsati in profondita'; i banner si accendono uno dopo l'altro.
   Uno viene toccato e si porta in primo piano, gli altri si spengono.
6. **Chiusura** — la cella si riempie con un piccolo alone verde; la camera si
   allarga sull'agenda piena. Claim: "L'agenda si riempie da sola."

Output: salvare le clip in questa cartella come `shot-N-*.mp4`.
