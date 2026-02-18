import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: ReactNode[];
  highlighted: boolean;
  delay: number;
}

export default function PricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    setPlans([
      {
        name: 'Start',
        price: 149,
        description: 'Per autoscuole che vogliono una base operativa solida',
        features: [
          'Ruoli allievo, istruttore e titolare',
          'Agenda e disponibilita a slot da 30 min',
          <span className="font-semibold">Fino a 150 allievi attivi</span>,
          <span className="font-semibold">1 sede inclusa</span>,
        ],
        highlighted: false,
        delay: 100,
      },
      {
        name: 'Pro',
        price: 249,
        description: 'Per autoscuole con volume medio e flusso continuo di guide',
        features: [
          'Tutto di Start',
          'Gestione veicoli avanzata e override slot',
          <span className="font-semibold">Fino a 400 allievi attivi</span>,
          <span className="font-semibold">2 sedi incluse</span>,
        ],
        highlighted: true,
        delay: 200,
      },
      {
        name: 'Multi-sede',
        price: 399,
        description: 'Per reti di autoscuole con esigenze di coordinamento elevato',
        features: [
          'Tutto di Pro',
          'Supporto onboarding multi-sede',
          <span className="font-semibold">Fino a 800 allievi attivi</span>,
          <span className="font-semibold">Sedi e team estesi</span>,
        ],
        highlighted: false,
        delay: 300,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div
          className="absolute -top-20 right-[-8%] h-72 w-72 rounded-full bg-[color:var(--color-accent-soft)] blur-3xl opacity-70 animate-float-slow"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-12%] left-[-10%] h-80 w-80 rounded-full bg-[color:var(--color-sky)] blur-3xl opacity-80 animate-float-slower"
          aria-hidden="true"
        />
        <div className="relative max-w-[1536px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Prezzi
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
              Piani chiari per autoscuole
            </h1>
            <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
              Scegli il piano in base a volume allievi, numero sedi e livello di supporto richiesto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`animate-fadeInUp animation-delay-${plan.delay} rounded-3xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-[color:var(--color-ink)] bg-white/85 shadow-soft lg:scale-[1.02]'
                    : 'border-white/60 bg-white/70 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="p-8 lg:p-9">
                  {plan.highlighted && (
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4 bg-[color:var(--color-ink)]">
                      Piu scelto
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    {plan.name}
                  </h3>

                  <p className="text-[color:var(--color-ink-muted)] mb-6 h-12 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-7">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold text-[color:var(--color-ink)]">
                        €{plan.price}
                      </span>
                      <span className="text-[color:var(--color-ink-muted)]">/mese</span>
                    </div>
                  </div>

                  <Link
                    to="/demo"
                    className="interactive-lift w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 mb-7"
                    style={{
                      backgroundColor: plan.highlighted ? 'var(--color-ink)' : 'var(--color-accent-soft)',
                      color: plan.highlighted ? 'white' : 'var(--color-ink)',
                    }}
                  >
                    Prenota demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                          <Check className="w-4 h-4 text-[color:var(--color-ink)]" />
                        </div>
                        <span className="text-[color:var(--color-ink-muted)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="glass-panel rounded-3xl p-8 lg:p-10 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[color:var(--color-ink)]">
                  Extra
                </h2>
                <p className="text-[color:var(--color-ink-muted)]">
                  Espandi il piano quando crescono iscrizioni o sedi.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    39€
                  </div>
                  <div className="text-[color:var(--color-ink-muted)] font-semibold">+100 allievi attivi</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    69€
                  </div>
                  <div className="text-[color:var(--color-ink-muted)] font-semibold">+1 sede aggiuntiva</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[color:var(--color-ink)]">
                Domande frequenti
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Posso cambiare piano in qualsiasi momento?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    Si, puoi fare upgrade o downgrade in qualsiasi momento. L'addebito viene adeguato in modo proporzionale.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Quanto dura l'attivazione?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    In media 7-14 giorni, in base al numero di sedi e al livello di personalizzazione richiesto.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Avete piani custom per grandi autoscuole?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    Si, per gruppi multi-sede definiamo pacchetti dedicati con onboarding e supporto operativo esteso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[color:var(--color-ink-muted)] mb-6">
              Vuoi capire il piano giusto per la tua struttura?
            </p>
            <Link
              to="/demo"
              className="interactive-lift inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-lg shadow-soft bg-[color:var(--color-ink)]"
            >
              Parla con il team Reglo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
