"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-[#fbfbfb] min-h-[70vh] flex items-center">
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-3">
          500
        </p>
        <h1 className="text-4xl font-black tracking-tight uppercase text-brand-dark">
          Noe gikk galt
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Vi klarte ikke å vise siden akkurat nå. Prøv igjen, eller kontakt SKOP
          BYGG AS direkte.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-orange text-white font-bold hover:bg-brand-dark transition-colors"
          >
            Prøv igjen
          </button>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-dark text-white font-bold hover:bg-brand-orange transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </div>
  );
}
