import { FileText, Workflow, Zap, Lock, Pencil, Database } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Cos'è Reglo
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Una piattaforma cloud che si connette al tuo gestionale e automatizza i processi interni
            attraverso due strumenti potenti e integrati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-[#AFE2D4]/10 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: '#AFE2D4' }}>
              <FileText className="w-8 h-8" style={{ color: '#324D7A' }} />
            </div>

            <h2 className="text-3xl font-bold mb-4" style={{ color: '#324D7A' }}>
              DocManager
            </h2>

            <p className="text-lg text-black/70 mb-6">
              Il tuo sistema avanzato di gestione documentale integrato con l'ERP
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#58CFAE' }}>
                  <Pencil className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black/80">Editor PDF integrato con form builder</div>
                  <div className="text-sm text-black/60">Crea e modifica documenti senza uscire dalla piattaforma</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#5B93FF' }}>
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black/80">Auto-compilazione assistita da AI</div>
                  <div className="text-sm text-black/60">L'intelligenza artificiale compila i documenti automaticamente</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#324D7A' }}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black/80">Connessione automatica con anagrafiche ERP</div>
                  <div className="text-sm text-black/60">I dati del gestionale popolano i documenti in tempo reale</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#58CFAE' }}>
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black/80">Firma digitale integrata nei workflow</div>
                  <div className="text-sm text-black/60">Genera, compila e firma documenti automaticamente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#324D7A]/10 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: '#324D7A' }}>
              <Workflow className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold mb-4" style={{ color: '#324D7A' }}>
              Workflow Builder
            </h2>

            <p className="text-lg text-black/70 mb-6">
              Il cuore di Reglo: crea automazioni con un editor visuale a blocchi
            </p>

            <div className="space-y-6">
              <div>
                <div className="font-semibold text-lg text-black/80 mb-3">Trigger flessibili</div>
                <div className="space-y-2">
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Eventi dal tuo gestionale aziendale
                  </div>
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Attivazione manuale da utenti
                  </div>
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Schedulazione temporale automatica
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold text-lg text-black/80 mb-3">Azioni potenti</div>
                <div className="space-y-2">
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Crea/aggiorna record nel gestionale
                  </div>
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Genera e compila documenti con DocManager
                  </div>
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Invia email, notifiche Slack, e altro
                  </div>
                  <div className="bg-white/50 px-4 py-2 rounded-lg text-black/70 shadow-sm">
                    Integra servizi esterni via API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
