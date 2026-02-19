import { useEffect, useState } from 'react';
import { CheckCircle2, Gift, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitReferral } from '../lib/contact';

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

  const rules = [
    'La scuola segnalata deve essere nuova per Reglo.',
    'La promo si attiva quando la scuola completa l onboarding.',
    'Il voucher da 2 guide e nominativo.',
  ];

  return (
    <section id="referral-form" className="py-14 sm:py-16">
      {toast ? (
        <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="rounded-3xl border border-white/70 bg-white/72 p-4 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                Promo allievi
              </p>
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
                Compila il modulo e blocca la tua promo da 2 guide
              </h2>
              <p className="text-[15px] text-[color:var(--color-ink-muted)] sm:text-base">
                Ti bastano pochi dati. Poi gestiamo noi il contatto con la scuola e la verifica.
              </p>
              <div className="space-y-0 border-t border-[color:var(--color-border)]/55 pt-2 sm:space-y-3 sm:border-0 sm:pt-0">
                {rules.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[color:var(--color-border)]/55 py-3 last:border-b-0 sm:rounded-2xl sm:border sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-3 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-accent)]">
                      <Gift className="h-4 w-4 text-[color:var(--color-ink)]" />
                    </div>
                    <p className="text-sm text-[color:var(--color-ink-muted)]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Aggiornamento entro <span className="font-semibold text-[color:var(--color-ink)]">5 giorni lavorativi</span>.
              </p>
            </div>

            <div className="mobile-flat-surface rounded-2xl border border-white/70 bg-white/84 p-4 shadow-[0_18px_35px_rgba(50,78,122,0.14)] backdrop-blur-[14px] sm:p-6">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-accent)]">
                    <CheckCircle2 className="h-8 w-8 text-[color:var(--color-ink)]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[color:var(--color-ink)]">
                    Referral ricevuto
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)]">
                    Verifichiamo i requisiti promo e ti aggiorniamo sul voucher.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentName" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Nome allievo *
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        required
                        autoComplete="name"
                        value={formData.studentName}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Telefono *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Citta *
                      </label>
                      <input
                        id="city"
                        name="city"
                        required
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Es. Milano"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="referredSchool" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Nome autoscuola segnalata *
                      </label>
                      <input
                        id="referredSchool"
                        name="referredSchool"
                        required
                        value={formData.referredSchool}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Autoscuola Alfa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                      Ruolo *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                    >
                      <option value="allievo">Allievo</option>
                      <option value="ex_allievo">Ex allievo</option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentEmail" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Email allievo (opzionale)
                      </label>
                      <input
                        id="studentEmail"
                        name="studentEmail"
                        type="email"
                        autoComplete="email"
                        value={formData.studentEmail}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="mario@email.it"
                      />
                    </div>
                    <div>
                      <label htmlFor="schoolContact" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Contatto autoscuola (opzionale)
                      </label>
                      <input
                        id="schoolContact"
                        name="schoolContact"
                        value={formData.schoolContact}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Telefono o email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                      Note (opzionale)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="glass-input w-full resize-none rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                      placeholder="Dettagli utili sulla segnalazione"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs text-[color:var(--color-ink-muted)]">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleConsentChange}
                      required
                      className="mt-0.5 h-4 w-4 accent-[color:var(--color-ink)]"
                    />
                    <span>
                      Accetto la{' '}
                      <Link to="/privacy-policy" className="font-semibold text-[color:var(--color-ink)] hover:underline">
                        privacy policy
                      </Link>{' '}
                      e la{' '}
                      <Link to="/policy" className="font-semibold text-[color:var(--color-ink)] hover:underline">
                        policy
                      </Link>{' '}
                      e autorizzo il trattamento dati per la gestione della promo.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive-lift flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] py-2.5 text-sm font-semibold text-[color:var(--color-ink)] shadow-soft disabled:cursor-not-allowed disabled:opacity-70 sm:py-3"
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
