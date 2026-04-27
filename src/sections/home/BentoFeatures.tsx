'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, memo } from 'react';
import {
  ArrowsClockwise, ChatTeardropDots, CreditCard, CalendarBlank,
  Lightning, Bell, Receipt, ChartLineUp,
} from '@phosphor-icons/react';
import { SPRING } from '../../motion';
import Reveal from '../../components/ui/Reveal';

/* ─── ARCHETYPE 1: Intelligent List (auto-shuffles) ───────────────────── */
const SLOTS_INITIAL = [
  { id: 1, name: 'Marco R.',    time: '14:30', state: 'live'    },
  { id: 2, name: 'Giulia C.',   time: '15:30', state: 'queue'   },
  { id: 3, name: 'Andrea M.',   time: '16:30', state: 'queue'   },
  { id: 4, name: 'Sara P.',     time: '17:30', state: 'pending' },
];
const IntelligentList = memo(function IntelligentList() {
  const [slots, setSlots] = useState(SLOTS_INITIAL);
  useEffect(() => {
    const id = setInterval(() => {
      setSlots((prev) => {
        const [first, ...rest] = prev;
        return [...rest, { ...first, time: shiftTime(first.time, 60) }];
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="space-y-2">
      <AnimatePresence>
        {slots.map((s, i) => (
          <motion.div
            layout
            key={s.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={SPRING.default}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
              i === 0
                ? 'border-rose-200 bg-rose-50'
                : 'border-ink-100 bg-paper'
            }`}
          >
            <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-semibold ${
              i === 0 ? 'bg-rose-500 text-paper' : 'bg-ink-100 text-ink-600'
            }`}>
              {s.name.charAt(0)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium text-ink-950 truncate">{s.name}</p>
              <p className="text-[11px] text-ink-500">Slot {s.time}</p>
            </div>
            {i === 0 && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-500">Live</span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
});
function shiftTime(t: string, mins: number) {
  const [h, m] = t.split(':').map(Number);
  const total = (h * 60 + m + mins) % (24 * 60);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

/* ─── ARCHETYPE 2: Notification stream (perpetual) ────────────────────── */
const NOTIFS = [
  { icon: Bell,           text: 'Promemoria inviato a 12 allievi',  color: 'text-rose-500'   },
  { icon: ArrowsClockwise, text: 'Slot delle 16:30 occupato',        color: 'text-emerald-500'},
  { icon: CreditCard,     text: 'Pagamento ricevuto da Marco R.',    color: 'text-amber-500'  },
  { icon: ChatTeardropDots, text: 'Nuova richiesta: Giulia C.',       color: 'text-rose-500'   },
];
const NotificationStream = memo(function NotificationStream() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % NOTIFS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[180px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{   opacity: 0, y: -24, scale: 0.96 }}
          transition={SPRING.snappy}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto max-w-[260px] glass rounded-2xl p-4"
        >
          {(() => {
            const { icon: Icon, text, color } = NOTIFS[idx];
            return (
              <div className="flex items-start gap-3">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-paper ${color}`}>
                  <Icon size={18} weight="fill" />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-ink-950 leading-snug">{text}</p>
                  <p className="text-[10px] text-ink-500 mt-0.5">Adesso</p>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

/* ─── ARCHETYPE 3: Mini receipt ───────────────────────────────────────── */
const ReceiptMini = memo(function ReceiptMini() {
  return (
    <div className="rounded-2xl bg-paper border border-ink-100 p-4 shadow-diffusion-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">Pagamento</p>
        <span className="rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5 text-[10px] font-semibold">Saldato</span>
      </div>
      <p className="text-[28px] font-bold text-ink-950 tabular-nums leading-none">€ 480<span className="text-ink-300">,00</span></p>
      <p className="text-[12px] text-ink-500 mt-1">Pacchetto guide — Marco R.</p>
      <div className="mt-4 flex items-center justify-between text-[11px] text-ink-500 pt-3 border-t border-ink-100">
        <span className="font-mono">#FT-2026-0428</span>
        <span>Auto</span>
      </div>
    </div>
  );
});

/* ─── ARCHETYPE 4: Mini chart (data stream) ───────────────────────────── */
const ChartMini = memo(function ChartMini() {
  const data = [42, 38, 51, 47, 62, 58, 71, 68, 79, 84, 78, 92];
  const max = Math.max(...data);
  return (
    <div className="rounded-2xl bg-paper border border-ink-100 p-4 shadow-diffusion-sm">
      <div className="flex items-end justify-between mb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">Slot occupati</p>
          <p className="text-2xl font-bold text-ink-950 tabular-nums leading-none mt-1">+47<span className="text-rose-500">%</span></p>
        </div>
        <ChartLineUp size={22} className="text-ink-400" weight="duotone" />
      </div>
      <div className="flex items-end gap-1 h-16">
        {data.map((v, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${(v / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, ...SPRING.default }}
            className="flex-1 rounded-sm bg-gradient-to-t from-rose-500 to-rose-300"
          />
        ))}
      </div>
    </div>
  );
});

/* ─── BENTO LAYOUT ────────────────────────────────────────────────────── */
export default function BentoFeatures() {
  return (
    <section className="relative py-24 sm:py-32 bg-paper">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* Header — left aligned, never centered */}
        <Reveal className="max-w-[680px] mb-14 sm:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-rose-500 mb-4">
            Capacità
          </p>
          <h2 className="h-section text-4xl sm:text-5xl lg:text-[56px] text-ink-950">
            Una giornata più ordinata,<br />
            <span className="italic font-light text-ink-500">da subito.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed max-w-[520px]">
            Ogni funzione nasce da un problema reale: slot vuoti, chiamate inutili, informazioni sparse.
          </p>
        </Reveal>

        {/* Asymmetric Bento — 12 cols, 6 tiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(180px,auto)]">

          {/* Tile 1 — wide left, intelligent list (cols 1..7 row 1, span 2 rows) */}
          <Reveal className="md:col-span-7 md:row-span-2">
            <article className="group h-full rounded-3xl bg-paper border border-ink-100 p-7 shadow-diffusion-sm hover:shadow-diffusion transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Lightning size={20} weight="duotone" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">01 / Recupero</span>
              </div>
              <h3 className="text-2xl font-bold text-ink-950 leading-tight max-w-[400px]">
                Quando una guida salta, Reglo riempie lo slot.
              </h3>
              <p className="mt-3 text-ink-500 max-w-[440px]">
                In autonomia, in tempo reale, senza alzare il telefono.
              </p>
              <div className="mt-auto pt-7">
                <IntelligentList />
              </div>
            </article>
          </Reveal>

          {/* Tile 2 — top right, notification stream (cols 8..12 row 1) */}
          <Reveal delay={0.05} className="md:col-span-5">
            <article className="group h-full rounded-3xl bg-ink-950 text-paper p-7 overflow-hidden relative">
              <div className="flex items-start justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper/10 text-paper">
                  <Bell size={20} weight="duotone" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-paper/40">02 / Comunicazioni</span>
              </div>
              <h3 className="text-xl font-bold leading-tight">
                Promemoria automatici prima di ogni guida.
              </h3>
              <NotificationStream />
            </article>
          </Reveal>

          {/* Tile 3 — middle right, payment receipt (cols 8..10 row 2) */}
          <Reveal delay={0.1} className="md:col-span-3">
            <article className="group h-full rounded-3xl bg-amber-50 border border-amber-100 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-amber-500">
                  <CreditCard size={20} weight="duotone" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700/60">03</span>
              </div>
              <h3 className="text-base font-bold text-ink-950 leading-tight mb-3">
                Pagamenti e fatture in app.
              </h3>
              <div className="mt-auto"><ReceiptMini /></div>
            </article>
          </Reveal>

          {/* Tile 4 — middle right, chart (cols 11..12 row 2) */}
          <Reveal delay={0.15} className="md:col-span-2">
            <article className="group h-full rounded-3xl bg-paper border border-ink-100 p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">04</span>
                <Receipt size={16} className="text-ink-400" weight="duotone" />
              </div>
              <p className="text-[11px] text-ink-500 mb-1">Tempo recuperato</p>
              <p className="text-3xl font-bold text-ink-950 tabular-nums leading-none">8h<span className="text-rose-500">/sett</span></p>
              <p className="text-[11px] text-ink-500 mt-2">vs. gestione manuale</p>
            </article>
          </Reveal>

          {/* Tile 5 — wide bottom, agenda (cols 1..8 row 3) */}
          <Reveal className="md:col-span-8">
            <article className="group h-full rounded-3xl bg-ink-50 border border-ink-100 p-7 flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-ink-700">
                  <CalendarBlank size={20} weight="duotone" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">05 / Agenda</span>
              </div>
              <h3 className="text-2xl font-bold text-ink-950 leading-tight">
                Allievi, istruttori e segreteria<br />vedono lo stesso stato.
              </h3>
              <div className="mt-auto pt-5"><ChartMini /></div>
            </article>
          </Reveal>

          {/* Tile 6 — narrow bottom right, conversion stat (cols 9..12 row 3) */}
          <Reveal delay={0.05} className="md:col-span-4">
            <article className="group h-full rounded-3xl bg-rose-500 text-paper p-7 flex flex-col">
              <ChatTeardropDots size={22} weight="duotone" className="opacity-80 mb-4" />
              <p className="text-paper/80 text-sm">
                Le autoscuole che usano Reglo recuperano in media
              </p>
              <p className="mt-3 text-5xl font-bold tabular-nums leading-none">
                €1.840<span className="text-paper/60 text-2xl">/m</span>
              </p>
              <p className="mt-3 text-paper/80 text-xs">in slot prima persi.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
