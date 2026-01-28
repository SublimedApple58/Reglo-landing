import { Database, MessageSquare, Mail, Plug, Webhook, Cloud } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    {
      name: 'Gestionale Aziendale',
      description: 'Connessione nativa con il tuo ERP',
      icon: Database,
      tone: 'ERP',
    },
    {
      name: 'Slack',
      description: 'Notifiche e comunicazioni team',
      icon: MessageSquare,
      tone: 'Team',
    },
    {
      name: 'Email',
      description: 'Invio automatico di documenti',
      icon: Mail,
      tone: 'Comunicazioni',
    },
    {
      name: 'Servizi Esterni',
      description: 'API e webhook personalizzate',
      icon: Webhook,
      tone: 'API',
    },
    {
      name: 'Cloud Storage',
      description: 'Archiviazione documenti',
      icon: Cloud,
      tone: 'Storage',
    },
    {
      name: 'Altri Sistemi',
      description: 'Integrazioni su misura',
      icon: Plug,
      tone: 'Custom',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Ecosistema
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Integrazioni pulite e leggere
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Reglo si aggancia al tuo stack senza cambiare strumenti. Connettori essenziali,
            interfacce discrete, zero frizioni.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="glass-card interactive-lift rounded-2xl px-5 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/80">
                    <Icon className="h-4 w-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold text-[color:var(--color-ink)]">
                        {integration.name}
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                        {integration.tone}
                      </span>
                    </div>
                    <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                      {integration.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass-panel rounded-3xl px-8 py-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="glass-chip inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">Setup</span>
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--color-ink)]">
              Integrazione rapida con il tuo gestionale
            </h3>
            <p className="text-sm text-[color:var(--color-ink-muted)] mt-3">
              Reglo si connette al tuo ERP in pochi passaggi. Il nostro team ti supporta
              nell'integrazione e nella configurazione iniziale.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-[color:var(--color-ink-muted)]">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
              Nessuna sostituzione del gestionale
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
              Setup assistito dal nostro team
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
              Operativo in pochi giorni
            </div>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-[color:var(--color-ink-muted)]">
            <span className="glass-chip rounded-full px-3 py-1">SAP</span>
            <span className="glass-chip rounded-full px-3 py-1">Zucchetti</span>
            <span className="glass-chip rounded-full px-3 py-1">Teamsystem</span>
            <span className="glass-chip rounded-full px-3 py-1">NetSuite</span>
          </div>
        </div>
      </div>
    </section>
  );
}
