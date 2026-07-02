import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-black text-2xl tracking-wider mb-4">
            SKOP <span className="text-brand-orange">BYGG AS</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Et flerkulturelt, profesjonelt team av erfarne tømrere og håndverkere. Vi leverer kompromissløs kvalitet på alt fra mindre tilbygg til store renoveringsprosjekter.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-neutral-800 p-2 rounded max-w-max">
            <ShieldCheck size={18} className="text-brand-orange" />
            <span>Org.nr: 926 197 770 (MVA registrert)</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-4">Hurtiglenker</h4>
          <ul className="space-y-3">
            <li><Link href="/om-oss" className="hover:text-brand-orange transition-colors">Om Oss</Link></li>
            <li><Link href="/tjenester" className="hover:text-brand-orange transition-colors">Våre Tjenester</Link></li>
            <li><Link href="/prosjekter" className="hover:text-brand-orange transition-colors">Portefølje</Link></li>
            <li><Link href="/anmeldelser" className="hover:text-brand-orange transition-colors">Byggeplassrapporter</Link></li>
            <li><Link href="/kontakt" className="hover:text-brand-orange transition-colors">Kontakt Oss</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-4">Kontaktinfo</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
              <span>Kreklingveien 11,<br />3030 Drammen, Norge</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-orange" size={18} />
              <a href="tel:+47926197770" className="hover:text-brand-orange transition-colors">+47 926 197 770</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-orange" size={18} />
              <a href="mailto:info@skopbygg.no" className="hover:text-brand-orange transition-colors">kontakt@skopbygg.no</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SKOP BYGG AS. Alle rettigheter reservert. Utviklet etter skandinaviske byggestandarder.
      </div>
    </footer>
  );
}