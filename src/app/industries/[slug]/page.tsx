import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ContentPage from "@/components/Content/ContentPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getIndustryPage, industryPages } from "@/utils/content";

type Props = { readonly params: { readonly slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getIndustryPage(params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/industries/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default function IndustryPage({ params }: Props) {
  const page = getIndustryPage(params.slug);
  if (!page) notFound();

  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: page.title, path: `/industries/${page.slug}` },
        ]}
      />
      <ContentPage page={page} />
    </PageShell>
  );
}
