import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import RouteRecovery from './components/RouteRecovery';
import Placeholder from './pages/Placeholder';
import DemoPage from './pages/DemoPage';

/**
 * Mappa rotte pubbliche esistenti (da preservare: sono live e indicizzate).
 * Tutte puntano al Placeholder finché non innestiamo il nuovo design.
 *
 *   /                 home
 *   /allievi          landing referral allievi (aveva form -> submitReferral)
 *   /calcolatore      calcolatore perdite
 *   /privacy-policy   legale
 *   /policy           legale
 *   /demo             redirect a Cal.com (funzionante, non toccato)
 *   /about            era redirect -> /
 *   /piattaforma      era redirect -> /
 *   /pricing          era redirect -> /
 *   *                 404
 */
function App() {
  return (
    <Router>
      <RouteRecovery />
      <ScrollToTop />
      <Routes>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </Router>
  );
}

export default App;
