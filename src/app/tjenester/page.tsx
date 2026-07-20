"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Hammer,
  HardHat,
  Home,
  Layers,
  Paintbrush,
  RefreshCw,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Service, services } from "@/lib/services";

const iconBySlug: Record<string, React.ReactNode> = {
  nybygg: <Home size={24} />,
  tilbygg: <Layers size={24} />,
  pabygg: <Layers size={24} />,
  rehabilitering: <RefreshCw size={24} />,
  renovering: <Hammer size={24} />,
  tomrer: <Hammer size={24} />,
  bad: <HardHat size={24} />,
  kjokken: <Hammer size={24} />,
  tak: <HardHat size={24} />,
  fasade: <Paintbrush size={24} />,
  terrasse: <Wrench size={24} />,
  garasje: <Home size={24} />,
  hytte: <Home size={24} />,
};

export default function TjenesterPage() {
  const [valgtTjeneste, setValgtTjeneste] = useState<Service | null>(null);

  const openService = (service: Service) => {
    setValgtTjeneste(service);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <Breadcrumbs
            items={[
              { name: "Hjem", path: "/" },
              { name: "Tjenester", path: "/tjenester" },
            ]}
          />
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Vare tjenester
          </h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">
            Profesjonell utforelse innen nybygg, tilbygg, pabygg,
            rehabilitering, renovering, bad, kjokken, tak, fasade og
            tomrerarbeid i Drammen, Buskerud og Oslo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((tjeneste) => (
            <div
              key={tjeneste.slug}
              role="button"
              tabIndex={0}
              onClick={() => openService(tjeneste)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openService(tjeneste);
                }
              }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              aria-label={`Se detaljer om ${tjeneste.shortTitle}`}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 mb-5">
                  {iconBySlug[tjeneste.slug]}
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors duration-200 mb-2">
                  {tjeneste.shortTitle}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {tjeneste.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-mono uppercase tracking-wider text-gray-500 group-hover:text-brand-orange transition-colors">
                <span>Se full spesifikasjon</span>
                <ArrowRight
                  size={14}
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-xl text-center max-w-3xl mx-auto text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Wrench size={120} />
          </div>
          <h2 className="text-xl font-bold mb-2 text-brand-orange">
            Skreddersydde prosjekter?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            Mange oppdrag kombinerer flere av vare tjenester som en
            totalentreprise. Kontakt oss direkte for en uforpliktende prat eller
            gratis befaring.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-orange hover:bg-orange-600 transition-colors"
          >
            Ta kontakt via e-post
          </Link>
        </div>
      </div>

      {valgtTjeneste && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="absolute inset-0"
            onClick={() => setValgtTjeneste(null)}
          />

          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-gray-100 flex flex-col animate-slideUp">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-50 text-brand-orange rounded-lg">
                  {iconBySlug[valgtTjeneste.slug]}
                </div>
                <h2
                  id="service-modal-title"
                  className="text-2xl font-black tracking-tight text-gray-900 uppercase"
                >
                  {valgtTjeneste.shortTitle}
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

            <div className="p-6 md:p-8 space-y-8 flex-1">
              <div>
                <p className="text-gray-700 text-base leading-relaxed font-normal">
                  {valgtTjeneste.description}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200/60 p-5 rounded-xl">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                  <ClipboardCheck size={16} className="mr-2 text-brand-orange" />
                  Hva som inngar i faget:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {valgtTjeneste.included.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2
                        size={16}
                        className="text-brand-orange mr-2 mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 flex items-center">
                  <FileText size={16} className="mr-2 text-brand-orange" />
                  Arbeidsprosess - trinn for trinn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {valgtTjeneste.process.map((steg, idx) => (
                    <div
                      key={steg.title}
                      className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-mono font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded">
                          FASE {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-bold text-gray-900 text-sm">
                          {steg.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {steg.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 sticky bottom-0 flex flex-col sm:flex-row items-center justify-between gap-3 z-20 rounded-b-xl">
              <Link
                href={`/services/${valgtTjeneste.slug}`}
                className="text-xs text-gray-500 text-center sm:text-left hover:text-brand-orange"
              >
                Les mer om {valgtTjeneste.shortTitle.toLowerCase()}
              </Link>
              <Link
                href={`/kontakt?tjeneste=${encodeURIComponent(
                  valgtTjeneste.shortTitle
                )}`}
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
