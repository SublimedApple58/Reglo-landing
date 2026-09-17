/**
 * TAMPONE — invio dei form via mailto.
 *
 * I form "Contatta le vendite" e "Contatta l'assistenza" del design validano
 * i campi e mostrano la conferma senza inviare niente: non esiste un endpoint
 * a cui parlare (`/api/marketing/contact` non e' in nessun repo ne' online, e
 * il progetto non ha variabili d'ambiente configurate).
 *
 * Finche' non c'e' un backend, apriamo una mail precompilata verso
 * l'assistenza: il lead arriva davvero, ma la spedizione la completa l'utente.
 * Per questo la conferma nei form dice "manca un ultimo passo" invece di
 * "richiesta inviata" (vedi TAMPONE_COPY in tools/dc-to-react.mjs).
 *
 * Da rimuovere quando i form invieranno davvero.
 */
export const SUPPORT_EMAIL = 'support@reglo.it';

/**
 * Destinatario dei lead commerciali.
 *
 * Non e' SUPPORT_EMAIL: la pagina /contatta-le-vendite pubblica questo
 * indirizzo come contatto commerciale ("Oppure scrivi a ..."), mentre il form
 * mandava tutto a support@reglo.it. I lead finivano nella casella
 * dell'assistenza, che non e' chi li deve lavorare.
 */
export const SALES_EMAIL = 'gabriele.torta@reglo.it';

/** Apre il client di posta con una mail gia' pronta. */
export function openMailto(subject: string, body: string, to: string = SUPPORT_EMAIL) {
  const url =
    'mailto:' + to +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  // un anchor sintetico invece di location.href: se non c'e' un client di
  // posta la pagina resta dov'e', senza navigazioni a vuoto
  const a = document.createElement('a');
  a.href = url;
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function venditeMail(nome: string, email: string, istruttori: string, messaggio: string) {
  const righe = [
    'Nome: ' + nome,
    'Email: ' + email,
    istruttori ? 'Istruttori: ' + istruttori : null,
    '',
    messaggio || '(nessun messaggio)',
  ].filter((r) => r !== null);
  return { subject: 'Richiesta demo Reglo — ' + nome, body: righe.join('\n') };
}

export function assistenzaMail(email: string, messaggio: string) {
  return {
    subject: 'Richiesta assistenza Reglo',
    body: ['Email: ' + email, '', messaggio].join('\n'),
  };
}
