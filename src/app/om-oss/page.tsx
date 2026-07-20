import { Building, Shield, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Om SKOP BYGG AS",
  description:
    "Les om SKOP BYGG AS, et byggefirma i Drammen med erfarne tømrere og håndverkere for nybygg, tilbygg, rehabilitering og renovering.",
  path: "/om-oss",
  keywords: ["SKOP BYGG AS", "byggefirma Drammen", "byggfirma Buskerud"],
});

export default function OmOssPage() {
  return (
    <div className="bg-[#fbfbfb]">
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <Breadcrumbs
            items={[
              { name: "Hjem", path: "/" },
              { name: "Om oss", path: "/om-oss" },
            ]}
          />
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Om SKOP BYGG AS
          </h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">
            Møt et erfarent entreprenørteam stasjonert i Drammen.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-dark">
            <Users className="text-brand-orange" /> Hvem er vi?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SKOP BYGG AS er et norsk aksjeselskap med kjernekompetanse innen
            moderne tømrerarbeid, mur, renovering og overflatebehandling. Vi
            jobber tett sammen for å levere solide resultater for kunder i
            Drammen, Buskerud, Oslo og Norge.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Verdier">
          <div className="bg-white border p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-lg w-max mb-4">
              <Shield size={24} />
            </div>
            <h2 className="text-lg font-bold mb-2">Trygghet og lovlighet</h2>
            <p className="text-sm text-gray-600">
              Vi er et registrert norsk aksjeselskap med org.nr. 926 197 770 og
              følger gjeldende HMS-regler og norske standarder for byggarbeid.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-lg w-max mb-4">
              <Building size={24} />
            </div>
            <h2 className="text-lg font-bold mb-2">Allsidighet</h2>
            <p className="text-sm text-gray-600">
              Vi håndterer både mindre snekkerjobber og større byggeprosjekter,
              inkludert nybygg, tilbygg, påbygg, bad, kjøkken, tak, fasade,
              terrasse, garasje og rehabilitering.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
