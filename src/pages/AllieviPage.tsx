'use client';
import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, WarningCircle, ClockCountdown, GiftTop,
  CheckCircle, ArrowRight,
} from '@phosphor-icons/react';
import Footer from '../components/Footer';
import MagneticButton from '../components/ui/MagneticButton';
import Reveal from '../components/ui/Reveal';
import { submitReferral } from '../lib/contact';
import { SPRING } from '../motion';

const STEPS = [
  { num: '01', icon: WarningCircle,  title: 'Segnali',     desc: 'Ci dici quale autoscuola gestisce male le guide.', tone: 'rose' },
  { num: '02', icon: ClockCountdown, title: 'Verifichiamo', desc: 'Contattiamo l\'autoscuola entro 3 giorni.',       tone: 'amber' },
  { num: '03', icon: GiftTop,        title: 'Voucher',     desc: 'Se firma con noi, ricevi 2 guide gratuite.',     tone: 'rose' },
];

export default function AllieviPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === 'loading') return;
    setState('loading');
    const formEl = e.currentTarget;
    const f = new FormData(formEl);
    try {
      await submitReferral({
        studentName:    String(f.get('studentName') || ''),
        phone:          String(f.get('phone') || ''),
        referredSchool: String(f.get('referredSchool') || ''),
        city:           String(f.get('city') || ''),
        role:           'allievo',
        consent:        true,
        source:         'home',
      });
      setState('success');
      formEl.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Si è verificato un errore');
      setState('error');
    }
  }

  return (
    <main className="relative min-h-[100dvh] bg-paper">
      <div className="grain" aria-hidden />

      {/* HERO — asymmetric */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={SPRING.default}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 mb-7"
            >
              <GiftTop size={12} weight="fill" />
              2 guide gratis per te
            </motion.div>
            <h1 className="h-display text-[44px] sm:text-[68px] lg:text-[88px] text-ink-950">
              Segnala la tua{' '}
              <span className="italic font-light text-ink-500">autoscuola</span>.<br />
              Ricevi <span className="text-rose-500">2 guide gratis.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-ink-500 leading-relaxed">
              Se la tua autoscuola usa ancora WhatsApp e quaderni, dicci come si chiama. Noi la contattiamo, e tu vinci.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE — vertical, animated dotted line */}
      <section className="py-24 sm:py-32 bg-ink-50/50">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 max-w-[560px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-3">Come funziona</p>
            <h2 className="h-section text-3xl sm:text-4xl lg:text-5xl text-ink-950">
              Tre passi.<br />
              <span className="italic font-light text-ink-500">Niente fregature.</span>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical dotted line (desktop) */}
            <div className="hidden md:block absolute left-9 top-12 bottom-12 w-px border-l border-dashed border-ink-300" aria-hidden />

            <div className="space-y-10">
              {STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-2 flex items-center gap-4">
                      <span className={`relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl ${
                        s.tone === 'rose' ? 'bg-rose-500 text-paper' : 'bg-amber-400 text-ink-950'
                      } shadow-diffusion`}>
                        <s.icon size={28} weight="duotone" />
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-400 mb-2">Step {s.num}</p>
                      <h3 className="text-2xl font-bold text-ink-950">{s.title}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-lg text-ink-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM — asymmetric, with animated states */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-paper py-24 sm:py-32">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-rose-500/15 blur-[120px]" aria-hidden />

        <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-amber-400 mb-4">Modulo segnalazione</p>
            <h2 className="h-section text-4xl sm:text-5xl text-paper">
              Compila i campi.<br />
              <span className="italic font-light text-paper/50">Ti contattiamo noi.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-paper/80">
              <li className="flex items-center gap-3"><CheckCircle size={18} weight="fill" className="text-amber-400" /> Risposta entro 48h</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} weight="fill" className="text-amber-400" /> Nessuna spam</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} weight="fill" className="text-amber-400" /> Voucher consegnato a contratto</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={SPRING.snappy}
                  className="rounded-3xl bg-paper text-ink-950 p-10 text-center"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5">
                    <CheckCircle size={28} weight="fill" />
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Segnalazione ricevuta</h3>
                  <p className="text-ink-500">Ti contattiamo entro 48 ore.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={SPRING.default}
                  className="rounded-3xl bg-paper p-7 sm:p-9"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field name="studentName"    label="Il tuo nome e cognome" placeholder="Es. Marco Rossi" />
                    <Field name="phone"          label="Il tuo telefono"        placeholder="+39 ..." />
                    <Field name="referredSchool" label="Autoscuola da segnalare" placeholder="Nome dell'autoscuola" />
                    <Field name="city"           label="Città"                  placeholder="Città dell'autoscuola" />
                  </div>
                  {state === 'error' && (
                    <p className="mt-4 text-sm text-rose-600 font-medium">{errorMsg}</p>
                  )}
                  <div className="mt-6 flex items-center justify-end">
                    <MagneticButton
                      as="button"
                      onClick={() => undefined /* form's submit triggers */}
                      className={`group inline-flex items-center gap-3 rounded-full pl-6 pr-5 py-3.5 text-[14px] font-semibold transition-colors ${
                        state === 'loading'
                          ? 'bg-ink-200 text-ink-500'
                          : 'bg-ink-950 text-paper hover:bg-rose-500'
                      }`}
                    >
                      {state === 'loading' ? 'Invio…' : 'Invia segnalazione'}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper/15 group-hover:rotate-45 transition-transform">
                        <ArrowRight size={14} weight="bold" />
                      </span>
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ name, label, placeholder }: { name: string; label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">{label}</label>
      <input
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink-200 bg-paper px-4 py-3 text-[15px] text-ink-950 placeholder-ink-400 outline-none transition-colors focus:border-rose-500"
      />
    </div>
  );
}

// shut up unused
void ArrowUpRight;
