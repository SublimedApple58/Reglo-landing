import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import RouteRecovery from './components/RouteRecovery';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlatformPage from './pages/PlatformPage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PolicyPage from './pages/PolicyPage';
import AllieviPage from './pages/AllieviPage';
import CalculatorPage from './pages/CalculatorPage';
import NotFoundPage from './pages/NotFoundPage';

function WithNavbar() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <RouteRecovery />
      <ScrollToTop />
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/piattaforma" element={<PlatformPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/allievi" element={<AllieviPage />} />
          <Route path="/calcolatore" element={<CalculatorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
