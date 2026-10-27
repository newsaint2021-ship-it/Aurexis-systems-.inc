import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProjects } from "@/utils/works";
import { titleConverter } from "@/utils/workTitleConverter";
import MainPage from "@/components/WorkDetail/MainPage";
import PageShell from "@/components/PageShell";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type Props = { readonly params: { readonly title: string } };

function findProjectIndex(param: string) {
  const title = decodeURIComponent(param).toLowerCase();
  return allProjects.findIndex((item) => item.title.toLowerCase() === title);
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    title: titleConverter(project.title),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = allProjects[findProjectIndex(params.title)];
  if (!project) return {};
  const description =
    project.description1?.[0]?.slice(0, 155) ?? `${project.title} project.`;
  return {
    title: `${project.title} — Work`,
    description,
    alternates: {
      canonical: `/works/${encodeURIComponent(titleConverter(project.title))}`,
    },
  };
}

function WorkDetail({ params }: Props) {
  const index = findProjectIndex(params.title);
  if (index === -1) notFound();
  const project = allProjects[index];

  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          {
            name: project.title,
            path: `/works/${encodeURIComponent(titleConverter(project.title))}`,
          },
        ]}
      />
      <MainPage project={project} index={index} />
    </PageShell>
  );
}

export default WorkDetail;
