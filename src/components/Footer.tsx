import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-white font-black text-2xl tracking-wider mb-4">
            SKOP <span className="text-brand-orange">BYGG AS</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Et profesjonelt team av erfarne tømrere og håndverkere. Vi leverer
            kvalitet på alt fra mindre tilbygg til store renoveringsprosjekter i
            Drammen, Buskerud og Oslo.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-neutral-800 p-2 rounded max-w-max">
            <ShieldCheck size={18} className="text-brand-orange" />
            <span>Org.nr: {siteConfig.orgNumber} (MVA registrert)</span>
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">Hurtiglenker</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/om-oss" className="hover:text-brand-orange transition-colors">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/tjenester" className="hover:text-brand-orange transition-colors">
                Våre tjenester
              </Link>
            </li>
            <li>
              <Link href="/services/nybygg" className="hover:text-brand-orange transition-colors">
                Nybygg
              </Link>
            </li>
            <li>
              <Link href="/services/tilbygg" className="hover:text-brand-orange transition-colors">
                Tilbygg
              </Link>
            </li>
            <li>
              <Link href="/services/bad" className="hover:text-brand-orange transition-colors">
                Bad
              </Link>
            </li>
            <li>
              <Link href="/prosjekter" className="hover:text-brand-orange transition-colors">
                Portefølje
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-brand-orange transition-colors">
                Kontakt oss
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">Kontaktinfo</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
              <span>
                {siteConfig.address.streetAddress},<br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}, Norge
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-orange" size={18} />
              <a href="tel:+47926197770" className="hover:text-brand-orange transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-orange" size={18} />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-orange transition-colors">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SKOP BYGG AS. Alle rettigheter reservert.
        | Developed by Noirin.
      </div>
    </footer>
  );
}
