import type { MetadataRoute } from "next";
import { baseUrl } from "@/utils";
import { cyberData } from "@/data/cyberData";
import { analyticesData } from "@/data/analyticesData";
import { softwareData } from "@/data/softwareData";

export default function robots(): MetadataRoute.Robots {
  const sweServices = softwareData.map(
    (item) =>
      `/services/software-development/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
  );

  const analyticsServices = analyticesData.map(
    (item) =>
      `/services/data-analytics/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
  );

  const cyberServices = cyberData.map(
    (item) =>
      `/services/cyber-security/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
  );

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
        ...sweServices,
        ...analyticsServices,
        ...cyberServices,
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
