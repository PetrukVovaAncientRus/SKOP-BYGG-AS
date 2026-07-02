import type { Metadata } from "next";
import "./globals.css"; // Sørg for at denne inneholder @tailwind direktivene
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SKOP BYGG AS | Entreprenør og Tømrer i Drammen",
  description: "SKOP BYGG AS tilbyr profesjonelle bygg- og renoveringstjenester i Drammen og omegn. Nybygg, tilbygg, rehabilitering og murerarbeid.",
  keywords: ["Byggmester Drammen", "Renovering", "SKOP BYGG", "Tilbygg", "Snekker", "Murer"],
  authors: [{ name: "SKOP BYGG AS" }],
  openGraph: {
    title: "SKOP BYGG AS | Din Byggepartner",
    description: "Solid håndverk og profesjonell prosjektledelse fra start til slutt.",
    url: "https://www.skopbygg.no",
    siteName: "SKOP BYGG AS",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enkel strukturert JSON-LD for lokal SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "SKOP BYGG AS",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kreklingveien 11",
      "addressLocality": "Drammen",
      "postalCode": "3030",
      "addressCountry": "NO"
    },
    "telephone": "+47 926 197 770",
    "priceRange": "$$$",
    "numberOfEmployees": "5"
  };

  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fbfbfb] text-brand-dark antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}