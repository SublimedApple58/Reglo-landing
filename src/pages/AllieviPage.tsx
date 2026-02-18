import { ArrowRight, CheckCircle2, Gift, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import IphoneMockup from '../components/IphoneMockup';
import ReferralPromo from '../components/ReferralPromo';

const steps = [
  'Compila il referral con i dati della tua autoscuola.',
  'Il team Reglo contatta la scuola e gestisce la verifica.',
  'Quando la scuola attiva Reglo, ricevi il voucher 2 guide.',
];

export default function AllieviPage() {
  return (
    <div className="pb-16">
      <section className="px-6 pb-12 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="glass-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              Promo Allievi
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] text-[color:var(--color-ink)] sm:text-5xl">
              Porta la tua autoscuola in Reglo e ricevi 2 guide gratuite.
            </h1>
            <p className="max-w-xl text-base text-[color:var(--color-ink-muted)] sm:text-lg">
              Se la scuola che segnali attiva Reglo, ti inviamo un voucher digitale nominativo da 2 guide.
              Processo trasparente, senza passaggi ambigui.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Gift className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                  <p className="text-sm text-[color:var(--color-ink-muted)]">Premio: voucher 2 guide</p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                  <p className="text-sm text-[color:var(--color-ink-muted)]">Verifica entro 5 giorni lavorativi</p>
                </div>
              </div>
            </div>
            <a
              href="#referral-form"
              className="interactive-lift inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:text-base"
            >
              Richiedi promo allievi
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <IphoneMockup label="Promo referral" variant="requests" />
            <IphoneMockup label="Voucher digitale" variant="payments" className="-translate-y-5 hidden sm:block" />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1440px] glass-panel rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
            Come funziona
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="glass-card rounded-2xl p-4">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-xs font-semibold text-[color:var(--color-ink)]">
                  {index + 1}
                </div>
                <p className="text-sm text-[color:var(--color-ink-muted)]">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-[color:var(--color-ink-muted)]">
            Promo valida solo per autoscuole non ancora attive su Reglo. Voucher nominativo e non cedibile.
          </p>
        </div>
      </section>

      <ReferralPromo />

      <section className="px-6">
        <div className="mx-auto max-w-[1440px] pt-6 text-center">
          <p className="text-sm text-[color:var(--color-ink-muted)]">
            Sei un autoscuola e vuoi vedere subito la piattaforma?
          </p>
          <Link to="/demo" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] hover:underline">
            Prenota una demo
            <CheckCircle2 className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
