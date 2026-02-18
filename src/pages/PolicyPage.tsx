const updatedAt = '18 febbraio 2026';

export default function PolicyPage() {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Informativa
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Policy
          </h1>
          <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] mt-3">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-7">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">1. Ambito del servizio</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Reglo fornisce strumenti cloud per l&apos;automazione di processi aziendali e gestione documentale.
              L&apos;uso del servizio implica l&apos;accettazione della presente policy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">2. Uso consentito</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              L&apos;utente si impegna a usare la piattaforma in modo conforme alla legge e alle finalita professionali
              dichiarate, evitando abusi, accessi non autorizzati o utilizzi illeciti.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">3. Responsabilita</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Reglo adotta misure tecniche e organizzative adeguate, ma l&apos;utente resta responsabile della correttezza
              dei dati inseriti e della gestione delle proprie credenziali.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">4. Proprieta intellettuale</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Marchi, contenuti, interfacce e software restano di proprieta di Reglo o dei rispettivi titolari.
              E vietata la riproduzione non autorizzata.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">5. Modifiche alla policy</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Possiamo aggiornare questa policy per esigenze legali o operative. Le modifiche vengono pubblicate
              su questa pagina con data di aggiornamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">6. Contatti</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Per informazioni puoi scrivere a info@reglo.it o privacy@reglo.it.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
