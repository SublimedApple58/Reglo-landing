import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

export default function DemoPage() {
  useEffect(() => {
    trackBookingCTA('demo_auto_redirect');
    window.location.replace(CAL_BOOKING_URL);
  }, []);

  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-[760px] px-4 sm:px-6">
        <section className="rounded-3xl border border-white/70 bg-white/72 p-6 text-center shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
            Analisi strategica
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
            Reindirizzamento al calendario in corso...
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[color:var(--color-ink-muted)] sm:text-base">
            Se non si apre automaticamente, usa il pulsante qui sotto.
          </p>
          <a
            href={CAL_BOOKING_URL}
            onClick={() => trackBookingCTA('demo_fallback')}
            className="interactive-lift mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:text-base"
          >
            Apri calendario Cal.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </div>
  );
}
