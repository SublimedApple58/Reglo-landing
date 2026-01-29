export default function TrustedBy() {
  const logos = [
    'Linea Mare',
    'Studi Quadro',
    'NordLab',
    'Futura Group',
    'Officine Blu',
    'Centoquattro',
    'Marea Logistica',
    'Selva Tech',
  ];

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Scelto da chi cresce
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Oltre 150 PMI italiane hanno già semplificato i loro processi
          </h2>
        </div>

        <div className="glass-panel rounded-3xl px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="glass-card rounded-2xl px-4 py-4 text-center text-sm font-semibold text-[color:var(--color-ink)]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
