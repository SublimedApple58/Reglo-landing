import { Play, GitBranch, FileText, PenTool, Mail, MessageSquare, CheckCircle } from 'lucide-react';

interface WorkflowBlock {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  description: string;
}

export default function WorkflowPage() {
  const blocks: WorkflowBlock[] = [
    {
      id: 1,
      icon: Play,
      label: 'Trigger',
      title: 'Nuovo ordine nel gestionale',
      description: 'Il workflow parte automaticamente quando viene registrato un nuovo ordine nell\'ERP.',
    },
    {
      id: 2,
      icon: GitBranch,
      label: 'Azione 1',
      title: 'Aggiorna stato nel gestionale',
      description: 'Modifica automaticamente lo stato dell\'ordine da "In attesa" a "In lavorazione".',
    },
    {
      id: 3,
      icon: FileText,
      label: 'Azione 2',
      title: 'Genera documento con DocManager',
      description: 'Compila la conferma d\'ordine con i dati dell\'ERP in tempo reale.',
    },
    {
      id: 4,
      icon: PenTool,
      label: 'Azione 3',
      title: 'Firma digitale',
      description: 'Applica la firma digitale automatica al documento generato.',
    },
    {
      id: 5,
      icon: Mail,
      label: 'Azione 4',
      title: 'Invia email al cliente',
      description: 'Recapita la conferma d\'ordine firmata direttamente al cliente.',
    },
    {
      id: 6,
      icon: MessageSquare,
      label: 'Azione 5',
      title: 'Notifica Slack al team vendite',
      description: 'Invia un messaggio automatico per informare il reparto vendite.',
    },
    {
      id: 7,
      icon: CheckCircle,
      label: 'Output',
      title: 'Workflow completato',
      description: 'Tutto è stato automatizzato. Zero intervento manuale.',
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-paper)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Workflow
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Workflow in azione
          </h1>
          <p className="text-lg text-[color:var(--color-ink-muted)]">
            Ecco come Reglo automatizza completamente il tuo processo, passo dopo passo.
          </p>
        </div>

        <div className="space-y-4">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div key={block.id} className="relative pl-12">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-white">
                  <Icon className="h-4 w-4 text-[color:var(--color-ink)]" />
                </div>
                {index < blocks.length - 1 && (
                  <div className="absolute left-4 top-10 h-full w-px bg-[color:var(--color-border)]" />
                )}
                <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                    {block.label}
                  </div>
                  <div className="text-base font-semibold text-[color:var(--color-ink)] mt-2">
                    {block.title}
                  </div>
                  <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">
                    {block.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-sand)] px-8 py-6">
          <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] text-center">
            <span className="font-semibold text-[color:var(--color-ink)]">Risultato:</span> un processo che richiedeva 30 minuti e 5 passaggi manuali
            ora viene completato in <span className="font-semibold text-[color:var(--color-ink)]">meno di 2 secondi</span>, senza errori e senza intervento umano.
          </p>
        </div>
      </div>
    </div>
  );
}
