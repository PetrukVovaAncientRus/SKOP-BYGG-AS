import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tjenester for nybygg, tilbygg og renovering",
  description:
    "Se byggtjenester fra SKOP BYGG AS: nybygg, tilbygg, påbygg, rehabilitering, renovering, bad, kjøkken, tak, fasade, terrasse, garasje og tømrerarbeid.",
  path: "/tjenester",
});

export default function TjenesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
