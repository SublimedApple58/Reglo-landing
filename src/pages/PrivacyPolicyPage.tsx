import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      kicker="Informativa"
      title="Privacy Policy"
      updatedAt="18 febbraio 2026"
      sections={[
        {
          title: 'Titolare del trattamento',
          body: (
            <p>
              Reglo S.r.l. è il titolare del trattamento dei dati personali raccolti tramite questo sito.
              Per richieste privacy puoi scrivere a <a href="mailto:privacy@reglo.it" className="text-rose-500 hover:underline">privacy@reglo.it</a>.
            </p>
          ),
        },
        {
          title: 'Dati raccolti',
          body: <p>Possiamo raccogliere dati identificativi e di contatto (nome, email, azienda, telefono), dati relativi alla richiesta inviata tramite form e dati tecnici di navigazione.</p>,
        },
        {
          title: 'Finalità del trattamento',
          body: <p>Trattiamo i dati per rispondere alle richieste di demo o contatto, gestire comunicazioni operative, migliorare il servizio e adempiere agli obblighi di legge.</p>,
        },
        {
          title: 'Base giuridica',
          body: <p>La base giuridica è l'esecuzione di misure precontrattuali richieste dall'utente, il consenso quando necessario e l'adempimento di obblighi legali.</p>,
        },
        {
          title: 'Conservazione',
          body: <p>Conserviamo i dati per il tempo strettamente necessario alle finalità indicate e nel rispetto dei termini previsti dalla normativa applicabile.</p>,
        },
        {
          title: "Diritti dell'interessato",
          body: <p>Puoi richiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati, oltre a proporre reclamo all'autorità garante competente.</p>,
        },
        {
          title: 'Contatti',
          body: <p>Per ogni richiesta sulla privacy puoi contattarci via email a <a href="mailto:privacy@reglo.it" className="text-rose-500 hover:underline">privacy@reglo.it</a>.</p>,
        },
      ]}
    />
  );
}
