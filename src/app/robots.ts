import type { MetadataRoute } from "next";

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
    sitemap: "https://sonaqode.co.uk/sitemap.xml",
  };
}
