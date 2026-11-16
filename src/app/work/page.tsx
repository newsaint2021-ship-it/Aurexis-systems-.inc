import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/Content/PageHero";
import Works from "@/components/Home/Works";
import FooterTransition from "@/components/Home/FooterTransition";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Selected Digital Work",
  description:
    "Selected websites, e-commerce storefronts and digital experiments designed and engineered by Aurexis Digital Studio. Grounded in brand expression and technical craft.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Digital Work | Aurexis",
    description:
      "Selected websites, e-commerce storefronts and digital experiments designed and engineered by Aurexis Digital Studio. Grounded in brand expression and technical craft.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />
      <PageHero
        eyebrow="Portfolio"
        headline={["Selected", "digital work"]}
        intro="A selection of e-commerce storefronts, brand websites and digital design explorations. Each project represents our commitment to considered aesthetics, intuitive interaction and engineering craft."
        secondaryCta={{ text: "Start a Project", link: "/contact" }}
      />
      <Works />
      <FooterTransition />
    </PageShell>
  );
}
