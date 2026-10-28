import type { MetadataRoute } from "next";
import { siteConfig } from "@/utils/site";
import { industryPages, servicePages } from "@/utils/content";
import { allProjects } from "@/utils/works";
import { titleConverter } from "@/utils/workTitleConverter";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"];

  const routes = [
    ...staticRoutes,
    ...servicePages.map((page) => `/services/${page.slug}`),
    ...industryPages.map((page) => `/industries/${page.slug}`),
    ...allProjects.map(
      (project) => `/works/${encodeURIComponent(titleConverter(project.title))}`
    ),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
