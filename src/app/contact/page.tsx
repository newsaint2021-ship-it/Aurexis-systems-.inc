import React from "react";
import type { Metadata } from "next";
import MainPage from "@/components/Contact/MainPage";
import PageShell from "@/components/PageShell";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell us about your fashion label, brand or online store. We review every enquiry personally and provide honest, clear next steps.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Aurexis Digital Studio",
    description:
      "Tell us about your fashion label, brand or online store. We review every enquiry personally and provide honest, clear next steps.",
    url: "/contact",
  },
};

function Contact() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <MainPage />
    </PageShell>
  );
}

export default Contact;
