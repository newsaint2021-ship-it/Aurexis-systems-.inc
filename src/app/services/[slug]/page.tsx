import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ContentPage from "@/components/Content/ContentPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getServicePage, servicePages } from "@/utils/content";

type Props = { readonly params: { readonly slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
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
      <ContentPage page={page} />
    </PageShell>
  );
}
