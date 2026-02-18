import { useEffect, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';
import { submitContact } from '../lib/contact';

export default function DemoPage() {
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
        source: 'demo',
      });
      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { source: 'demo' });
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

  return (
    <div className="min-h-screen py-16 sm:py-20 lg:py-24">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="max-w-full sm:max-w-2xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-[44px] font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Prenota una demo di Reglo Autoscuole
          </h1>
          <p className="text-lg sm:text-xl text-[color:var(--color-ink-muted)]">
            Ti mostriamo in modo pratico come gestire agenda, slot e pagamenti.
            Ti ricontattiamo entro 24 ore.
          </p>
        </div>

        <div className="-mx-6 glass-panel sm:mx-0 rounded-none sm:rounded-2xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                Richiesta inviata con successo!
              </h2>
              <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)]">
                Ti ricontatteremo entro 24 ore per fissare una demo sulla tua operativita reale.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                  className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                  className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none"
                  placeholder="mario.rossi@autoscuola.it"
                />
              </div>

              <div>
                <label htmlFor="azienda" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                  className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none"
                  placeholder="Autoscuola Alfa"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                    className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none"
                    placeholder="+39 333 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="gestionale" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
                    Sistema attuale (opzionale)
                  </label>
                  <input
                    type="text"
                    id="gestionale"
                    name="gestionale"
                    autoComplete="organization-title"
                    enterKeyHint="next"
                    value={formData.gestionale}
                    onChange={handleChange}
                    className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none"
                    placeholder="Es. fogli Excel, gestionale interno"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="processo" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
                  Priorita operativa (opzionale)
                </label>
                <textarea
                  id="processo"
                  name="processo"
                  value={formData.processo}
                  onChange={handleChange}
                  rows={4}
                  className="glass-input w-full px-3.5 py-3 rounded-lg text-base focus:outline-none resize-none"
                  placeholder="Es. ridurre slot vuoti, migliorare agenda istruttori, controllo pagamenti"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="interactive-lift w-full py-3.5 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--color-ink)' }}
              >
                {isSubmitting ? 'Invio in corso...' : 'Prenota demo gratuita'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs sm:text-sm text-center text-[color:var(--color-ink-muted)]">
                Nessun impegno richiesto. Demo costruita sui tuoi processi operativi reali.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
