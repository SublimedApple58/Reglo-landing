const updatedAt = '18 febbraio 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Informativa
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] mt-3">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-7">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">1. Titolare del trattamento</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Reglo S.r.l. e il titolare del trattamento dei dati personali raccolti tramite questo sito.
              Per richieste privacy puoi scrivere a privacy@reglo.it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">2. Dati raccolti</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Possiamo raccogliere dati identificativi e di contatto (nome, email, azienda, telefono),
              dati relativi alla richiesta inviata tramite form e dati tecnici di navigazione.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">3. Finalita del trattamento</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Trattiamo i dati per rispondere alle richieste di demo o contatto, gestire comunicazioni operative,
              migliorare il servizio e adempiere agli obblighi di legge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">4. Base giuridica</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              La base giuridica e l&apos;esecuzione di misure precontrattuali richieste dall&apos;utente, il consenso
              quando necessario e l&apos;adempimento di obblighi legali.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">5. Conservazione</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Conserviamo i dati per il tempo strettamente necessario alle finalita indicate e nel rispetto
              dei termini previsti dalla normativa applicabile.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">6. Diritti dell&apos;interessato</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Puoi richiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilita dei dati,
              oltre a proporre reclamo all&apos;autorita garante competente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--color-ink)]">7. Contatti</h2>
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)]">
              Per ogni richiesta sulla privacy puoi contattarci via email a privacy@reglo.it.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
