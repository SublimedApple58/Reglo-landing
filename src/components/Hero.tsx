import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#D7FFF4] to-[#F3F7FF]">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#324D7A' }}>
              Automatizza i tuoi processi aziendali senza cambiare gestionale
            </h1>
            <p className="text-xl lg:text-2xl text-black/70 leading-relaxed">
              Reglo si integra con il tuo ERP e trasforma operazioni manuali ripetitive in workflow automatizzati.
              Gestisci documenti, firma digitale e azioni complesse con un semplice editor visuale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ backgroundColor: '#324D7A' }}
              >
                Richiedi una demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('workflow-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ color: '#324D7A' }}
              >
                <Play className="w-5 h-5" />
                Scopri come funziona
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#E71D36]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFB857]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#58CFAE]"></div>
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

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#AFE2D4]/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#6057A0]/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
