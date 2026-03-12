import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5 py-16 text-center">

      {/* 404 */}
      <h1 className="text-[100px] sm:text-[120px] font-bold text-[#111] leading-none tracking-tight">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-3xl sm:text-[44px] font-bold text-[#ca8a04] mt-2 mb-2">
        PAGINA NON TROVATA!
      </p>

      <p className="text-lg text-[#6b7280] mb-10">
        Hai preso la strada sbagliata...
      </p>

      {/* Mascot with speech bubble (included in image) */}
      <img
        src="/mascot-404.png"
        alt="Mascotte Reglo arrabbiata"
        className="w-[340px] sm:w-[440px] mb-12"
      />

      {/* CTA Button */}
      <Link
        to="/"
        className="inline-block px-8 py-3.5 rounded-full bg-[#facc15] text-[#111] font-bold text-base hover:bg-[#eab308] transition-colors"
      >
        TORNA ALLA HOME
      </Link>
    </div>
  );
}
