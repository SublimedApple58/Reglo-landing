import {
  Bell,
  CalendarClock,
  CarFront,
  CheckCircle2,
  CreditCard,
  Gauge,
  MessageCircle,
  Users,
  UserRound,
} from 'lucide-react';

export default function Platform() {
  const features = [
    {
      title: 'Agenda giornaliera istruttori',
      description: 'Ogni istruttore vede solo le sue guide e aggiorna stato in tempo reale.',
      icon: CalendarClock,
    },
    {
      title: 'Disponibilita a slot da 30 minuti',
      description: 'Slot singoli, override rapidi e gestione capillare della settimana.',
      icon: Gauge,
    },
    {
      title: 'Gestione veicoli centralizzata',
      description: 'Veicoli, disponibilita e assegnazioni in un unico pannello operativo.',
      icon: CarFront,
    },
    {
      title: 'Richieste guida allievi',
      description: 'L\'allievo chiede una guida e il sistema propone slot coerenti.',
      icon: UserRound,
    },
    {
      title: 'Riempimento slot in tempo reale',
      description: 'Quando una guida salta, parte un\'offerta rapida ai candidati in lista.',
      icon: MessageCircle,
    },
    {
      title: 'Pagamenti e storico',
      description: 'Storico transazioni, stato addebiti e documenti direttamente in app.',
      icon: CreditCard,
    },
    {
      title: 'Notifiche push operative',
      description: 'Promemoria e proposte guida consegnate ai ruoli corretti.',
      icon: Bell,
    },
    {
      title: 'Controllo ruoli',
      description: 'Esperienze separate per allievo, istruttore e titolare.',
      icon: Users,
    },
    {
      title: 'Audit e tracciabilita',
      description: 'Ogni modifica su guide, pagamenti e disponibilita resta storicizzata.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Piattaforma
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Tutta la tua autoscuola in una sola interfaccia
          </h2>
          <p className="text-base text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Reglo elimina passaggi manuali in agenda e prenotazioni, con un flusso operativo unico
            dalla richiesta guida al pagamento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">Obiettivo: zero slot vuoti</span>
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">Setup guidato dal team Reglo</span>
          <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">Dati sincronizzati in cloud</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="glass-card interactive-lift rounded-2xl px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/60 bg-white/80">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">{feature.title}</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)] mt-2">{feature.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
