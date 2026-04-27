'use client';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight } from '@phosphor-icons/react';
import TiltCard from '../../components/ui/TiltCard';
import Reveal from '../../components/ui/Reveal';

const STEPS = [
  {
    num: '01',
    label: 'Gestione guide',
    title: 'Una sola schermata. Tutto sincronizzato.',
    bullets: [
      'Gli allievi vedono i tuoi slot liberi e prenotano in autonomia',
      'Recupero automatico degli slot saltati',
      'Pagamenti collegati a ogni guida',
    ],
    video: '/InstructorTutorial.mp4',
    bg: 'bg-paper',
  },
  {
    num: '02',
    label: 'Allievi in app',
    title: 'L\'allievo prenota, paga e ricorda. Da solo.',
    bullets: [
      'Calendario personale dell\'allievo',
      'Promemoria automatici prima delle guide',
      'Storico pagamenti e residui sempre visibili',
    ],
    video: '/StudentTutorial.mp4',
    bg: 'bg-ink-50',
  },
];

export default function StickyShowcase() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        <Reveal className="max-w-[680px] mb-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-4">
            Come funziona
          </p>
          <h2 className="h-section text-4xl sm:text-5xl lg:text-[56px] text-ink-950">
            Due viste, una piattaforma.<br />
            <span className="italic font-light text-ink-500">Zero confusione.</span>
          </h2>
        </Reveal>

        {/* Sticky scroll stack: each step pinned with offset, video tilts on hover */}
        <div className="space-y-24 sm:space-y-32">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Video tile (sticky on desktop) */}
              <div className="lg:col-span-7 lg:sticky lg:top-28">
                <TiltCard className="rounded-[28px] overflow-hidden shadow-diffusion-lg ring-1 ring-ink-200/60 bg-ink-950">
                  <video
                    className="block w-full aspect-video object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    src={s.video}
                  />
                </TiltCard>
              </div>

              {/* Copy column */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[64px] font-bold text-ink-100 leading-none tabular-nums">{s.num}</span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-2">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-[40px] font-bold text-ink-950 leading-[1.05] mb-6">
                    {s.title}
                  </h3>
                  <ul className="space-y-3">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                          <CheckCircle size={16} weight="fill" />
                        </span>
                        <span className="text-ink-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <Reveal className="mt-24 text-center">
          <a
            href="/piattaforma"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink-700 hover:text-ink-950"
          >
            <span className="border-b border-ink-300 group-hover:border-ink-950 transition-colors pb-0.5">
              Esplora tutte le funzionalità
            </span>
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
