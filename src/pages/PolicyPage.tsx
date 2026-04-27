import LegalLayout from '../components/LegalLayout';

export default function PolicyPage() {
  return (
    <LegalLayout
      kicker="Informativa"
      title="Policy"
      updatedAt="18 febbraio 2026"
      sections={[
        {
          title: 'Ambito del servizio',
          body: <p>Reglo Autoscuole fornisce una piattaforma cloud per gestire prenotazioni guide, disponibilità di istruttori e veicoli, notifiche operative e storico pagamenti. L'uso del servizio implica l'accettazione della presente policy.</p>,
        },
        {
          title: 'Uso consentito',
          body: <p>L'utente si impegna a usare la piattaforma in modo conforme alla legge e alle finalità professionali dichiarate, evitando accessi non autorizzati, abusi o utilizzi illeciti.</p>,
        },
        {
          title: 'Responsabilità',
          body: <p>Reglo adotta misure tecniche e organizzative adeguate. Il cliente resta responsabile della correttezza dei dati inseriti, della configurazione dei ruoli e della custodia delle credenziali.</p>,
        },
        {
          title: 'Disponibilità del servizio',
          body: <p>Il servizio viene aggiornato periodicamente per migliorare stabilità, sicurezza e funzionalità. Eventuali interventi programmati vengono comunicati quando impattano l'operatività.</p>,
        },
        {
          title: 'Proprietà intellettuale',
          body: <p>Marchi, contenuti, interfacce e software restano di proprietà di Reglo o dei rispettivi titolari. È vietata la riproduzione non autorizzata.</p>,
        },
        {
          title: 'Modifiche alla policy',
          body: <p>Possiamo aggiornare questa policy per esigenze legali, tecniche o operative. Le modifiche vengono pubblicate su questa pagina con data di aggiornamento.</p>,
        },
        {
          title: 'Contatti',
          body: <p>Per informazioni puoi scrivere a <a href="mailto:info@reglo.it" className="text-rose-500 hover:underline">info@reglo.it</a> o <a href="mailto:privacy@reglo.it" className="text-rose-500 hover:underline">privacy@reglo.it</a>.</p>,
        },
      ]}
    />
  );
}
