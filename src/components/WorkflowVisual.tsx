import { Play, GitBranch, FileText, PenTool, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function WorkflowVisual() {
  return (
    <section id="workflow-section" className="py-24 bg-gradient-to-br from-[#F3F7FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Workflow in azione
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Ecco un esempio di come Reglo automatizza un processo completo:
            dalla ricezione di un ordine alla notifica del team
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#AFE2D4' }}>
                  <Play className="w-8 h-8" style={{ color: '#324D7A' }} />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#58CFAE' }}>TRIGGER</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Nuovo ordine nel gestionale</div>
                  <div className="text-black/60">Il workflow parte automaticamente quando viene registrato un nuovo ordine nell'ERP</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#AFE2D4] to-[#6057A0] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#6057A0' }}>
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#6057A0' }}>AZIONE 1</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Aggiorna stato nel gestionale</div>
                  <div className="text-black/60">Modifica automaticamente lo stato dell'ordine da "In attesa" a "In lavorazione"</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#6057A0] to-[#5B93FF] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#5B93FF' }}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#5B93FF' }}>AZIONE 2</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Genera documento con DocManager</div>
                  <div className="text-black/60">Crea la conferma d'ordine compilando automaticamente tutti i campi con i dati dell'ERP</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#5B93FF] to-[#FFB857] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#FFB857' }}>
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#FFB857' }}>AZIONE 3</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Firma digitale</div>
                  <div className="text-black/60">Applica la firma digitale automatica al documento generato</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#FFB857] to-[#58CFAE] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#58CFAE' }}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#58CFAE' }}>AZIONE 4</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Invia email al cliente</div>
                  <div className="text-black/60">Recapita la conferma d'ordine firmata direttamente all'indirizzo email del cliente</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#58CFAE] to-[#6057A0] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#6057A0' }}>
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-semibold mb-1" style={{ color: '#6057A0' }}>AZIONE 5</div>
                  <div className="text-xl font-bold mb-1" style={{ color: '#324D7A' }}>Notifica Slack al team vendite</div>
                  <div className="text-black/60">Invia un messaggio automatico su Slack per informare il reparto vendite del nuovo ordine</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#6057A0] to-[#58CFAE] rounded-full"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#58CFAE' }}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 bg-gradient-to-r from-[#58CFAE]/10 to-transparent rounded-2xl p-6 border-2 border-[#58CFAE]">
                  <div className="text-xl font-bold" style={{ color: '#324D7A' }}>Workflow completato</div>
                  <div className="text-black/60 mt-1">Tutto è stato automatizzato. Zero intervento manuale.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <p className="text-lg text-black/70">
                <span className="font-bold" style={{ color: '#324D7A' }}>Risultato:</span> Un processo che richiedeva 30 minuti e 5 passaggi manuali
                ora viene completato in <span className="font-bold" style={{ color: '#58CFAE' }}>meno di 2 secondi</span>, senza errori e senza intervento umano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
