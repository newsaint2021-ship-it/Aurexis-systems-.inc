import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/Content/PageHero";
import Works from "@/components/Home/Works";
import FooterTransition from "@/components/Home/FooterTransition";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected website, e-commerce and digital product work from Aurexis Systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Work"
        headline={["Selected", "projects"]}
        intro="A selection of websites, online stores and digital products. Each entry outlines the project type, our contribution and links to the live work where available."
      />
      <Works />
      <FooterTransition />
    </PageShell>
  );
}
