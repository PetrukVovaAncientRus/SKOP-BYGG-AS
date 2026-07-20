import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tjenester for nybygg, tilbygg og renovering",
  description:
    "Se byggtjenester fra SKOP BYGG AS: nybygg, tilbygg, pabygg, rehabilitering, renovering, bad, kjokken, tak, fasade, terrasse, garasje og tomrerarbeid.",
  path: "/tjenester",
});

export default function TjenesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
