import React from "react";
import type { Metadata } from "next";
import Intro from "@/components/About/Intro";
import AboutMe from "@/components/About/AboutMe";
import MoreDetail from "@/components/About/MoreDetail";
import Resume from "@/components/About/Resume";
import Mockups from "@/components/About/Mockups";
import Closing from "@/components/About/Closing";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aurexis Systems is a design-led digital studio focused on websites and e-commerce for fashion, clothing and premium retail brands.",
  alternates: { canonical: "/about" },
};

function About() {
  return (
    <PageShell>
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
