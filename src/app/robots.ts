import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rainbowentertainment.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/" // Do not crawl admin leads dashboard
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
