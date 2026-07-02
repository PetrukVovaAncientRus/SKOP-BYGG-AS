import ServiceCard from '@/components/ServiceCard';
import { Home, Layers, RefreshCw, Hammer, HardHat, Paintbrush, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TjenesterPage() {
  const alleTjenester = [
    { title: "Nye Bygg", desc: "Vi setter opp din nye bolig, hytte eller garasje fra grunnmur til nøkkelferdig overlevering.", icon: <Home size={22} /> },
    { title: "Tilbygg & Påbygg", desc: "Utvid eksisterende areal med sømløs integrasjon i eksisterende arkitektur.", icon: <Layers size={22} /> },
    { title: "Rehabilitering", desc: "Vi utfører oppgradering av fasader, etterisolering og totalfornyelse av eldre eiendommer.", icon: <RefreshCw size={22} /> },
    { title: "Snekring & Tømrerarbeid", desc: "Alt fra reising av skjelettstrukturer, utskifting av vinduer, dører og legging av lister.", icon: <Hammer size={22} /> },
    { title: "Murerarbeid", desc: "Grunnmur, støping av såle, pipe-rehabilitering og flislegging med høy presisjon.", icon: <HardHat size={22} /> },
    { title: "Malerarbeid", desc: "Innvendig og utvendig overflatebehandling, sparkling og klargjøring for kommersiell bruk.", icon: <Paintbrush size={22} /> },
    { title: "Generelt Byggearbeid", desc: "Små og store ad-hoc oppgaver innen vedlikehold og oppgradering av næringsbygg.", icon: <ShieldCheck size={22} /> },
    { title: "Import/Eksport Tjenester", desc: "Formidling og skaffing av spesialmaterialer til byggeprosjekter direkte fra europeiske leverandører.", icon: <ArrowRight size={22} /> },
  ];

  return (
    <div>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Våre Tjenester</h1>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">Profesjonell utførelse innen alle byggefag i Drammen og omegn.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alleTjenester.map((tjeneste, index) => (
            <ServiceCard 
              key={index} 
              title={tjeneste.title} 
              description={tjeneste.desc} 
              icon={tjeneste.icon} 
            />
          ))}
        </div>

        <div className="mt-16 bg-brand-blueprint border-2 border-dashed border-blue-400 p-8 rounded-xl text-center max-w-3xl mx-auto text-white">
          <h3 className="text-xl font-bold mb-2 text-brand-orange">Skreddersydde utfordringer?</h3>
          <p className="text-sm text-blue-200 mb-6">Vi tar gjerne på oss unike prosjekter som krever tverrfaglig ekspertise.</p>
          <Link href="/kontakt" className="bg-white text-brand-dark font-bold px-6 py-3 rounded hover:bg-brand-orange hover:text-white transition-colors inline-block text-sm">
            Be om uforpliktende befaring
          </Link>
        </div>
      </div>
    </div>
  );
}