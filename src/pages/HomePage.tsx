import Hero from '../components/Hero';
import Integrations from '../components/Integrations';
import Benefits from '../components/Benefits';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Integrations />
      <Benefits />
      {/* <Testimonials /> */}
      <FinalCTA />
    </div>
  );
}
