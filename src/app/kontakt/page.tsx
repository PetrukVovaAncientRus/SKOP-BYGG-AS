"use client";

import Link from "next/link";
import { useState } from "react";
import { Clipboard, Mail, MapPin, Phone, Send } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg(data.error || "Noe gikk galt. Prøv igjen.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Kunne ikke nå serveren. Sjekk internettforbindelsen din.");
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <nav aria-label="Brodsmulesti" className="text-xs text-neutral-500">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-orange">
                  Hjem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-neutral-300">
                Kontakt
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Kontakt byggeleder
          </h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">
            Svar innen 24 timer på virkedager.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <section className="md:col-span-5 space-y-6 bg-gray-50 p-8 rounded-xl border">
          <h2 className="text-xl font-bold text-brand-dark mb-4">
            Firmainformasjon
          </h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-orange mt-1 shrink-0" size={18} />
              <span>
                <strong>SKOP BYGG AS</strong>
                <br />
                Kreklingveien 11, 3030 Drammen
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-brand-orange" size={18} />
              <a href="tel:+47926197770" className="hover:underline">
                +47 926 197 770
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-brand-orange" size={18} />
              <a href="mailto:skopbyg@gmail.com" className="hover:underline">
                skopbyg@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 text-xs font-mono text-gray-400">
            Organisasjonsnummer: 926 197 770 MVA
          </div>
        </section>

        <section className="md:col-span-7 bg-white border-4 border-neutral-300 rounded-xl shadow-xl relative overflow-hidden">
          <div className="bg-neutral-400 h-8 w-1/3 mx-auto rounded-b-lg flex items-center justify-center shadow-inner relative z-10">
            <div className="w-4 h-4 bg-neutral-600 rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-[#fffdfa]">
            <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-4">
              <Clipboard className="text-brand-orange" size={20} />
              <h2 className="text-lg font-black uppercase text-gray-700 tracking-tight">
                Anbudsskjema / forespørsel
              </h2>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                Navn / firma *
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-2 border-gray-200 p-2.5 rounded focus:border-brand-orange outline-none text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  E-postadresse *
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-2 border-gray-200 p-2.5 rounded focus:border-brand-orange outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-2 border-gray-200 p-2.5 rounded focus:border-brand-orange outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                Beskrivelse av oppdraget *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Beskriv prosjektet ditt, for eksempel tilbygg, bad, kjøkken, renovering eller tømrerarbeid."
                className="w-full border-2 border-gray-200 p-2.5 rounded focus:border-brand-orange outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-brand-orange text-white py-3.5 rounded font-bold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 shadow-md disabled:bg-gray-400"
            >
              {status === "loading" ? (
                "Sender forespørsel..."
              ) : (
                <>
                  Send inn forespørsel <Send size={16} />
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded text-sm text-center font-bold">
                  Takk! Din forespørsel er mottatt. Vi kontakter deg fortløpende
                  for befaring.
                </p>
              )}
              {status === "error" && (
                <p className="text-rose-700 bg-rose-50 border border-rose-200 p-3 rounded text-sm text-center">
                  {errorMsg ||
                    "Noe gikk galt. Vennligst prøv igjen eller ring oss direkte."}
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
