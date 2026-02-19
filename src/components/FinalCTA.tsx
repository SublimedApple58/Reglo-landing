import { useEffect, useState } from 'react';
import { Check, CheckCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitContact } from '../lib/contact';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    telefono: '',
    ruolo: 'titolare',
    numeroAllievi: '',
    citta: '',
    gestionale: '',
    processo: '',
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
      await submitContact({
        fullName: formData.nome.trim(),
        email: formData.email.trim(),
        company: formData.azienda.trim(),
        phone: formData.telefono.trim() || undefined,
        managementSoftware: formData.gestionale.trim() || undefined,
        process: formData.processo.trim() || undefined,
        role: formData.ruolo as 'titolare' | 'segreteria' | 'istruttore',
        studentsCount: Number(formData.numeroAllievi),
        city: formData.citta.trim(),
        source: 'home',
      });
      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { source: 'home' });
      }
      setSubmitted(true);
      showToast('success', 'Richiesta inviata. Ti ricontatteremo presto.');
      setFormData({
        nome: '',
        email: '',
        azienda: '',
        telefono: '',
        ruolo: 'titolare',
        numeroAllievi: '',
        citta: '',
        gestionale: '',
        processo: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      showToast(
        'error',
        error instanceof Error ? error.message : 'Impossibile inviare la richiesta. Riprova.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const highlights = [
    'Analizziamo dove perdi slot e tempo operativo.',
    'Ti mostriamo il flusso ideale per segreteria e istruttori.',
    'Definiamo priorita concrete per le prime settimane.',
  ];

  return (
    <section id="demo-form" className="py-14 sm:py-16">
      {toast ? (
        <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="sm:rounded-3xl sm:border sm:border-white/70 sm:bg-white/72 sm:p-6 sm:shadow-[0_14px_36px_rgba(50,78,122,0.16)] sm:backdrop-blur-[16px] lg:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="space-y-4 lg:pr-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                Parliamone
              </p>
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
                Vuoi piu guide confermate e meno caos in segreteria?
              </h2>
              <p className="text-[15px] text-[color:var(--color-ink-muted)] sm:text-base">
                Prenota una demo pratica: andiamo dritti ai numeri e alle azioni che ti servono davvero.
              </p>
              <div className="space-y-0 border-t border-[color:var(--color-border)]/55 pt-2 sm:space-y-3 sm:border-0 sm:pt-0">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-start gap-3 py-3 ${
                      index !== highlights.length - 1 ? 'border-b border-[color:var(--color-border)]/55' : ''
                    } sm:rounded-2xl sm:border sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-3 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]`}
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-accent)] sm:h-7 sm:w-7">
                      <Check className="h-4 w-4 text-[color:var(--color-ink)]" />
                    </div>
                    <div className="text-sm text-[color:var(--color-ink-muted)]">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="py-10 text-center">
                  <div
                    className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--color-ink)' }}
                  >
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[color:var(--color-ink)]">Richiesta inviata con successo!</h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)]">Ti ricontatteremo entro 24 ore per fissare la demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        autoComplete="name"
                        autoCapitalize="words"
                        enterKeyHint="next"
                        value={formData.nome}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        autoCapitalize="none"
                        enterKeyHint="next"
                        value={formData.email}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="mario.rossi@autoscuola.it"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="azienda" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Nome autoscuola *
                      </label>
                      <input
                        type="text"
                        id="azienda"
                        name="azienda"
                        required
                        autoComplete="organization"
                        autoCapitalize="words"
                        enterKeyHint="next"
                        value={formData.azienda}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Autoscuola Alfa"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Numero di telefono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        enterKeyHint="next"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="ruolo" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Ruolo *
                      </label>
                      <select
                        id="ruolo"
                        name="ruolo"
                        required
                        value={formData.ruolo}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                      >
                        <option value="titolare">Titolare</option>
                        <option value="segreteria">Segreteria</option>
                        <option value="istruttore">Istruttore</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="numeroAllievi" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Numero allievi *
                      </label>
                      <input
                        type="number"
                        id="numeroAllievi"
                        name="numeroAllievi"
                        required
                        min={1}
                        inputMode="numeric"
                        enterKeyHint="next"
                        value={formData.numeroAllievi}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Es. 120"
                      />
                    </div>
                    <div>
                      <label htmlFor="citta" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                        Citta *
                      </label>
                      <input
                        type="text"
                        id="citta"
                        name="citta"
                        required
                        autoComplete="address-level2"
                        autoCapitalize="words"
                        enterKeyHint="next"
                        value={formData.citta}
                        onChange={handleChange}
                        className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                        placeholder="Es. Milano"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gestionale" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                      Gestionale attuale (opzionale)
                    </label>
                    <input
                      type="text"
                      id="gestionale"
                      name="gestionale"
                      autoComplete="organization-title"
                      enterKeyHint="next"
                      value={formData.gestionale}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                      placeholder="Es. gestionale interno, fogli Excel, altro"
                    />
                  </div>

                  <div>
                    <label htmlFor="processo" className="mb-1.5 block text-xs font-medium text-[color:var(--color-ink)] sm:mb-2 sm:text-sm">
                      Priorita operativa (opzionale)
                    </label>
                    <textarea
                      id="processo"
                      name="processo"
                      value={formData.processo}
                      onChange={handleChange}
                      rows={3}
                      className="glass-input w-full resize-none rounded-xl px-3 py-2.5 text-sm focus:outline-none sm:px-3.5 sm:py-3"
                      placeholder="Es. ridurre slot vuoti, semplificare agenda istruttori, controllo pagamenti"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive-lift flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] py-2.5 text-sm font-semibold text-[color:var(--color-ink)] shadow-soft disabled:cursor-not-allowed disabled:opacity-70 sm:py-3"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Prenota demo gratuita'}
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-center text-xs text-[color:var(--color-ink-muted)]">
                    Nessun impegno. Demo personalizzata sulla tua operativita.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-10 space-y-3 text-center sm:mt-12">
          <div className="flex items-center justify-center gap-2">
            <div className="text-xl sm:text-2xl font-semibold text-[color:var(--color-ink)]">Reglo</div>
          </div>
          <p className="text-[color:var(--color-ink-muted)] text-sm">
            Piattaforma operativa per autoscuole
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            <Link to="/privacy-policy" className="hover:text-[color:var(--color-ink)] transition-colors">Privacy Policy</Link>
            <Link to="/policy" className="hover:text-[color:var(--color-ink)] transition-colors">Policy</Link>
            <a href="mailto:privacy@reglo.it" className="hover:text-[color:var(--color-ink)] transition-colors">Contatti</a>
          </div>
          <p className="text-xs sm:text-sm text-[color:var(--color-ink-muted)]">© 2026 Reglo. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </section>
  );
}
