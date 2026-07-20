import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Siden finnes ikke",
  description:
    "Siden du leter etter finnes ikke. Gå tilbake til SKOP BYGG AS for byggtjenester i Drammen og Buskerud.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="bg-[#fbfbfb] min-h-[70vh] flex items-center">
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-3">
          404
        </p>
        <h1 className="text-4xl font-black tracking-tight uppercase text-brand-dark">
          Siden finnes ikke
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Lenken kan være flyttet eller slettet. Gå tilbake til forsiden for å
          finne byggtjenester, prosjekter og kontaktinformasjon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-md bg-brand-orange text-white font-bold hover:bg-brand-dark transition-colors"
        >
          Til forsiden
        </Link>
      </section>
    </div>
  );
}
