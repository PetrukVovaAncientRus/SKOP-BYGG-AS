import CraneHero from "@/components/CraneHero";
import ServiceCard from "@/components/ServiceCard";
import ReviewNote from "@/components/ReviewNote";
import Link from "next/link";
import { Home, Layers, RefreshCw, Hammer } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Byggefirma i Drammen, Buskerud",
  description:
    "SKOP BYGG AS tilbyr nybygg, tilbygg, rehabilitering, renovering, bad, kjøkken, tømrerarbeid og byggeprosjekter i Drammen, Buskerud, Oslo og Norge.",
  path: "/",
});

export default function HomePage() {
  const previewServices = [
    {
      title: "Nybygg",
      desc: "Komplette og energieffektive boliger oppført etter norske byggestandarder.",
      icon: <Home size={20} />,
      href: "/services/nybygg",
    },
    {
      title: "Tilbygg & påbygg",
      desc: "Trenger familien mer plass? Vi utvider boligen som en naturlig del av huset.",
      icon: <Layers size={20} />,
      href: "/services/tilbygg",
    },
    {
      title: "Rehabilitering",
      desc: "Fornyelse av eldre bygg med fokus på bevaring, isolasjon og modernisering.",
      icon: <RefreshCw size={20} />,
      href: "/services/rehabilitering",
    },
    {
      title: "Tømrerarbeid",
      desc: "Alt innen bindingsverk, kledning, takarbeid, terrasse og solid innredning.",
      icon: <Hammer size={20} />,
      href: "/services/tomrer",
    },
  ];

  return (
    <div>
      <CraneHero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-brand-dark mb-4">
            Solid håndverk.{" "}
            <span className="text-brand-orange">Erfarne byggmestre.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Med base i Drammen leverer SKOP BYGG AS kvalitet i alle ledd. Vårt
            team har solid erfaring med nybygg, tilbygg, renovering, bad,
            kjøkken, tak, fasade, terrasse, garasje og tømrerarbeid i Buskerud
            og Oslo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase block mb-2">
                Hva vi gjør
              </span>
              <h2 className="text-3xl font-black text-brand-dark">
                Våre kjernetjenester
              </h2>
            </div>
            <Link
              href="/tjenester"
              className="text-brand-orange font-bold hover:underline hidden sm:block"
            >
              Se alle tjenester
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.desc}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-dark">
              Siste fra byggeplassen
            </h2>
            <p className="text-gray-500 mt-2">
              Hva våre kunder i Drammen, Buskerud og omegn sier om våre utførte
              arbeider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewNote
              author="Jan Erik L., Drammen"
              projectType="Tilbygg enebolig"
              comment="SKOP BYGG bygde nytt tilbygg på 45 kvm for oss. Utmerket kommunikasjon og ferdigstilt nøyaktig i henhold til tidsplanen."
              rating={5}
            />
            <ReviewNote
              author="Monika K., Lier"
              projectType="Totalrenovering"
              comment="Svært profesjonelt team. De pusset opp hele første etasje, inkludert gipsing, maling og nytt gulv. Anbefales på det sterkeste!"
              rating={5}
            />
            <ReviewNote
              author="Ole Petter S., Gulskogen"
              projectType="Takfornying"
              comment="Rask og effektiv utskifting av takstein på garasje og hovedhus. Meget konkurransedyktig pris og ryddig opprydning etterpå."
              rating={5}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
