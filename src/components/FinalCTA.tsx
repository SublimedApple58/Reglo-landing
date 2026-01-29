import { useEffect, useState } from 'react';
import { Check, CheckCircle, Send } from 'lucide-react';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitContact } from '../lib/contact';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    telefono: '',
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
        source: 'home',
      });
      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { source: 'home' });
      }
      setSubmitted(true);
      showToast('success', 'Richiesta inviata. Ti ricontatteremo presto.');
      setFormData({ nome: '', email: '', azienda: '', telefono: '', gestionale: '', processo: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      showToast(
        'error',
        error instanceof Error
          ? error.message
          : 'Impossibile inviare la richiesta. Riprova.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const highlights = [
    'Onboarding guidato e team dedicato',
    'Integrazione con il tuo ERP senza sostituzioni',
    'Processi tracciati end-to-end',
  ];

  return (
    <section id="demo-form" className="py-16">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="glass-panel rounded-3xl px-8 py-10 sm:px-10 sm:py-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Iniziamo
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
              Pronto a liberare il tuo team dalla burocrazia?
            </h2>
            <p className="text-base text-[color:var(--color-ink-muted)]">
              Parliamo del tuo flusso attuale e costruiamo insieme la roadmap di automazione.
            </p>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="glass-card rounded-2xl px-4 py-3 flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center">
                    <Check className="h-4 w-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div className="text-sm text-[color:var(--color-ink-muted)]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: 'var(--color-ink)' }}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-ink)]">
                  Richiesta inviata con successo!
                </h3>
                <p className="text-sm text-[color:var(--color-ink-muted)]">
                  Ti ricontatteremo entro 24 ore per fissare la demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                      Email aziendale *
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                      placeholder="mario.rossi@azienda.it"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="azienda" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                      Nome azienda *
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                      placeholder="Acme S.r.l."
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                      placeholder="+39 333 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="gestionale" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                    Gestionale usato *
                  </label>
                  <input
                    type="text"
                    id="gestionale"
                    name="gestionale"
                    required
                    autoComplete="organization-title"
                    enterKeyHint="next"
                    value={formData.gestionale}
                    onChange={handleChange}
                    className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none"
                    placeholder="Es. Teamsystem, Zucchetti, SAP"
                  />
                </div>

                <div>
                  <label htmlFor="processo" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                    Processo da automatizzare (opzionale)
                  </label>
                  <textarea
                    id="processo"
                    name="processo"
                    value={formData.processo}
                    onChange={handleChange}
                    rows={3}
                    className="glass-input w-full px-3.5 py-3 rounded-xl text-sm focus:outline-none resize-none"
                    placeholder="Es. conferme d'ordine, emissione documenti, approvazioni"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive-lift w-full py-3 rounded-full text-[color:var(--color-ink)] font-semibold text-sm flex items-center justify-center gap-2 shadow-soft disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--color-accent)]"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Richiedi demo gratuita'}
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-center text-[color:var(--color-ink-muted)]">
                  Nessun impegno richiesto. Demo personalizzata sui tuoi processi.
                </p>
              </form>
            )}
          </div>
        </div>

        <footer className="mt-10 sm:mt-12 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="text-xl sm:text-2xl font-semibold text-[color:var(--color-ink)]">Reglo</div>
          </div>
          <p className="text-[color:var(--color-ink-muted)] text-sm">
            La piattaforma cloud per automatizzare i processi aziendali
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Contatti</a>
          </div>
          <p className="text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            © 2026 Reglo. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </section>
  );
}
