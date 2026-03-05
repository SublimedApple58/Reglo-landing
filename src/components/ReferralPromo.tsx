import { useEffect, useState } from 'react';
import { CheckCircle2, Gift, Send, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitReferral } from '../lib/contact';

const INPUT_BASE =
  'w-full rounded-2xl border border-[#324D7A]/10 bg-[#f8fafc] px-4 py-3 text-sm text-[#0f1e36] placeholder:text-[#324D7A]/30 focus:outline-none focus:ring-2 focus:ring-[#324D7A]/20 focus:border-[#324D7A]/25 transition-all';

const LABEL_BASE = 'block text-xs font-semibold text-[#324D7A]/60 mb-1.5 uppercase tracking-[0.1em]';

const rules = [
  { icon: Gift,        text: 'La scuola segnalata deve essere nuova per Reglo.' },
  { icon: ShieldCheck, text: 'La promo si attiva quando la scuola completa l\'onboarding.' },
  { icon: Clock,       text: 'Aggiornamento entro 5 giorni lavorativi.' },
];

export default function ReferralPromo() {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    city: '',
    referredSchool: '',
    role: 'allievo',
    studentEmail: '',
    schoolContact: '',
    notes: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast, showToast, clearToast } = useToast();

  useEffect(() => () => clearToast(), [clearToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await submitReferral({
        studentName: formData.studentName.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        referredSchool: formData.referredSchool.trim(),
        role: formData.role as 'allievo' | 'ex_allievo',
        studentEmail: formData.studentEmail.trim() || undefined,
        schoolContact: formData.schoolContact.trim() || undefined,
        notes: formData.notes.trim() || undefined,
        consent: formData.consent,
        source: 'home',
      });
      setSubmitted(true);
      showToast('success', 'Referral inviato. Ora verifichiamo i requisiti della promo.');
      setFormData({
        studentName: '',
        phone: '',
        city: '',
        referredSchool: '',
        role: 'allievo',
        studentEmail: '',
        schoolContact: '',
        notes: '',
        consent: false,
      });
    } catch (error) {
      showToast(
        'error',
        error instanceof Error ? error.message : 'Impossibile inviare il referral. Riprova.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  return (
    <section id="referral-form" className="py-20 px-4 sm:px-6 bg-[#f8fafc]">
      {toast ? (
        <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}

      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#324D7A]/12 bg-white px-4 py-1.5 mb-5 shadow-[0_2px_8px_rgba(50,77,122,0.06)]">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#324D7A]/60 uppercase">Compila il modulo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e36] leading-tight">
            Blocca la tua promo da{' '}
            <span className="text-gradient-navy">2 guide gratuite</span>
          </h2>
          <p className="mt-3 text-[#324D7A]/55 text-base max-w-md mx-auto">
            Ti bastano pochi dati. Poi gestiamo noi il contatto con la scuola.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-[28px] border border-[#324D7A]/8 shadow-[0_24px_80px_rgba(50,77,122,0.09),0_4px_16px_rgba(50,77,122,0.05)] overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center gap-2 px-6 py-3.5 border-b border-[#324D7A]/6 bg-[#f8fafc]">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[11px] font-bold tracking-[0.12em] text-[#324D7A]/35 uppercase">Reglo · Promo Allievi</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.6fr]">

            {/* ─ Left: rules sidebar ─ */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#324D7A]/6 bg-gradient-to-b from-[#f8fafc] to-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#324D7A]/40 mb-6">
                Condizioni promo
              </p>

              <div className="space-y-4 mb-8">
                {rules.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#AFE2D4]/30 border border-[#AFE2D4]/50">
                      <Icon className="h-4 w-4 text-[#324D7A]" />
                    </div>
                    <p className="text-sm text-[#324D7A]/60 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Voucher mini preview */}
              <div className="rounded-2xl bg-gradient-to-br from-[#324D7A] to-[#1f3a5f] p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dark opacity-40" />
                <div className="relative">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#AFE2D4]/60 uppercase mb-1">Il tuo premio</p>
                  <p className="text-2xl font-black text-white">2 Guide</p>
                  <p className="text-xs text-white/50 mt-0.5">Voucher nominativo · Reglo</p>
                  <div className="mt-4 flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 4px #22c55e80' }} />
                    <span className="text-[11px] text-[#22c55e] font-semibold">Promo attiva</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ Right: form ─ */}
            <div className="p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#AFE2D4]/30 border-2 border-[#AFE2D4] mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#324D7A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f1e36] mb-2">Referral ricevuto!</h3>
                  <p className="text-sm text-[#324D7A]/55 max-w-xs leading-relaxed">
                    Verifichiamo i requisiti promo e ti aggiorniamo entro 5 giorni lavorativi sul voucher.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentName" className={LABEL_BASE}>Nome allievo *</label>
                      <input
                        id="studentName"
                        name="studentName"
                        required
                        autoComplete="name"
                        value={formData.studentName}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={LABEL_BASE}>Telefono *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className={LABEL_BASE}>Città *</label>
                      <input
                        id="city"
                        name="city"
                        required
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="Es. Milano"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="referredSchool" className={LABEL_BASE}>Autoscuola segnalata *</label>
                      <input
                        id="referredSchool"
                        name="referredSchool"
                        required
                        value={formData.referredSchool}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="Autoscuola Alfa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className={LABEL_BASE}>Ruolo *</label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className={INPUT_BASE}
                    >
                      <option value="allievo">Allievo</option>
                      <option value="ex_allievo">Ex allievo</option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentEmail" className={LABEL_BASE}>Email allievo <span className="normal-case font-normal">(opzionale)</span></label>
                      <input
                        id="studentEmail"
                        name="studentEmail"
                        type="email"
                        autoComplete="email"
                        value={formData.studentEmail}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="mario@email.it"
                      />
                    </div>
                    <div>
                      <label htmlFor="schoolContact" className={LABEL_BASE}>Contatto scuola <span className="normal-case font-normal">(opzionale)</span></label>
                      <input
                        id="schoolContact"
                        name="schoolContact"
                        value={formData.schoolContact}
                        onChange={handleChange}
                        className={INPUT_BASE}
                        placeholder="Telefono o email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className={LABEL_BASE}>Note <span className="normal-case font-normal">(opzionale)</span></label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className={`${INPUT_BASE} resize-none`}
                      placeholder="Dettagli utili sulla segnalazione"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleConsentChange}
                        required
                        className="peer sr-only"
                      />
                      <div className="h-5 w-5 rounded-md border-2 border-[#324D7A]/20 bg-white transition-colors peer-checked:border-[#324D7A] peer-checked:bg-[#324D7A]" />
                      <CheckCircle2 className="pointer-events-none absolute inset-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xs text-[#324D7A]/55 leading-relaxed">
                      Accetto la{' '}
                      <Link to="/privacy-policy" className="font-semibold text-[#324D7A] hover:underline">privacy policy</Link>
                      {' '}e la{' '}
                      <Link to="/policy" className="font-semibold text-[#324D7A] hover:underline">policy</Link>
                      {' '}e autorizzo il trattamento dati per la gestione della promo.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#324D7A] py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(50,77,122,0.3)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Richiedi promo allievi'}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
