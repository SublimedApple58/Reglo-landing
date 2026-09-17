# Integrazioni da ricollegare

Questi file non sono importati da nessuna parte: restano qui di proposito,
perché sono i punti di aggancio verso il backend che il nuovo design **non**
usa ancora.

- **`contact.ts`** — contratto delle API `POST /api/marketing/contact` e
  `/api/marketing/referral` del backend `reglo/`, con i tipi del payload.
  Serve per far funzionare davvero i form "Contatta le vendite" e
  "Contatta l'assistenza": oggi validano i campi e mostrano la conferma
  **senza inviare niente**.
- **`booking.ts`** — URL Cal.com + `trackBookingCTA`, l'evento Meta Pixel
  `BookingCTA_Click` che il vecchio sito sparava sulle CTA di prenotazione.
  Il nuovo design apre lo stesso URL ma non traccia l'evento.

Vedi `plans/redesign/005-pulizia-rotte-legacy.md`.
