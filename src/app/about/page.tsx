import React from "react";
import type { Metadata } from "next";
import Intro from "@/components/About/Intro";
import AboutMe from "@/components/About/AboutMe";
import MoreDetail from "@/components/About/MoreDetail";
import Resume from "@/components/About/Resume";
import Mockups from "@/components/About/Mockups";
import Closing from "@/components/About/Closing";
import PageShell from "@/components/PageShell";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "About Aurexis Digital Studio | Cape Town",
  },
  description:
    "Aurexis is an independent digital design studio based in Cape Town, South Africa, creating considered websites and e-commerce experiences for fashion and retail brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Aurexis Digital Studio | Cape Town",
    description:
      "Aurexis is an independent digital design studio based in Cape Town, South Africa, creating considered websites and e-commerce experiences for fashion and retail brands.",
    url: "/about",
  },
};

function About() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <Intro />
      <AboutMe />
      <MoreDetail />
      <Resume />
      <Mockups />
      <Closing />
    </PageShell>
  );
}

export default About;
