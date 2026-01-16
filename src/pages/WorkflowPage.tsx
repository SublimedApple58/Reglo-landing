import { Play, GitBranch, FileText, PenTool, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface WorkflowBlock {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  type: string;
  title: string;
  description: string;
  color: string;
}

export default function WorkflowPage() {
  const [blocks] = useState<WorkflowBlock[]>([
    {
      id: 1,
      icon: Play,
      type: 'TRIGGER',
      title: 'Nuovo ordine nel gestionale',
      description: 'Il workflow parte automaticamente quando viene registrato un nuovo ordine nell\'ERP',
      color: '#AFE2D4',
    },
    {
      id: 2,
      icon: GitBranch,
      type: 'AZIONE 1',
      title: 'Aggiorna stato nel gestionale',
      description: 'Modifica automaticamente lo stato dell\'ordine da "In attesa" a "In lavorazione"',
      color: '#324D7A',
    },
    {
      id: 3,
      icon: FileText,
      type: 'AZIONE 2',
      title: 'Genera documento con DocManager',
      description: 'Crea la conferma d\'ordine compilando automaticamente tutti i campi con i dati dell\'ERP',
      color: '#5B93FF',
    },
    {
      id: 4,
      icon: PenTool,
      type: 'AZIONE 3',
      title: 'Firma digitale',
      description: 'Applica la firma digitale automatica al documento generato',
      color: '#FFB857',
    },
    {
      id: 5,
      icon: Mail,
      type: 'AZIONE 4',
      title: 'Invia email al cliente',
      description: 'Recapita la conferma d\'ordine firmata direttamente all\'indirizzo email del cliente',
      color: '#58CFAE',
    },
    {
      id: 6,
      icon: MessageSquare,
      type: 'AZIONE 5',
      title: 'Notifica Slack al team vendite',
      description: 'Invia un messaggio automatico su Slack per informare il reparto vendite del nuovo ordine',
      color: '#324D7A',
    },
  ]);

  const BlockCard = ({ block, index }: { block: WorkflowBlock; index: number }) => {
    const Icon = block.icon;
    return (
      <div className="flex flex-col items-center" style={{ animationDelay: `${index * 0.1}s` }}>
        <div
          className="w-full max-w-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border-2 animate-fadeInUp"
          style={{
            borderColor: `${block.color}40`,
            backgroundColor: `${block.color}12`,
          }}
        >
          <div className="flex items-start gap-6">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110"
              style={{ backgroundColor: block.color }}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold tracking-wider mb-1" style={{ color: block.color }}>
                {block.type}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#324D7A' }}>
                {block.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed">
                {block.description}
              </p>
            </div>
          </div>
        </div>

        {index < blocks.length - 1 && (
          <div className="flex flex-col items-center py-8">
            <ChevronDown
              className="w-6 h-6 animate-bounce"
              style={{ color: '#324D7A', opacity: 0.4 }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F7FF] to-white py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-[44px] font-bold mb-4" style={{ color: '#324D7A' }}>
            Workflow in azione
          </h1>
          <p className="text-xl text-black/70">
            Ecco come Reglo automatizza completamente il tuo processo, passo dopo passo
          </p>
        </div>

        <div className="flex flex-col items-center">
          {blocks.map((block, index) => (
            <BlockCard key={block.id} block={block} index={index} />
          ))}
        </div>

        <div className="mt-20 p-8 bg-white rounded-2xl shadow-lg border-2 border-[#58CFAE]/30 text-center">
          <p className="text-lg text-black/70">
            <span className="font-bold" style={{ color: '#324D7A' }}>Risultato:</span> Un processo che richiedeva 30 minuti e 5 passaggi manuali
            ora viene completato in <span className="font-bold" style={{ color: '#58CFAE' }}>meno di 2 secondi</span>, senza errori e senza intervento umano.
          </p>
        </div>
      </div>
    </div>
  );
}
