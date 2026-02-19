import { ArrowRight, CheckCircle2, Gift, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import IphoneMockup from '../components/IphoneMockup';
import ReferralPromo from '../components/ReferralPromo';

const steps = [
  'Compili il modulo con i dati base.',
  'Noi contattiamo la scuola e verifichiamo i requisiti.',
  'Se la scuola attiva Reglo, ricevi 2 guide gratuite.',
];

export default function AllieviPage() {
  return (
    <div className="overflow-x-hidden pb-16">
      <section className="px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="glass-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              Promo Allievi
            </span>
            <h1 className="max-w-2xl text-3xl font-semibold leading-[1.08] text-[color:var(--color-ink)] sm:text-5xl">
              Segnala la tua autoscuola e ricevi 2 guide gratuite.
            </h1>
            <p className="max-w-xl text-[15px] text-[color:var(--color-ink-muted)] sm:text-lg">
              Tu segnali la scuola, noi facciamo la verifica. Se parte con Reglo, ti inviamo un voucher
              nominativo da 2 guide.
            </p>
            <div className="grid gap-0 sm:grid-cols-2 sm:gap-3">
              <div className="flex items-start gap-3 border-b border-[color:var(--color-border)]/65 py-3 sm:rounded-2xl sm:border sm:border-b sm:border-white/70 sm:bg-white/82 sm:p-4 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                <div className="flex items-start gap-3">
                  <Gift className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                  <p className="text-sm text-[color:var(--color-ink-muted)]">Premio confermato: voucher 2 guide</p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3 sm:rounded-2xl sm:border sm:border-white/70 sm:bg-white/82 sm:p-4 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                  <p className="text-sm text-[color:var(--color-ink-muted)]">Verifica entro 5 giorni lavorativi</p>
                </div>
              </div>
            </div>
            <a
              href="#referral-form"
              className="interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
            >
              Richiedi adesso la promo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="sm:hidden">
              <IphoneMockup label="Promo referral" variant="requests" />
            </div>
            <div className="hidden items-center gap-4 sm:flex">
              <IphoneMockup label="Promo referral" variant="requests" />
              <IphoneMockup label="Voucher digitale" variant="payments" className="-translate-y-5 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-[1440px] rounded-3xl border border-white/70 bg-white/72 p-5 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
            Come funziona
          </p>
          <div className="mt-4 space-y-0 md:hidden">
            {steps.map((step, index) => (
              <div key={step} className="border-b border-[color:var(--color-border)]/65 py-4 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-xs font-semibold text-[color:var(--color-ink)]">
                    {index + 1}
                  </div>
                  <p className="text-sm text-[color:var(--color-ink-muted)]">{step}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 hidden gap-4 md:grid md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/70 bg-white/82 p-4 shadow-[0_18px_35px_rgba(50,78,122,0.14)] backdrop-blur-[14px]">
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
