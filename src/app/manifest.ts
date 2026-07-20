import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "SKOP BYGG",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbfbfb",
    theme_color: siteConfig.themeColor,
    lang: siteConfig.language,
    icons: [
      {
        src: "/images/logo-skop-bygg.png",
        sizes: "240x70",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
