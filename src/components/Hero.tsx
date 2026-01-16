import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-10 sm:pb-12 lg:pb-14 w-full">
        <div className="bg-[#324D7A] rounded-3xl px-8 py-12 lg:px-12 lg:py-16 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-[44px] font-semibold leading-tight text-white">
                Automatizza i tuoi processi aziendali senza cambiare gestionale
              </h1>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Reglo si integra con il tuo ERP e trasforma operazioni manuali ripetitive in workflow automatizzati.
                Gestisci documenti, firma digitale e azioni complesse con un semplice editor visuale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToDemo}
                  className="px-8 py-4 rounded-lg text-[#324D7A] font-semibold text-base lg:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#AFE2D4' }}
                >
                  Richiedi una demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => document.getElementById('workflow-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-lg font-semibold text-base lg:text-lg flex items-center justify-center gap-2 border border-white/40 text-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Scopri come funziona
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#F3F7FF] rounded-2xl border border-white/50 shadow-lg p-8">
                <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E71D36]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB857]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#58CFAE]" />
                  </div>
                </div>

                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-[#AFE2D4]/20 to-transparent p-4 rounded-xl border-l-4 border-[#AFE2D4]">
                      <div className="text-sm font-medium" style={{ color: '#324D7A' }}>Trigger</div>
                      <div className="text-base mt-1 text-black/70">Nuovo ordine nel gestionale</div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#AFE2D4] to-[#324D7A]"></div>
                    </div>

                    <div className="bg-gradient-to-r from-[#324D7A]/20 to-transparent p-4 rounded-xl border-l-4 border-[#324D7A]">
                      <div className="text-sm font-medium" style={{ color: '#324D7A' }}>Azione</div>
                      <div className="text-base mt-1 text-black/70">Genera documento con DocManager</div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#324D7A] to-[#58CFAE]"></div>
                    </div>

                    <div className="bg-gradient-to-r from-[#58CFAE]/20 to-transparent p-4 rounded-xl border-l-4 border-[#58CFAE]">
                      <div className="text-sm font-medium" style={{ color: '#324D7A' }}>Azione</div>
                      <div className="text-base mt-1 text-black/70">Invia email al cliente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
