import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Send, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';
import { submitContact } from '../lib/contact';

export default function Hero() {
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

  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <section className="relative overflow-hidden">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-20 lg:pt-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div id="demo-form" className="glass-panel rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-ink)' }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-[color:var(--color-ink)]">
                  Richiesta inviata con successo!
                </h2>
                <p className="text-base text-[color:var(--color-ink-muted)]">
                  Ti ricontatteremo entro 24 ore per fissare la demo.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
                    Demo personalizzata
                  </p>
                  <h2 className="text-2xl font-semibold mt-2 text-[color:var(--color-ink)]">
                    Reglo è adatto alla tua azienda?
                  </h2>
                  <p className="text-sm text-[color:var(--color-ink-muted)] mt-2">
                    Lascia i tuoi dati e prepariamo una demo sui tuoi processi reali.
                  </p>
                </div>

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
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none"
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
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none"
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
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none"
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
                        className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none"
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none"
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
                      className="glass-input w-full px-3.5 py-3 rounded-xl text-base focus:outline-none resize-none"
                      placeholder="Es. conferme d'ordine, emissione documenti, approvazioni"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive-lift w-full py-3.5 rounded-full text-[color:var(--color-ink)] font-semibold text-base flex items-center justify-center gap-2 shadow-soft disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--color-accent)]"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Richiedi demo gratuita'}
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-[color:var(--color-ink-muted)]">
                    Nessun impegno richiesto. Demo personalizzata sui tuoi processi.
                  </p>
                </form>
              </div>
            )}
          </div>

          <div className="space-y-10">
            <div className="space-y-7">
              <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ink)]">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
                Automazione operativa
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[color:var(--color-ink)]">
                Il nuovo modo di automatizzare processi e documenti aziendali
              </h1>
              <p className="text-lg sm:text-xl text-[color:var(--color-ink-muted)] leading-relaxed">
                Reglo centralizza workflow, documenti e firme digitali collegandosi al tuo ERP.
                Meno burocrazia, più visibilità, team più veloci.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToDemo}
                  className="interactive-lift px-7 py-3.5 rounded-full bg-[color:var(--color-ink)] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-soft"
                >
                  Richiedi una demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/demo"
                  className="interactive-lift px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 border border-white/70 text-[color:var(--color-ink)] bg-white/70"
                >
                  Inizia ora
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="glass-card rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)] flex items-center gap-2">
                  <Star className="h-4 w-4 text-[color:var(--color-ink)]" />
                  4,9/5 valutazione media
                </div>
                <div className="glass-card rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                  Go-live medio in 7 giorni
                </div>
                <div className="glass-card rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                  Setup assistito dal team Reglo
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                  Angolo prodotto
                </div>
                <span className="text-xs text-[color:var(--color-ink-muted)]">Preview</span>
              </div>
              <div className="mt-4 glass-card rounded-2xl aspect-[4/3] flex items-center justify-center text-sm text-[color:var(--color-ink-muted)]">
                Inserisci qui lo screen del prodotto
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="glass-card rounded-2xl px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">
                  Dashboard operativa con KPI, task e colli di bottiglia.
                </div>
                <div className="glass-card rounded-2xl px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">
                  Flussi approvativi e documenti in un solo pannello.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
