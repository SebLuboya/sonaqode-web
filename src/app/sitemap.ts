import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sonaqode.co.uk";
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
  ];
}
