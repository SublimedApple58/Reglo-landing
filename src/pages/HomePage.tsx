import Hero from '../components/Hero';
import Platform from '../components/Platform';
import Manifesto from '../components/Manifesto';
import ReferralPromo from '../components/ReferralPromo';
import Support from '../components/Support';
import ThreeWays from '../components/ThreeWays';
import SwitchTo from '../components/SwitchTo';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* <TrustedBy /> */}
      <Platform />
      <Manifesto />
      <ReferralPromo />
      <Support />
      {/* <Press /> */}
      <ThreeWays />
      <SwitchTo />
      <FinalCTA />
      <a
        href="#referral-form"
        className="fixed bottom-4 right-4 z-40 rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-xs font-semibold text-[color:var(--color-ink)] shadow-soft sm:hidden"
      >
        Promo 2 guide
      </a>
    </div>
  );
}
