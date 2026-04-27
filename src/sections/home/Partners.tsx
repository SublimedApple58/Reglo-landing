'use client';
import Marquee from '../../components/ui/Marquee';

const PARTNERS = [
  { src: '/partner-1.png',  h: 'h-9',  href: 'https://www.scuolaguidamontreal.it/', alt: 'Scuola Guida Montreal' },
  { src: '/partner-3.png',  h: 'h-5',  href: 'https://autoscuolanewdrive.ai/',      alt: 'Autoscuola New Drive' },
  { src: '/partner-2.png',  h: 'h-7',  href: 'https://www.autoscuolazzurra.com/',   alt: 'Autoscuola Azzurra' },
  { src: '/partner-4.png',  h: 'h-9',  href: 'https://www.autoscuolevicenza.it/',   alt: 'Autoscuola Vicenza' },
  { src: '/partner-5.png',  h: 'h-12', href: 'https://www.autoscuoleandrea.com/',   alt: 'Autoscuola Andrea' },
];

export default function Partners() {
  return (
    <section className="relative py-14 sm:py-20 border-y border-ink-100 bg-ink-50/40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-ink-200" />
        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          Già scelta dalle autoscuole più innovative
        </p>
        <div className="h-px flex-1 bg-ink-200" />
      </div>

      <Marquee speed={50} pauseOnHover>
        {PARTNERS.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-2"
          >
            <img
              src={p.src}
              alt={p.alt}
              className={`${p.h} w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100`}
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
}
