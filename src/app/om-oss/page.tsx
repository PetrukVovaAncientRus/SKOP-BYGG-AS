import { Shield, Users, Building, HelpCircle } from 'lucide-react';

export default function OmOssPage() {
  return (
    <div className="bg-[#fbfbfb]">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Om SKOP BYGG AS</h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">Møt et erfarent og flerkulturell entreprenørteam stasjonert i Drammen.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="bg-white border p-8 rounded-xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-dark">
            <Users className="text-brand-orange" /> Hvem Er Vi?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SKOP BYGG AS er et aksjeselskap etablert med kjernekompetanse innen moderne tømrerarbeid, mur og overflatebehandling. Vi teller i dag rundt 5 faste, dyktige medarbeidere som jobber tett sammen for å levere solide resultater. Vår styrke ligger i vår internasjonale erfaring og evnen til å løse komplekse utfordringer effektivt.
          </p>
        </div>

        {/* Verdier konfigurert som byggeklosser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-lg w-max mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Trygghet og Lovlighet</h3>
            <p className="text-sm text-gray-600">
              Vi er et fullt registrert norsk aksjeselskap (Org nr: 926 197 770) som følger alle gjeldende HMS-regler og norske standarder for bygghåndverk.
            </p>
          </div>

          <div className="bg-white border p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-lg w-max mb-4">
              <Building size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Allsidighet</h3>
            <p className="text-sm text-gray-600">
              Takket være våre medarbeideres brede kompetansebakgrunn og vårt nettverk, håndterer vi både små private snekkerjobber og større import-/eksportrelaterte byggevareleveranser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}