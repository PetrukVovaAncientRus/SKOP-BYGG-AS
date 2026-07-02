import Image from 'next/image';

export default function ProsjekterPage() {
  const prosjektListe = [
    { id: 1, tittel: "Modernisering av Enebolig", sted: "Konnerud", status: "Fullført", type: "Rehabilitering" },
    { id: 2, tittel: "Oppføring av Dobbeltgarasje", sted: "Lier", status: "Fullført", type: "Nybygg" },
    { id: 3, tittel: "Fasadeendring & Etterisolering", sted: "Drammen Sentrum", status: "Fullført", type: "Snekkerarbeid" },
  ];

  return (
    <div>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Utførte Prosjekter</h1>
          <p className="text-gray-400 mt-2">Et utvalg av våre nylige byggeplasser og leveranser i regionen.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prosjektListe.map((p) => (
            <div key={p.id} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Fallback visuell plassholder for byggeplass */}
              <div className="h-48 bg-neutral-200 flex items-center justify-center text-neutral-400 font-mono text-xs relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-neutral-900/40" />
                <span className="z-10 bg-brand-dark/80 text-white px-3 py-1 rounded">Bilde: {p.tittel}</span>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{p.type}</span>
                <h3 className="text-lg font-bold text-brand-dark">{p.tittel}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-50">
                  <span>Sted: <strong>{p.sted}</strong></span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">{p.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}