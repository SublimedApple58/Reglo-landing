import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Platform from '../components/Platform';
import Manifesto from '../components/Manifesto';
import Support from '../components/Support';
import Press from '../components/Press';
import ThreeWays from '../components/ThreeWays';
import SwitchTo from '../components/SwitchTo';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Platform />
      <Manifesto />
      <Support />
      <Press />
      <ThreeWays />
      <SwitchTo />
      <FinalCTA />
    </div>
  );
}
