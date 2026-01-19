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
        source: 'demo',
      });
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
    <div className="min-h-screen bg-[color:var(--color-sand)] py-16 sm:py-20 lg:py-24">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="max-w-full sm:max-w-2xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-[44px] font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Richiedi una demo di Reglo
          </h1>
          <p className="text-lg sm:text-xl text-[color:var(--color-ink-muted)]">
            Scopri come automatizzare i tuoi processi aziendali in una demo personalizzata.
            Ti ricontattiamo entro 24 ore.
          </p>
        </div>

        <div className="-mx-6 bg-white sm:mx-0 sm:bg-white rounded-none sm:rounded-2xl border-0 sm:border border-[color:var(--color-border)] shadow-none sm:shadow-lg px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-ink)' }}>
                Richiesta inviata con successo!
              </h2>
              <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)]">
                Ti ricontatteremo entro 24 ore per fissare la demo personalizzata sulla tua agenda.
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
                  className="w-full px-3.5 py-3 rounded-lg border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-20 transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                  className="w-full px-3.5 py-3 rounded-lg border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-20 transition-colors"
                  placeholder="mario.rossi@azienda.it"
                />
              </div>

              <div>
                <label htmlFor="azienda" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
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
                  className="w-full px-3.5 py-3 rounded-lg border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-20 transition-colors"
                  placeholder="Acme S.r.l."
                />
              </div>

              <div>
                <label htmlFor="processo" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-ink)' }}>
                  Processo che vuoi automatizzare (opzionale)
                </label>
                <textarea
                  id="processo"
                  name="processo"
                  value={formData.processo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3.5 py-3 rounded-lg border border-[color:var(--color-border)] text-base focus:border-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)] focus:ring-opacity-20 transition-colors resize-none"
                  placeholder="Es. Gestione ordini clienti, emissione fatture, conferme d'ordine..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--color-ink)' }}
              >
                {isSubmitting ? 'Invio in corso...' : 'Richiedi demo gratuita'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs sm:text-sm text-center text-[color:var(--color-ink-muted)]">
                Nessun impegno richiesto. Demo personalizzata sui tuoi processi aziendali specifici.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
