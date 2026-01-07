import { Clock, Target, Shield, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Riduci il lavoro manuale',
      color: '#58CFAE',
      points: [
        'Elimina operazioni ripetitive quotidiane',
        'Libera tempo per attività strategiche',
        'Riduci i tempi di elaborazione fino all\'80%',
        'Automatizza processi che richiedono ore di lavoro',
      ],
    },
    {
      icon: Target,
      title: 'Elimina gli errori ripetitivi',
      color: '#5B93FF',
      points: [
        'Zero errori di trascrizione manuale',
        'Dati sempre aggiornati e coerenti',
        'Tracciabilità completa di ogni operazione',
        'Conformità garantita su ogni documento',
      ],
    },
    {
      icon: Shield,
      title: 'Documenti sempre aggiornati e tracciabili',
      color: '#324D7A',
      points: [
        'Versioning automatico di tutti i documenti',
        'Storico completo delle modifiche',
        'Firma digitale integrata e certificata',
        'Archiviazione sicura in cloud',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Cresci senza aumentare i costi operativi',
      color: '#FFB857',
      points: [
        'Scala il business senza assumere nuovo personale',
        'ROI positivo già nei primi mesi',
        'Gestisci più ordini con lo stesso team',
        'Investi il risparmio in crescita strategica',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F3F7FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#324D7A' }}>
            I vantaggi per le PMI italiane
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Reglo è progettato per le esigenze concrete delle piccole e medie imprese che vogliono crescere
            senza complicazioni tecnologiche
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: benefit.color }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6" style={{ color: '#324D7A' }}>
                  {benefit.title}
                </h3>

                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: benefit.color }}
                        ></div>
                      </div>
                      <span className="text-black/70 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: '#AFE2D4' }}>
              <span className="font-semibold" style={{ color: '#324D7A' }}>Caso reale</span>
            </div>
            <p className="text-xl lg:text-2xl text-black/80 leading-relaxed">
              "<span className="font-bold" style={{ color: '#324D7A' }}>Con Reglo abbiamo automatizzato la gestione degli ordini</span>,
              riducendo i tempi da 45 minuti a 2 minuti per ordine. Il team commerciale ora si concentra sulle vendite
              invece di compilare documenti."
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="font-semibold" style={{ color: '#324D7A' }}>Marco Rossi</div>
              <div className="text-black/60">Responsabile Operations, PMI manifatturiera 50 dipendenti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
