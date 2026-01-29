export default function Press() {
  const outlets = [
    'Business Lab',
    'Innovazione Quotidiana',
    'PMI Focus',
    'Tech Mediterraneo',
    'Operazioni Oggi',
  ];

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Parlano di noi
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Reglo al centro dell'innovazione operativa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {outlets.map((outlet) => (
            <div
              key={outlet}
              className="glass-card rounded-2xl px-4 py-5 text-center text-sm font-semibold text-[color:var(--color-ink)]"
            >
              {outlet}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
