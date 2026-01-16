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
    <div className="min-h-screen bg-gradient-to-br from-[#F3F7FF] to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[44px] font-bold mb-4" style={{ color: '#324D7A' }}>
            Piani trasparenti e flessibili
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Scegli il piano perfetto per la tua PMI. Tutti i piani includono una prova gratuita di 14 giorni.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`animate-fadeInUp animation-delay-${plan.delay} rounded-3xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlighted
                  ? 'lg:scale-105 shadow-2xl'
                  : 'shadow-xl hover:shadow-2xl'
              } ${
                plan.highlighted
                  ? 'bg-white'
                  : 'bg-white'
              }`}
            >
              <div className="p-8 lg:p-10">
                {plan.highlighted && (
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-4"
                    style={{ backgroundColor: '#324D7A' }}
                  >
                    Più popolare
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-2" style={{ color: '#324D7A' }}>
                  {plan.name}
                </h3>

                <p className="text-black/60 mb-6 h-12 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[44px] font-bold" style={{ color: '#324D7A' }}>
                      €{plan.price}
                    </span>
                    <span className="text-black/60">/mese</span>
                  </div>
                </div>

                <Link
                  to="/demo"
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg mb-8 ${
                    plan.highlighted
                      ? 'text-white'
                      : 'text-white'
                  }`}
                  style={{
                    backgroundColor: plan.highlighted ? '#324D7A' : '#AFE2D4',
                    color: plan.highlighted ? 'white' : '#324D7A',
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
                        style={{ backgroundColor: '#58CFAE' }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-black/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#324D7A' }}>
                Extra
              </h2>
              <p className="text-black/60">
                Aggiunte opzionali per aumentare i volumi quando ti serve.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#AFE2D4]/20 to-white rounded-2xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold mb-2" style={{ color: '#324D7A' }}>
                  49€
                </div>
                <div className="text-black/70 font-semibold">+150 documenti</div>
              </div>
              <div className="bg-gradient-to-br from-[#AFE2D4]/20 to-white rounded-2xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold mb-2" style={{ color: '#324D7A' }}>
                  49€
                </div>
                <div className="text-black/70 font-semibold">+30 workflow aggiuntivi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center" style={{ color: '#324D7A' }}>
              Domande frequenti sui prezzi
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#324D7A' }}>
                  Posso cambiare piano in qualsiasi momento?
                </h3>
                <p className="text-black/70">
                  Sì, puoi effettuare l'upgrade o il downgrade del tuo piano in qualsiasi momento. Gli addebiti vengono regolati proporzionalmente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#324D7A' }}>
                  Che supporto ricevo con ogni piano?
                </h3>
                <p className="text-black/70">
                  Core: email. Growth: chat e email prioritario. Scale: account manager dedicato e supporto telefonico prioritario.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#324D7A' }}>
                  Avete sconti per aziende grandi o long-term?
                </h3>
                <p className="text-black/70">
                  Certo! Contattaci per discutere soluzioni enterprise personalizzate e sconti volume dedicati.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-black/70 mb-6">
            Non sei sicuro quale piano fa per te?
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            style={{ backgroundColor: '#324D7A' }}
          >
            Parla con il nostro team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
