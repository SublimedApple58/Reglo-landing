import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    processo: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nome: '', email: '', azienda: '', processo: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="demo-form" className="py-24 bg-gradient-to-br from-[#D7FFF4] to-[#F3F7FF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Richiedi una demo di Reglo
          </h2>
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
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#324D7A' }}>
                Richiesta inviata con successo!
              </h3>
              <p className="text-lg text-black/70">
                Ti ricontatteremo entro 24 ore per fissare la demo.
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
                  Processo che vuoi automatizzare *
                </label>
                <textarea
                  id="processo"
                  name="processo"
                  required
                  value={formData.processo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#324D7A] focus:outline-none transition-colors resize-none"
                  placeholder="Es. Gestione ordini clienti, emissione fatture, conferme d'ordine..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ backgroundColor: '#324D7A' }}
              >
                Richiedi demo gratuita
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-center text-black/60">
                Nessun impegno richiesto. Demo personalizzata sui tuoi processi aziendali.
              </p>
            </form>
          )}
        </div>

        <footer className="mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-3xl font-bold" style={{ color: '#324D7A' }}>Reglo</div>
          </div>
          <p className="text-black/60">
            La piattaforma cloud per automatizzare i processi aziendali
          </p>
          <div className="flex justify-center gap-8 text-sm text-black/60">
            <a href="#" className="hover:text-[#324D7A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#324D7A] transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-[#324D7A] transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-black/50 pt-4">
            © 2024 Reglo. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </section>
  );
}
