import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ContentPage from "@/components/Content/ContentPage";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { getServicePage, servicePages } from "@/utils/content";

type Props = { readonly params: { readonly slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return {};
  const canonicalPath = page.canonicalPath ?? `/services/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalPath,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.title, path: `/services/${page.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={page.title}
        description={page.metaDescription}
        path={`/services/${page.slug}`}
      />
      <ContentPage page={page} />
    </PageShell>
  );
}
