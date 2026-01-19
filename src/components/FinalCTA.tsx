import { useEffect, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitContact } from '../lib/contact';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
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
        process: formData.processo.trim() || undefined,
        source: 'home',
      });
      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { source: 'home' });
      }
      setSubmitted(true);
      showToast('success', 'Richiesta inviata. Ti ricontatteremo presto.');
      setFormData({ nome: '', email: '', azienda: '', processo: '' });
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

  return (
    <section
      id="demo-form"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: 'linear-gradient(135deg, #324D7A 0%, rgba(50, 77, 122, 0.92) 55%, rgba(50, 77, 122, 0.85) 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />
      <div
        className="absolute -top-16 right-8 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(175, 226, 212, 0.35)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(175, 226, 212, 0.35)' }}
        aria-hidden="true"
      />
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="relative max-w-full sm:max-w-4xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Demo personalizzata
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-white">
            Richiedi una demo di Reglo
          </h2>
          <p className="text-base sm:text-lg text-white/75">
            Scopri come automatizzare i tuoi processi aziendali in una demo personalizzata.
            Ti ricontattiamo entro 24 ore.
          </p>
        </div>

        <div className="-mx-6 bg-white/95 sm:mx-0 rounded-none sm:rounded-3xl border-0 sm:border border-white/20 shadow-none sm:shadow-lg px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-ink)' }}>
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-[color:var(--color-ink)]">
                Richiesta inviata con successo!
              </h3>
              <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)]">
                Ti ricontatteremo entro 24 ore per fissare la demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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
                  className="w-full px-3.5 py-3 rounded-xl border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-10 transition-colors"
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
                  className="w-full px-3.5 py-3 rounded-xl border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-10 transition-colors"
                  placeholder="mario.rossi@azienda.it"
                />
              </div>

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
                  className="w-full px-3.5 py-3 rounded-xl border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-10 transition-colors"
                  placeholder="Acme S.r.l."
                />
              </div>

              <div>
                <label htmlFor="processo" className="block text-sm font-medium mb-2 text-[color:var(--color-ink)]">
                  Processo che vuoi automatizzare (opzionale)
                </label>
                <textarea
                  id="processo"
                  name="processo"
                  value={formData.processo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3.5 py-3 rounded-xl border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-10 transition-colors resize-none"
                  placeholder="Es. Gestione ordini clienti, emissione fatture, conferme d'ordine..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-full text-[color:var(--color-ink)] font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-soft hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
              >
                {isSubmitting ? 'Invio in corso...' : 'Richiedi demo gratuita'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs sm:text-sm text-center text-[color:var(--color-ink-muted)]">
                Nessun impegno richiesto. Demo personalizzata sui tuoi processi aziendali.
              </p>
            </form>
          )}
        </div>

        <footer className="mt-12 sm:mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl sm:text-3xl font-semibold text-white">Reglo</div>
          </div>
          <p className="text-white/70">
            La piattaforma cloud per automatizzare i processi aziendali
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-white transition-colors">Contatti</a>
          </div>
          <p className="text-xs sm:text-sm text-white/50 pt-4">
            © 2024 Reglo. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </section>
  );
}
