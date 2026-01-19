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
        name: 'Core',
        price: 159,
        description: 'Per iniziare con l\'automazione e volumi controllati',
        features: [
          'Doc manager + AI',
          'Workflow limitato a utilizzo doc manager',
          <span className="font-semibold">300 documenti compilati / mese</span>,
          <span className="font-semibold">30 workflow eseguiti / mese</span>,
        ],
        highlighted: false,
        delay: 100,
      },
      {
        name: 'Growth',
        price: 269,
        description: 'Per PMI in crescita con workflow piu completi',
        features: [
          'Doc manager + AI',
          'Workflow engine senza limitazioni',
          <span className="font-semibold">500 documenti compilati / mese</span>,
          <span className="font-semibold">80 workflow eseguiti / mese</span>,
        ],
        highlighted: true,
        delay: 200,
      },
      {
        name: 'Scale',
        price: 429,
        description: 'Per team con volumi elevati e automazioni avanzate',
        features: [
          'Doc manager + AI',
          'Workflow engine senza limitazioni + AI',
          'Reglo AI',
          <span className="font-semibold">800 documenti compilati / mese</span>,
          <span className="font-semibold">100 workflow eseguiti / mese</span>,
        ],
        highlighted: false,
        delay: 300,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--color-sand)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div
          className="absolute -top-20 right-[-8%] h-72 w-72 rounded-full bg-[color:var(--color-accent-soft)] blur-3xl opacity-70"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-12%] left-[-10%] h-80 w-80 rounded-full bg-[color:var(--color-sky)] blur-3xl opacity-80"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Prezzi
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
              Piani trasparenti e flessibili
            </h1>
            <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
              Scegli il piano perfetto per la tua PMI. Tutti i piani includono una prova gratuita di 14 giorni.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`animate-fadeInUp animation-delay-${plan.delay} rounded-3xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-[color:var(--color-ink)] bg-white shadow-soft lg:scale-[1.02]'
                    : 'border-[color:var(--color-border)] bg-white/90 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="p-8 lg:p-9">
                  {plan.highlighted && (
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4 bg-[color:var(--color-ink)]">
                      Più popolare
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
                    className="w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg mb-7"
                    style={{
                      backgroundColor: plan.highlighted ? 'var(--color-ink)' : 'var(--color-accent-soft)',
                      color: plan.highlighted ? 'white' : 'var(--color-ink)',
                    }}
                  >
                    Inizia prova gratuita
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
            <div className="rounded-3xl p-8 lg:p-10 border border-[color:var(--color-border)] bg-white/90 shadow-soft max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[color:var(--color-ink)]">
                  Extra
                </h2>
                <p className="text-[color:var(--color-ink-muted)]">
                  Aggiunte opzionali per aumentare i volumi quando ti serve.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[color:var(--color-sand)] rounded-2xl p-6 text-center border border-[color:var(--color-border)]">
                  <div className="text-3xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    49€
                  </div>
                  <div className="text-[color:var(--color-ink-muted)] font-semibold">+150 documenti</div>
                </div>
                <div className="bg-[color:var(--color-sand)] rounded-2xl p-6 text-center border border-[color:var(--color-border)]">
                  <div className="text-3xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    49€
                  </div>
                  <div className="text-[color:var(--color-ink-muted)] font-semibold">+30 workflow aggiuntivi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 lg:p-12 border border-[color:var(--color-border)] bg-white/90 shadow-soft">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[color:var(--color-ink)]">
                Domande frequenti sui prezzi
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Posso cambiare piano in qualsiasi momento?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    Sì, puoi effettuare l'upgrade o il downgrade del tuo piano in qualsiasi momento. Gli addebiti vengono regolati proporzionalmente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Che supporto ricevo con ogni piano?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    Core: email. Growth: chat e email prioritario. Scale: account manager dedicato e supporto telefonico prioritario.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[color:var(--color-ink)]">
                    Avete sconti per aziende grandi o long-term?
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)]">
                    Certo! Contattaci per discutere soluzioni enterprise personalizzate e sconti volume dedicati.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[color:var(--color-ink-muted)] mb-6">
              Non sei sicuro quale piano fa per te?
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-lg shadow-soft hover:shadow-lg transition-all bg-[color:var(--color-ink)]"
            >
              Parla con il nostro team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
