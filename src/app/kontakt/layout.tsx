import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kontakt byggefirma i Drammen",
  description:
    "Kontakt SKOP BYGG AS for tilbud på nybygg, tilbygg, renovering, bad, kjøkken, tak, fasade og tømrerarbeid i Drammen, Buskerud og Oslo.",
  path: "/kontakt",
});

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Hjem", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      {children}
    </>
  );
}
