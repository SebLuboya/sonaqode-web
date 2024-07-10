import type { MetadataRoute } from "next";
import { baseUrl } from "@/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/api"],
      allow: [
        "/",
        "/about",
        "/contact",
        "/privacy-policy",
        "/corporate-culture",
        "/services/software-development",
        "/services/cyber-security",
        "/services/data-analytics",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
