import type { Metadata } from "next";
import { absoluteUrl, seoKeywords, siteConfig } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  images = [siteConfig.logo],
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const imageUrls = images.map((image) =>
    image.startsWith("http") ? image : absoluteUrl(image)
  );

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: imageUrls.map((image) => ({
        url: image,
        alt: `${siteConfig.name} - byggefirma i Drammen`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrls,
    },
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    category: "construction",
    verification: {
      google: siteConfig.verification.google,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.areasServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness", "ConstructionCompany"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logo),
        image: absoluteUrl(siteConfig.logo),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: "$$",
        taxID: siteConfig.orgNumber,
        ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          postalCode: siteConfig.address.postalCode,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          addressCountry: siteConfig.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        areaServed: siteConfig.areasServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            contactType: "customer service",
            areaServed: "NO",
            availableLanguage: ["Norwegian", "English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: siteConfig.language,
      },
    ],
  };
}
