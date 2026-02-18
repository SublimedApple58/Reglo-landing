import { CalendarClock, CarFront, CreditCard, Users, Bell, ShieldCheck } from 'lucide-react';

export default function AboutReglo() {
  const pillars = [
    {
      icon: CalendarClock,
      title: 'Agenda unica',
      description: 'Guide, disponibilita e stato lezioni sincronizzati per tutti i ruoli.',
    },
    {
      icon: CarFront,
      title: 'Veicoli sotto controllo',
      description: 'Disponibilita e assegnazioni sempre aggiornate, con override veloci.',
    },
    {
      icon: CreditCard,
      title: 'Pagamenti trasparenti',
      description: 'Transazioni, residui e ricevute in una sezione dedicata e leggibile.',
    },
    {
      icon: Users,
      title: 'Ruoli separati',
      description: 'Esperienza su misura per allievo, istruttore e titolare.',
    },
    {
      icon: Bell,
      title: 'Notifiche operative',
      description: 'Promemoria e proposte guida inviati alle persone corrette.',
    },
    {
      icon: ShieldCheck,
      title: 'Tracciabilita',
      description: 'Storico affidabile su prenotazioni, modifiche e stati.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Reglo Autoscuole
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Una piattaforma costruita per l'operativita quotidiana
          </h2>
          <p className="text-base text-[color:var(--color-ink-muted)] mt-3 max-w-3xl mx-auto">
            Riduci i passaggi manuali e coordina agenda, risorse e pagamenti in modo lineare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="glass-card rounded-2xl p-5">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                  <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">{pillar.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
