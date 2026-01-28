import { Play, GitBranch, FileText, PenTool, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function WorkflowVisual() {
  const steps = [
    {
      label: 'Trigger',
      title: 'Nuovo ordine nel gestionale',
      description: 'Il workflow parte automaticamente quando viene registrato un nuovo ordine nell\'ERP.',
      icon: Play,
    },
    {
      label: 'Azione 1',
      title: 'Aggiorna stato nel gestionale',
      description: 'Modifica automaticamente lo stato dell\'ordine da "In attesa" a "In lavorazione".',
      icon: GitBranch,
    },
    {
      label: 'Azione 2',
      title: 'Genera documento con DocManager',
      description: 'Compila la conferma d\'ordine con i dati dell\'ERP in tempo reale.',
      icon: FileText,
    },
    {
      label: 'Azione 3',
      title: 'Firma digitale',
      description: 'Applica la firma digitale automatica al documento generato.',
      icon: PenTool,
    },
    {
      label: 'Azione 4',
      title: 'Invia email al cliente',
      description: 'Recapita la conferma d\'ordine firmata direttamente al cliente.',
      icon: Mail,
    },
    {
      label: 'Azione 5',
      title: 'Notifica il team vendite',
      description: 'Invia un messaggio automatico per informare il reparto vendite.',
      icon: MessageSquare,
    },
    {
      label: 'Output',
      title: 'Workflow completato',
      description: 'Tutto è stato automatizzato. Zero intervento manuale.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="workflow-section" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Workflow in azione
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Un esempio reale di come Reglo automatizza un processo completo,
            dalla ricezione dell'ordine alla notifica del team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative pl-12">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/60 bg-white/80">
                  <Icon className="h-4 w-4 text-[color:var(--color-ink)]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-10 h-full w-px bg-[color:var(--color-border)]" />
                )}
                <div className="glass-card interactive-lift rounded-2xl p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                    {step.label}
                  </div>
                  <div className="text-base font-semibold text-[color:var(--color-ink)] mt-2">
                    {step.title}
                  </div>
                  <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 glass-panel rounded-2xl px-8 py-6 max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] text-center">
            <span className="font-semibold text-[color:var(--color-ink)]">Risultato:</span> un processo che richiedeva 30 minuti e 5 passaggi manuali
            ora viene completato in <span className="font-semibold text-[color:var(--color-ink)]">meno di 2 secondi</span>, senza errori e senza intervento umano.
          </p>
        </div>
      </div>
    </section>
  );
}
