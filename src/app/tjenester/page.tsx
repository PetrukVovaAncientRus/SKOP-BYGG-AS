'use client';

import React, { useState } from 'react';
import { 
  Home, 
  Layers, 
  RefreshCw, 
  Hammer, 
  HardHat, 
  Paintbrush, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ClipboardCheck, 
  Wrench, 
  FileText 
} from 'lucide-react';
import Link from 'next/link';

interface Tjeneste {
  title: string;
  desc: string;
  icon: React.ReactNode;
  detaljertBeskrivelse: string;
  inkludert: string[];
  prosess: { fane: string; tittel: string; tekst: string }[];
}

export default function TjenesterPage() {
  const [valgtTjeneste, setValgtTjeneste] = useState<Tjeneste | null>(null);

  const alleTjenester: Tjeneste[] = [
    { 
      title: "Nye Bygg", 
      desc: "Vi setter opp din nye bolig, hytte eller garasje fra grunnmur til nøkkelferdig overlevering.", 
      icon: <Home size={24} />,
      detaljertBeskrivelse: "Vi leverer komplette nybygg tilpasset tøffe skandinaviske værforhold, enten som totalentreprenør eller underleverandør. Vi sikrer at alle gjeldende TEK17-forskrifter følges til punkt og prikke under hele prosessen.",
      inkludert: [
        "Eneboliger og tomannsboliger",
        "Moderne og tradisjonelle hytter / fritidsboliger",
        "Garasjer, boder og funksjonelle uthus",
        "Bistand med søknadsprosesser og dokumentasjon til kommunen"
      ],
      prosess: [
        { fane: "01", tittel: "Planlegging & Tegning", tekst: "Vi går gjennom dine skisser eller arkitekttegninger, gjør justeringer og legger en realistisk tidsplan." },
        { fane: "02", tittel: "Grunnarbeid & Støping", tekst: "Etablering av solid såle og grunnmur med riktig isolasjon for å forhindre fremtidige fuktskader." },
        { fane: "03", tittel: "Tømrerarbeid & Tetting", tekst: "Oppføring av bindingsverk, reising av takstoler, isolering og montering av tette utvendige flater." },
        { fane: "04", tittel: "Innvendig finish", tekst: "Gipsing, overflatebehandling, listing og tekniske installasjoner frem til ferdig overlevering." }
      ]
    },
    { 
      title: "Tilbygg & Påbygg", 
      desc: "Utvid eksisterende areal med sømløs integrasjon i eksisterende arkitektur.", 
      icon: <Layers size={24} />,
      detaljertBeskrivelse: "Trenger familien mer plass? Vi utvider boligen din enten i bredden (tilbygg) eller i høyden (påbygg). Vårt fokus er at utvidelsen integreres harmonisk med det eksisterende husets stil, linjer og bærestruktur.",
      inkludert: [
        "Utvidelse av stue, inngangsparti eller kjøkken",
        "Ekstra soverom, kontor eller ekstra bad",
        "Egen utleiedel eller integrert generasjonsbolig",
        "Takløft, arker og takoppbygging"
      ],
      prosess: [
        { fane: "01", tittel: "Tilstandsvurdering", tekst: "Vi sjekker bæreevnen og tilstanden til den eksisterende strukturen for å sikre et trygt fundament." },
        { fane: "02", tittel: "Søknadshåndtering", tekst: "Vi kontrollerer prosjektet opp mot lokale reguleringsplaner og klargjør nabovarsel." },
        { fane: "03", tittel: "Sømløs sammenføying", tekst: "Det mest kritiske punktet der gammelt møter nytt tettes 100% mot sørnorsk vær og vind." },
        { fane: "04", tittel: "Ferdigstilling", tekst: "Åpning av vegger mellom gammel og ny del, og innvendig snekkerarbeid etter avtalt standard." }
      ]
    },
    { 
      title: "Rehabilitering", 
      desc: "Vi utfører oppgradering av fasader, etterisolering og totalfornyelse av eldre eiendommer.", 
      icon: <RefreshCw size={24} />,
      detaljertBeskrivelse: "Å modernisere et eldre bygg øker både bokomforten, reduserer strømregningen og løfter eiendomsverdien betraktelig. Vi oppgraderer isolasjonsevnen og reparerer skader på en bærekraftig måte.",
      inkludert: [
        "Etterisolering av yttervegger og kalde taklofter",
        "Utskifting av utslitt utvendig kledning (kledningbytte)",
        "Bytte av eldre, utette vinduer og ytterdører",
        "Totalrenovering innvendig (gulv, vegger og tak)"
      ],
      prosess: [
        { fane: "01", tittel: "Kartlegging av energitap", tekst: "Vi identifiserer hvor boligen lekker varme og avdekker eventuelle skjulte råteskader." },
        { fane: "02", tittel: "Miljøvennlig demontering", tekst: "Fjerning av gamle materialer og sortering på godkjent avfallsmottak i Drammen." },
        { fane: "03", tittel: "Isolering & Fuktsikring", tekst: "Montering av moderne isolasjonsmaterialer, vindtetting og fuktsperre i henhold til standarder." },
        { fane: "04", tittel: "Ny overflate", tekst: "Montering av ny kledning eller plater med fokus på lang levetid og minimalt vedlikehold." }
      ]
    },
    {
      title: "Innvendig renovering", 
      desc: "Innvendig oppussing og renovering – alt fra gulvlegging, vindusutskifting til montering av peis.", 
      icon: <Hammer size={24} />,
      detaljertBeskrivelse: "Vi forvandler boligen din innvendig med solid tømrerhåndverk. Våre erfarne fagfolk tar seg av hele prosessen, fra fjerning av gamle overflater til millimeterpresis montering av nye gulv, vinduer og komplette peisløsninger.",
      inkludert: [
        "Utskifting og nøyaktig tilpassing av vinduer og innvendige dører",
        "Fjerning av gammelt gulv og legging av ny parkett, laminat eller tregulv",
        "Montering og installasjon av peis, ildsted og tilhørende brannmursplater",
        "Innvendig snekkerarbeid som lister, utforinger og oppsetting av lettvegger"
      ],
      prosess: [
        { fane: "01", tittel: "Forberedelse", tekst: "Vi fjerner gamle overflater og klargjør gulv, vegger og peisområdet for fornyelse." },
        { fane: "02", tittel: "Innvendig arbeid", tekst: "Legging av nytt gulv og oppbygging av nødvendige rammeverk med laserpresisjon." },
        { fane: "03", tittel: "Montering", tekst: "Innsetting av vinduer og montering av peis i henhold til gjeldende sikkerhetskrav." },
        { fane: "04", tittel: "Detaljarbeid", tekst: "Montering av listverk og overganger som gir det rene, profesjonelle uttrykket." }
      ]
    },
    { 
      title: "Murerarbeid", 
      desc: "Grunnmur, støping av såle, pipe-rehabilitering og flislegging med høy presisjon.", 
      icon: <HardHat size={24} />,
      detaljertBeskrivelse: "Mur- og betongarbeid krever ekstrem nøyaktighet da det legger fundamentet for alt påfølgende arbeid. Vi utfører alt fra tunge støpeoppdrag til finere flislegging i våtrom.",
      inkludert: [
        "Støping av gulv, ringmurer og punktfundamenter",
        "Oppsetting av Leca-blokker og grunnmursplater",
        "Rehabilitering, pussing og utbedring av eldre piper",
        "Flislegging av bad, vaskerom og soner over kjøkkenbenk"
      ],
      prosess: [
        { fane: "01", tittel: "Grunnarbeid", tekst: "Nivellering med laser for å sikre en 100% plan og stabil flate." },
        { fane: "02", tittel: "Forskaling & Armering", tekst: "Bygging av solide støpeformer og binding av jernstenger for maksimal strekkfasthet." },
        { fane: "03", tittel: "Betongfylling", tekst: "Utstøping av kvalitetsbetong med riktig herdetid og vibrering for å unngå luftlommer." },
        { fane: "04", tittel: "Sliping & Finish", tekst: "Glattsliping av betongoverflater eller nøyaktig legging av fliser med jevne fuger." }
      ]
    },
    { 
      title: "Malerarbeid", 
      desc: "Innvendig og utvendig overflatebehandling, sparkling og klargjøring for kommersiell bruk.", 
      icon: <Paintbrush size={24} />,
      detaljertBeskrivelse: "Det visuelle sluttresultatet av et bygg avhenger av et grundig malerarbeid. Vi legger vår stolthet i et perfekt forarbeid (sparkling/pussing) slik at sluttresultatet blir helt slett og holdbart.",
      inkludert: [
        "Innvendig sparkling og maling av gipsvegger og tak",
        "Utvendig fasademaling og beising med værbestandige produkter",
        "Maling av listverk, innvendige dører og vinduskarmer",
        "Fjerning av gammelt tapet, helsparkling og tapetsering"
      ],
      prosess: [
        { fane: "01", tittel: "Klargjøring & Maskering", tekst: "Grundig tildekking av gulv og faste installasjoner for å unngå søl." },
        { fane: "02", tittel: "Sparkling & Pussing", tekst: "Minst to strøk med kvalitetssparkel og pussing med støvavsug for helt glatte vegger." },
        { fane: "03", tittel: "Grunning", tekst: "Påføring av grunning for å sikre optimal heft og ensartet glans i toppstrøket." },
        { fane: "04", tittel: "Toppstrøk", tekst: "Presis maling med profesjonelt verktøy i fargene og glansgraden du har valgt." }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner / Header */}
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Våre Tjenester</h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">Profesjonell og forskriftsmessig utførelse innen alle byggefag i Viken og omegn. Klikk på en tjeneste for detaljer.</p>
        </div>
      </div>

      {/* Grid av tjenester */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alleTjenester.map((tjeneste, index) => (
            <div 
              key={index}
              onClick={() => setValgtTjeneste(tjeneste)}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 mb-5">
                  {tjeneste.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors duration-200 mb-2">
                  {tjeneste.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {tjeneste.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-mono uppercase tracking-wider text-gray-500 group-hover:text-brand-orange transition-colors">
                <span>Se full spesifikasjon</span>
                <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bunn-seksjon */}
        <div className="mt-16 bg-slate-900 p-8 rounded-xl text-center max-w-3xl mx-auto text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Wrench size={120} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-brand-orange">Skreddersydde prosjekter?</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            Mange oppdrag kombinerer flere av våre tjenester som en totalentreprise. Kontakt oss direkte for en uforpliktende prat eller gratis befaring.
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-orange hover:bg-orange-600 transition-colors"
          >
            Ta kontakt via e-post
          </Link>
        </div>
      </div>

      {/* MODAL / DETALJERT VISNING */}
      {valgtTjeneste && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn">
          {/* Klikk utenfor lukker modulen */}
          <div className="absolute inset-0" onClick={() => setValgtTjeneste(null)}></div>
          
          {/* Selve kortet */}
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-gray-100 flex flex-col animate-slideUp">
            
            {/* Header i modulen */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-50 text-brand-orange rounded-lg">
                  {valgtTjeneste.icon}
                </div>
                <h2 className="text-2xl font-black tracking-tight text-gray-900 uppercase">
                  {valgtTjeneste.title}
                </h2>
              </div>
              <button 
                onClick={() => setValgtTjeneste(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Lukk"
              >
                <X size={20} />
              </button>
            </div>

            {/* Innhold i modulen */}
            <div className="p-6 md:p-8 space-y-8 flex-1">
              
              {/* Beskrivelse */}
              <div>
                <p className="text-gray-700 text-base leading-relaxed font-normal">
                  {valgtTjeneste.detaljertBeskrivelse}
                </p>
              </div>

              {/* Hva vi gjør (Sjekkliste) */}
              <div className="bg-gray-50 border border-gray-200/60 p-5 rounded-xl">
                <h4 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                  <ClipboardCheck size={16} className="mr-2 text-brand-orange" />
                  Hva som inngår i faget:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {valgtTjeneste.inkludert.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 size={16} className="text-brand-orange mr-2 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arbeidsprosess (Tegningsfaser) */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 flex items-center">
                  <FileText size={16} className="mr-2 text-brand-orange" />
                  Arbeidsprosess — trinn for trinn
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {valgtTjeneste.prosess.map((steg, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-300 transition-colors">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-mono font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded">
                          FASE {steg.fane}
                        </span>
                        <h5 className="font-bold text-gray-900 text-sm">{steg.tittel}</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">{steg.tekst}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / CTA i modulen */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 sticky bottom-0 flex flex-col sm:flex-row items-center justify-between gap-3 z-20 rounded-b-xl">
              <span className="text-xs text-gray-500 text-center sm:text-left">
                Alle oppdrag utføres med skriftlig kontrakt og garanti.
              </span>
              <Link 
                href={`/kontakt?tjeneste=${encodeURIComponent(valgtTjeneste.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
              >
                <span>Be om uforpliktende tilbud</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}