export const siteConfig = {
  name: "SKOP BYGG AS",
  legalName: "SKOP BYGG AS",
  defaultTitle: "SKOP BYGG AS | Byggefirma i Drammen, Buskerud",
  titleTemplate: "%s | SKOP BYGG AS",
  description:
    "SKOP BYGG AS tilbyr nybygg, tilbygg, rehabilitering, renovering, bad, kjøkken, tømrerarbeid og byggeprosjekter i Drammen, Buskerud og Norge.",
  url: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      "https://skop-bygg-as.no"
  ),
  locale: "nb_NO",
  language: "no",
  email: "skopbyg@gmail.com",
  phone: "+47 926 197 770",
  orgNumber: "926 197 770",
  address: {
    streetAddress: "Kreklingveien 11",
    postalCode: "3030",
    addressLocality: "Drammen",
    addressRegion: "Buskerud",
    addressCountry: "NO",
  },
  geo: {
    latitude: 59.7439,
    longitude: 10.2045,
  },
  areasServed: ["Drammen", "Buskerud", "Oslo", "Norge"],
  sameAs: [] as string[],
  themeColor: "#ff7a00",
  logo: "/images/logo-skop-bygg.png",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
  },
} as const;

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export const seoKeywords = [
  "SKOP BYGG AS",
  "Skop Bygg",
  "byggefirma Drammen",
  "byggfirma Drammen",
  "tømrer Drammen",
  "nybygg Drammen",
  "tilbygg Drammen",
  "påbygg Drammen",
  "renovering Drammen",
  "rehabilitering Buskerud",
  "bad Drammen",
  "kjøkken Drammen",
  "tak Drammen",
  "fasade Drammen",
  "terrasse Drammen",
  "garasje Drammen",
  "hytte Buskerud",
  "byggefirma Buskerud",
  "construction company Norway",
];
