import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkflowPage from './pages/WorkflowPage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
