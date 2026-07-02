"use strict";
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';

export default function CraneHero() {
  const liftAndSwingVariant = {
    initial: { y: 0, rotate: 0 },
    hover: { 
      y: -12, 
      rotate: [0, -2, 2, -1, 1, 0],
      transition: {
        y: { type: 'spring', stiffness: 200, damping: 15 },
        rotate: { duration: 0.6, ease: "easeInOut" }
      }
    }
  };

  // Langsom svinging av tauet og trekking med liten amplitude
  const pendulumVariant = {
    animate: {
      rotate: [-1, 1, -1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-[#f5f5f7] min-h-[85vh] flex items-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Dekorativ gjennomskinnelig bakgrunn av kranen bakfra */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 pointer-events-none z-0  opacity-50">
        <svg viewBox="0 0 400 600" className="w-full h-full object-cover text-brand-orange fill-current">
          <rect x="300" y="150" width="12" height="450" />
          <line x1="300" y1="150" x2="312" y2="600" stroke="currentColor" strokeWidth="4" />
          <rect x="50" y="140" width="350" height="10" />
          <line x1="300" y1="140" x2="260" y2="80" stroke="currentColor" strokeWidth="4" />
          <line x1="260" y1="80" x2="306" y2="140" stroke="currentColor" strokeWidth="4" />
          <rect x="350" y="145" width="50" height="20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Ditt lokale byggefirma i Drammen</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-brand-dark tracking-tight leading-none">
            Vi Realiserer <br />
            <span className="text-brand-orange">Dine Byggedrømmer</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            SKOP BYGG AS er et solid flerkulturelt team med bred erfaring innen nybygg, tilbygg og totalrehabilitering. Vi kombinerer skandinavisk presisjon med solid mekanisk gjennomføringskraft.
          </p>

          {/* Interaktive knapper */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <motion.div
              variants={liftAndSwingVariant}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <Link 
                href="/kontakt" 
                className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-md font-bold shadow-[0_6px_0_#d46600] active:translate-y-[6px] active:shadow-none transition-all duration-75 text-lg"
              >
                Start Prosjekt <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              variants={liftAndSwingVariant}
              initial="initial"
              whileHover="hover"
            >
              <Link 
                href="/tjenester" 
                className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-md font-bold shadow-[0_6px_0_#000000] active:translate-y-[6px] active:shadow-none transition-all duration-75 text-lg"
              >
                Våre Tjenester <Wrench size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Høyre kolonne: Plan over traverskran, kabel og svinghus */}
        <div className="md:col-span-5 hidden md:flex flex-col items-center relative h-[600px] justify-start pt-4">

          {/* Enkel pendelblokk: Tau + krok + tegning */}
          <motion.div
            variants={pendulumVariant}
            animate="animate"
            style={{ transformOrigin: "top center" }}
            className="w-full flex flex-col items-center pt-8 z-10 origin-top"
          >
            {/* Krankabel */}
            <div className="absolute top-12 w-[4px] h-28 bg-brand-orange border-l border-dashed border-orange-300 relative opacity-50">
              {/* En konstruksjonskrok som holder tegningen nøyaktig i midten */}
              <div className="absolute -bottom-3 -left-[7px] w-4 h-4 text-brand-orange flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
                  <path d="M12 2v14M12 16c-2 0-4 1.5-4 3.5S10 23 12 23s4-1.5 4-3.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Blåkopi med en minimalistisk husplan */}
            <div className="w-full mt-2 bg-brand-blueprint border-2 border-blue-500/30 p-5 rounded-xl shadow-2xl text-blue-200 font-mono text-xs space-y-4 backdrop-blur-sm bg-blue-950/95 transition-colors duration-300 hover:border-blue-400/50">
              
              {/* Tegningsoverskrift */}
              <div className="border-b border-blue-800/60 pb-2 flex justify-between items-center text-[10px] tracking-wider text-blue-400">
                <span className="font-bold">SKOP BYGG AS // PROSJEKTSKISSE</span>
                <span className="text-brand-orange font-bold">REV. 2026</span>
              </div>

              {/* Interaktivt tegnefelt: Vektorhusfasade */}
              <div className="h-44 border border-blue-800/50 rounded-lg relative bg-blue-950/40 overflow-hidden flex items-center justify-center">
                {/* Bakgrunnsteknikknett */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:14px_14px]" />
                
                {/* Minimalistisk vektorskisse av et hus */}
                <svg viewBox="0 0 300 160" className="w-4/5 h-4/5 text-blue-300 stroke-current fill-none relative z-10" strokeWidth="1.2">
                  {/* Fasttelefon */}
                  <line x1="10" y1="130" x2="290" y2="130" strokeWidth="1.5" className="opacity-80" />
                  
                  {/* Hovedomrisset av huset */}
                  <rect x="40" y="60" width="130" height="70" />
                  {/* Tak */}
                  <polygon points="40,60 105,25 170,60" strokeLinejoin="round" />
                  
                  {/* Modulær utvidelse / Tilbygg (uthevet med signaturoransje) */}
                  <rect x="170" y="75" width="70" height="55" stroke="#ff7a00" strokeWidth="1.5" />
                  <path d="M 170,75 L 205,53 L 240,75" stroke="#ff7a00" strokeWidth="1.5" strokeLinejoin="round" />
                  
                  {/* Vinduer og dører i hovedbygningen */}
                  <rect x="65" y="80" width="30" height="22" className="opacity-70" />
                  <line x1="80" y1="80" x2="80" y2="102" className="opacity-50" />
                  <rect x="120" y="85" width="25" height="45" className="opacity-70" /> {/* Дверь */}
                  <circle cx="125" cy="108" r="1" fill="currentColor" />
                  
                  {/* Vindu på utvidelsen (oransje) */}
                  <rect x="190" y="90" width="30" height="20" stroke="#ff7a00" className="opacity-90" />
                  
                  {/* Dimensjonslinjer for arkitektonisk utvidelse */}
                  <line x1="40" y1="144" x2="170" y2="144" strokeWidth="0.8" className="opacity-50" />
                  <path d="M40,141 L40,147 M170,141 L170,147" />
                  <text x="105" y="140" fontSize="8" fill="currentColor" textAnchor="middle" className="font-mono">9.50 m</text>
                  
                  <line x1="170" y1="144" x2="240" y2="144" stroke="#ff7a00" strokeWidth="0.8" className="opacity-60" />
                  <path d="M170,141 L170,147 M240,141 L240,147" stroke="#ff7a00" />
                  <text x="205" y="140" fontSize="8" fill="#ff7a00" textAnchor="middle" className="font-mono">4.25 m</text>
                  
                  {/* Høyde */}
                  <line x1="260" y1="25" x2="260" y2="130" strokeWidth="0.8" className="opacity-50" />
                  <path d="M257,25 L263,25 M257,130 L263,130" />
                  <text x="272" y="82" fontSize="8" fill="currentColor" textAnchor="middle" transform="rotate(90 272 82)" className="font-mono">6.80 m</text>
                </svg>

                <div className="absolute bottom-2 right-2 text-[9px] font-bold uppercase tracking-widest text-blue-500/80 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-900">
                  Fasade Vest
                </div>
              </div>

              {/* Hjørnekonstruksjonsstempel med tekniske data */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] pt-1 border-t border-blue-900/60 text-blue-300">
                <div className="space-y-0.5">
                  <span className="text-[8px] text-blue-500 block font-bold uppercase">Målestokk</span>
                  <div className="font-bold text-blue-100">1:50 (A3-Format)</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] text-blue-500 block font-bold uppercase">Lokasjon</span>
                  <div className="font-bold text-blue-100">Drammen, Norge</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] text-blue-500 block font-bold uppercase">Status</span>
                  <div className="inline-flex items-center gap-1 font-bold text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-900/50 text-[9px]">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" /> GODKJENT BYGG
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] text-blue-500 block font-bold uppercase">Ansvarlig</span>
                  <div className="font-bold text-blue-100">SKOP BYGG TEAM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}