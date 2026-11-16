import React from "react";
import { siteConfig } from "@/utils/site";

function JsonLd({ data }: { readonly data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  readonly items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  readonly name: string;
  readonly description: string;
  readonly path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType: name,
        url: `${siteConfig.url}${path}`,
        provider: {
          "@type": "ProfessionalService",
          name: siteConfig.name,
          url: siteConfig.url,
          founder: {
            "@type": "Person",
            name: siteConfig.founder,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.city,
            addressCountry: siteConfig.countryCode,
          },
        },
      }}
    />
  );
}

export default JsonLd;
