import type { MetadataRoute } from "next";
import { serviceRoutes } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/tjenester",
  "/om-oss",
  "/prosjekter",
  "/anmeldelser",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services/") ? 0.85 : 0.75,
  }));
}
