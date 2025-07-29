import type { MetadataRoute } from "next";
import { baseUrl } from "@/utils";
// import { cyberData } from "@/data/cyberData";
import { analyticesData } from "@/data/analyticesData";
import { softwareData } from "@/data/softwareData";

export default function sitemap(): MetadataRoute.Sitemap {
  const sweServices: MetadataRoute.Sitemap = softwareData.map((item) => ({
    url: `${baseUrl}/services/software-development/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
  }));

  const analyticsServices: MetadataRoute.Sitemap = analyticesData.map(
    (item) => ({
      url: `${baseUrl}/services/data-analytics/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    }),
  );

  // const cyberServices: MetadataRoute.Sitemap = cyberData.map((item) => ({
  //   url: `${baseUrl}/services/cyber-security/${item.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase()}`,
  //   lastModified: new Date(),
  //   changeFrequency: "yearly",
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/software-development`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/services/cyber-security`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/services/data-analytics`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/corporate-culture`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    ...analyticsServices,
    ...sweServices,
    // ...cyberServices,
  ];
}
