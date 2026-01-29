import { Database, FileText, ShieldCheck, Sparkles, Zap, Bell, BarChart3, Users, CheckCircle2 } from 'lucide-react';

export default function Platform() {
  const features = [
    {
      title: 'Workflow builder visuale',
      description: 'Disegna flussi approvativi e automazioni con un editor drag & drop.',
      icon: Sparkles,
    },
    {
      title: 'Documenti sempre allineati',
      description: 'Genera e aggiorna PDF e moduli con i dati del gestionale.',
      icon: FileText,
    },
    {
      title: 'Firma digitale integrata',
      description: 'Applica firme qualificate e traccia ogni passaggio in un click.',
      icon: ShieldCheck,
    },
    {
      title: 'Connessione ERP in tempo reale',
      description: 'Sincronizza anagrafiche, ordini e movimenti senza duplicare dati.',
      icon: Database,
    },
    {
      title: 'Notifiche intelligenti',
      description: 'Alert su email, Slack o Teams con regole personalizzate.',
      icon: Bell,
    },
    {
      title: 'Automazioni multi-step',
      description: 'Sequenze con condizioni, timer e ramificazioni senza codice.',
      icon: Zap,
    },
    {
      title: 'Report e KPI operativi',
      description: 'Dashboard con tempi, colli di bottiglia e performance di processo.',
      icon: BarChart3,
    },
    {
      title: 'Ruoli e permessi',
      description: 'Controllo granulare per reparto, sede o team esterno.',
      icon: Users,
    },
    {
      title: 'Audit e compliance',
      description: 'Storico completo, versioning e log per ogni documento.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Piattaforma
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Digitalizza tutte le attività operative che rallentano il tuo team
          </h2>
          <p className="text-base text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Reglo sostituisce fogli Excel, email e passaggi manuali con un flusso unico, trasparente e tracciabile.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">Setup medio: 7 giorni</span>
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">ROI in 3 mesi</span>
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">NPS 62</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="glass-card interactive-lift rounded-2xl px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/60 bg-white/80">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">
                      {feature.title}
                    </div>
                    <div className="text-xs text-[color:var(--color-ink-muted)] mt-2">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
