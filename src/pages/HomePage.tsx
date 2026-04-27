import Hero from '../sections/home/Hero';
import Partners from '../sections/home/Partners';
import BentoFeatures from '../sections/home/BentoFeatures';
import CalculatorSection from '../sections/home/Calculator';
import StickyShowcase from '../sections/home/StickyShowcase';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <div className="grain" aria-hidden />
      <Hero />
      <Partners />
      <BentoFeatures />
      <CalculatorSection />
      <StickyShowcase />
      <Footer />
    </main>
  );
}
