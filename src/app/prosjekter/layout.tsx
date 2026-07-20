import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Prosjekter og referanser",
  description:
    "Se utførte byggeprosjekter fra SKOP BYGG AS i Drammen: tilbygg, terrasse, bad, rehabilitering, tak, fasade og innvendig renovering.",
  path: "/prosjekter",
  keywords: ["prosjekter Drammen", "referanser byggefirma", "renovering Drammen"],
});

export default function ProsjekterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Hjem", path: "/" },
          { name: "Prosjekter", path: "/prosjekter" },
        ])}
      />
      {children}
    </>
  );
}
