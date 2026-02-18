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
    'L autoscuola segnalata deve essere nuova per Reglo.',
    'La promo matura quando l autoscuola completa l attivazione.',
    'Il voucher 2 guide e nominativo e non cedibile.',
  ];

  return (
    <section id="referral-form" className="py-16">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                Promo allievi
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
                Porta la tua autoscuola in Reglo e ricevi 2 guide gratuite
              </h2>
              <p className="text-base text-[color:var(--color-ink-muted)]">
                Segnalaci la tua autoscuola: se attiva Reglo, ti premiamo con un voucher digitale da 2 guide.
              </p>
              <div className="space-y-3">
                {rules.map((item) => (
                  <div key={item} className="glass-card rounded-2xl px-4 py-3 flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center">
                      <Gift className="h-4 w-4 text-[color:var(--color-ink)]" />
                    </div>
                    <p className="text-sm text-[color:var(--color-ink-muted)]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Dopo l invio ti aggiorniamo entro <span className="font-semibold text-[color:var(--color-ink)]">5 giorni lavorativi</span>.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center bg-[color:var(--color-accent)]">
                    <CheckCircle2 className="w-8 h-8 text-[color:var(--color-ink)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-ink)]">
                    Referral ricevuto
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)]">
                    Verifichiamo i requisiti promo e ti aggiorniamo sul voucher.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentName" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                        Nome allievo *
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        required
                        autoComplete="name"
                        value={formData.studentName}
                        onChange={handleChange}
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
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
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                        Citta *
                      </label>
                      <input
                        id="city"
                        name="city"
                        required
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="Es. Milano"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="referredSchool" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                        Nome autoscuola segnalata *
                      </label>
                      <input
                        id="referredSchool"
                        name="referredSchool"
                        required
                        value={formData.referredSchool}
                        onChange={handleChange}
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="Autoscuola Alfa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                      Ruolo *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                    >
                      <option value="allievo">Allievo</option>
                      <option value="ex_allievo">Ex allievo</option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentEmail" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                        Email allievo (opzionale)
                      </label>
                      <input
                        id="studentEmail"
                        name="studentEmail"
                        type="email"
                        autoComplete="email"
                        value={formData.studentEmail}
                        onChange={handleChange}
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="mario@email.it"
                      />
                    </div>
                    <div>
                      <label htmlFor="schoolContact" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                        Contatto autoscuola (opzionale)
                      </label>
                      <input
                        id="schoolContact"
                        name="schoolContact"
                        value={formData.schoolContact}
                        onChange={handleChange}
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                        placeholder="Telefono o email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                      Note (opzionale)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none resize-none"
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
                    className="interactive-lift w-full py-3 rounded-full text-[color:var(--color-ink)] font-semibold text-sm flex items-center justify-center gap-2 shadow-soft disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--color-accent)]"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Richiedi promo allievi'}
                    <Send className="w-4 h-4" />
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
