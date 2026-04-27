import { type ReactNode } from 'react';
import Footer from './Footer';

type Section = { title: string; body: ReactNode };

type Props = {
  kicker: string;
  title: string;
  updatedAt: string;
  sections: Section[];
};

export default function LegalLayout({ kicker, title, updatedAt, sections }: Props) {
  return (
    <main className="relative min-h-[100dvh] bg-paper">
      <div className="grain" aria-hidden />

      <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[120px]" aria-hidden />

        <div className="relative max-w-[860px] mx-auto px-5 sm:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-4">
            {kicker}
          </p>
          <h1 className="h-display text-5xl sm:text-6xl text-ink-950">{title}</h1>
          <p className="mt-4 text-sm text-ink-500 font-mono">Ultimo aggiornamento: {updatedAt}</p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <article key={i} className="border-t border-ink-100 pt-8">
                <h2 className="text-xl font-bold text-ink-950 mb-3 flex items-baseline gap-3">
                  <span className="text-ink-300 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <div className="text-ink-600 leading-relaxed">{s.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
