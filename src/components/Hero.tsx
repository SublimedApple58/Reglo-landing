import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-[1536px] mx-auto px-6 pt-6 pb-12 lg:pt-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[color:var(--color-ink)] text-white shadow-soft px-6 pt-10 pb-16 sm:px-10 sm:pt-20 sm:pb-[150px]">
          <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-10">
            <div className="space-y-6 max-w-[680px]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.08] text-white">
                La piattaforma operativa per autoscuole che vogliono zero slot vuoti
              </h1>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Reglo coordina allievi, istruttori e veicoli in un unico sistema: disponibilita a slot,
                agenda giornaliera, richieste guida e pagamenti in app.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToDemo}
                  className="interactive-lift px-6 py-3 rounded-full bg-white text-[color:var(--color-ink)] font-semibold text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  Prenota una demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3 text-white/70 text-xs">
                <div className="rounded-full bg-white/10 px-4 py-2">Setup operativo in 7 giorni</div>
                <div className="rounded-full bg-white/10 px-4 py-2">Allievo, istruttore, titolare in un'unica app</div>
                <div className="rounded-full bg-white/10 px-4 py-2">Compatibile iOS e Android</div>
              </div>
            </div>

            <div className="lg:self-end lg:justify-self-end" />
          </div>
          <img
            src="/saas_screen.png"
            alt="Anteprima Reglo Autoscuole"
            className="pointer-events-none absolute bottom-[-4%] right-[-1%] hidden xl:block w-[52%] max-w-[680px] rounded-tl-xl object-cover object-left-top shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
