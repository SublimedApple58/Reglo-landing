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
    <div className="min-h-screen bg-gradient-to-br from-[#D7FFF4] to-[#F3F7FF] py-24">
      {toast ? (
        <div className="fixed right-6 top-6 z-50">
          <Toast variant={toast.variant} message={toast.message} onClose={clearToast} />
        </div>
      ) : null}
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Richiedi una demo di Reglo
          </h1>
          <p className="text-xl text-black/70">
            Scopri come automatizzare i tuoi processi aziendali in una demo personalizzata.
            Ti ricontattiamo entro 24 ore.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#58CFAE' }}>
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#324D7A' }}>
                Richiesta inviata con successo!
              </h2>
              <p className="text-lg text-black/70">
                Ti ricontatteremo entro 24 ore per fissare la demo personalizzata sulla tua agenda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold mb-2" style={{ color: '#324D7A' }}>
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#324D7A] focus:outline-none transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#324D7A' }}>
                  Email aziendale *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#324D7A] focus:outline-none transition-colors"
                  placeholder="mario.rossi@azienda.it"
                />
              </div>

              <div>
                <label htmlFor="azienda" className="block text-sm font-semibold mb-2" style={{ color: '#324D7A' }}>
                  Nome azienda *
                </label>
                <input
                  type="text"
                  id="azienda"
                  name="azienda"
                  required
                  value={formData.azienda}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#324D7A] focus:outline-none transition-colors"
                  placeholder="Acme S.r.l."
                />
              </div>

              <div>
                <label htmlFor="processo" className="block text-sm font-semibold mb-2" style={{ color: '#324D7A' }}>
                  Processo che vuoi automatizzare (opzionale)
                </label>
                <textarea
                  id="processo"
                  name="processo"
                  value={formData.processo}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#324D7A] focus:outline-none transition-colors resize-none"
                  placeholder="Es. Gestione ordini clienti, emissione fatture, conferme d'ordine..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#324D7A' }}
              >
                {isSubmitting ? 'Invio in corso...' : 'Richiedi demo gratuita'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-center text-black/60">
                Nessun impegno richiesto. Demo personalizzata sui tuoi processi aziendali specifici.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
