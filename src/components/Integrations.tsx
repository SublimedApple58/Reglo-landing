import { Database, MessageSquare, Mail, Plug, Webhook, Cloud } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    {
      name: 'Gestionale Aziendale',
      description: 'Connessione nativa con il tuo ERP',
      icon: Database,
      color: '#324D7A',
    },
    {
      name: 'Slack',
      description: 'Notifiche e comunicazioni team',
      icon: MessageSquare,
      color: '#5B93FF',
    },
    {
      name: 'Email',
      description: 'Invio automatico di documenti',
      icon: Mail,
      color: '#58CFAE',
    },
    {
      name: 'Servizi Esterni',
      description: 'API e webhook personalizzate',
      icon: Webhook,
      color: '#FFB857',
    },
    {
      name: 'Cloud Storage',
      description: 'Archiviazione documenti',
      icon: Cloud,
      color: '#AFE2D4',
    },
    {
      name: 'Altri Sistemi',
      description: 'Integrazioni su misura',
      icon: Plug,
      color: '#6057A0',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Integrazioni semplici e potenti
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Reglo si connette facilmente con il tuo ecosistema aziendale esistente.
            Nessuna sostituzione, solo potenziamento dei tuoi strumenti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
                  style={{ backgroundColor: integration.color }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#324D7A' }}>
                  {integration.name}
                </h3>
                <p className="text-black/60">{integration.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#AFE2D4]/20 to-[#324D7A]/20 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#324D7A' }}>
              Integrazione rapida con il tuo gestionale
            </h3>
            <p className="text-lg text-black/70 mb-6">
              Reglo si connette al tuo ERP aziendale esistente in pochi passaggi.
              Il nostro team ti supporta nell'integrazione e nella configurazione iniziale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white px-6 py-3 rounded-xl shadow-md">
                <span className="font-semibold" style={{ color: '#324D7A' }}>✓</span> Nessuna sostituzione del gestionale
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-md">
                <span className="font-semibold" style={{ color: '#324D7A' }}>✓</span> Setup assistito dal nostro team
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-md">
                <span className="font-semibold" style={{ color: '#324D7A' }}>✓</span> Operativo in pochi giorni
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
