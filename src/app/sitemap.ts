import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/marketing/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteConfig.url}/` }];
}
