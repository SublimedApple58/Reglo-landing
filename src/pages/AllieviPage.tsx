import { useState } from 'react';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';
import { submitReferral } from '../lib/contact';

/* ═══════════════════════════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════════════════════════ */

const IconSegnala = () => (
  <div className="w-10 h-10 rounded-xl bg-[#ec4899]/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-[#ec4899]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  </div>
);

const IconVerifica = () => (
  <div className="w-10 h-10 rounded-xl bg-[#facc15]/15 flex items-center justify-center">
    <svg className="w-5 h-5 text-[#ca8a04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

const IconVoucher = () => (
  <div className="w-10 h-10 rounded-xl bg-[#ec4899]/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  </div>
);

const ArrowDashed = () => (
  <div className="hidden lg:flex items-center text-[#d1d5db]">
    <span className="text-lg tracking-[0.3em]">---</span>
    <span className="text-lg">&gt;</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════
   FORM
══════════════════════════════════════════════════════════════════════ */

const LABEL = 'block text-xs font-bold uppercase tracking-[0.12em] text-[#6b7280] mb-1.5';
const INPUT = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-[#111] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#ec4899]/20 focus:border-[#ec4899] transition-all';

function ReferralForm() {
  const [form, setForm] = useState({
    studentName: '',
    phone: '',
    referredSchool: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, showToast, clearToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await submitReferral({
        studentName: form.studentName.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        referredSchool: form.referredSchool.trim(),
        role: 'allievo',
        consent: true,
        source: 'allievi',
      });
      setSubmitted(true);
      showToast('success', 'Segnalazione inviata! Ti aggiorniamo entro qualche giorno.');
    } catch (error) {
      showToast('error', error instanceof Error ? error.message : 'Errore, riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-[800px] mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#111] mb-2">Segnalazione ricevuta!</h3>
        <p className="text-[#6b7280]">Verifichiamo e ti aggiorniamo entro qualche giorno sul voucher.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-8 sm:p-10">
      {toast && (
        <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      )}

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9ca3af] mb-8">
        Modulo segnalazione autoscuola
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1 */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="studentName" className={LABEL}>Il tuo nome e cognome</label>
            <input
              id="studentName"
              name="studentName"
              required
              autoComplete="name"
              value={form.studentName}
              onChange={handleChange}
              className={INPUT}
              placeholder="Es. Mario Rossi"
            />
          </div>
          <div>
            <label htmlFor="phone" className={LABEL}>Il tuo telefono</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              className={INPUT}
              placeholder="+39"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="referredSchool" className={LABEL}>Autoscuola da segnalare</label>
            <input
              id="referredSchool"
              name="referredSchool"
              required
              value={form.referredSchool}
              onChange={handleChange}
              className={INPUT}
              placeholder="Nome dell'autoscuola"
            />
          </div>
          <div>
            <label htmlFor="city" className={LABEL}>Città</label>
            <input
              id="city"
              name="city"
              required
              autoComplete="address-level2"
              value={form.city}
              onChange={handleChange}
              className={INPUT}
              placeholder="Città dell'autoscuola"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full bg-[#ec4899] text-white font-bold text-base hover:bg-[#db2777] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia e richiedi la promo'}
        </button>
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════════ */

export default function AllieviPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-[1440px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#facc15]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ca8a04]">
              Promo Allievi
            </span>
          </div>

          <h1 className="text-4xl sm:text-[44px] font-bold text-[#111] leading-tight mb-1">
            Segnala la tua autoscuola.
          </h1>
          <p className="text-4xl sm:text-[44px] font-bold text-[#facc15] leading-tight mb-6">
            Ricevi 2 guide gratuite.
          </p>
          <p className="text-lg text-[#6b7280] max-w-[620px] mx-auto">
            Tu ci segnali la scuola, noi facciamo la verifica. Se parte con Reglo, ti inviamo il voucher.
          </p>
        </div>
      </section>

      {/* ── 3 Steps ── */}
      <section className="pb-20 px-5 sm:px-8">
        <div className="max-w-[920px] mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-0">

            {/* Step 1 */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <IconSegnala />
              <h3 className="text-base font-bold text-[#111] mt-4 mb-1">1. Segnala</h3>
              <p className="text-sm text-[#6b7280]">Compili il modulo in 2 min.</p>
            </div>

            <div className="hidden lg:flex items-center px-3 text-[#d1d5db] shrink-0">
              <span className="text-sm tracking-[0.3em]">---</span>
              <span className="text-sm">&gt;</span>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <IconVerifica />
              <h3 className="text-base font-bold text-[#111] mt-4 mb-1">2. Verifichiamo</h3>
              <p className="text-sm text-[#6b7280]">Check e autorizzazione in 3 giorni.</p>
            </div>

            <div className="hidden lg:flex items-center px-3 text-[#d1d5db] shrink-0">
              <span className="text-sm tracking-[0.3em]">---</span>
              <span className="text-sm">&gt;</span>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <IconVoucher />
              <h3 className="text-base font-bold text-[#111] mt-4 mb-1">3. Voucher</h3>
              <p className="text-sm text-[#6b7280]">Ricevi 2 guide gratuite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="pb-24 px-5 sm:px-8">
        <ReferralForm />
      </section>

      <Footer />
    </div>
  );
}
