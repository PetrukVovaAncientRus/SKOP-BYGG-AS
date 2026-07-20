import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { createMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faq)} />

      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <Breadcrumbs
            items={[
              { name: "Hjem", path: "/" },
              { name: "Tjenester", path: "/tjenester" },
              { name: service.shortTitle, path: `/services/${service.slug}` },
            ]}
          />
          <h1 className="text-4xl font-black tracking-tight uppercase">
            {service.title}
          </h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">
            {service.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-gray-900">
              Byggtjeneste levert av SKOP BYGG AS
            </h2>
            <p className="text-gray-700 leading-relaxed mt-3">
              SKOP BYGG AS er et byggefirma i Drammen som hjelper private og
              profesjonelle kunder med {service.shortTitle.toLowerCase()} i
              Drammen, Buskerud, Oslo og ellers i Norge etter avtale.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200/60 p-5 rounded-xl">
            <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3 flex items-center">
              <ClipboardCheck size={16} className="mr-2 text-brand-orange" />
              Hva som inngår
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {service.included.map((item) => (
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
            <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 flex items-center">
              <FileText size={16} className="mr-2 text-brand-orange" />
              Arbeidsprosess
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded">
                      FASE {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-gray-900">
              Ofte stilte spørsmål
            </h2>
            <div className="mt-4 space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.question}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    {item.question}
                  </summary>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 p-6 rounded-xl text-white sticky top-28">
            <h2 className="text-xl font-bold text-brand-orange">
              Be om tilbud
            </h2>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Fortell oss hva du vil bygge eller renovere, så tar vi kontakt
              for en uforpliktende prat.
            </p>
            <Link
              href={`/kontakt?tjeneste=${encodeURIComponent(service.shortTitle)}`}
              className="mt-6 w-full inline-flex items-center justify-center px-5 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
            >
              <span>Kontakt SKOP BYGG AS</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
