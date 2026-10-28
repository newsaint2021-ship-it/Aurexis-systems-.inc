import React from "react";
import type { Metadata } from "next";
import MainPage from "@/components/Contact/MainPage";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell us about your brand, website or online store. Aurexis Systems will review your enquiry and reply with next steps.",
  alternates: { canonical: "/contact" },
};

function Contact() {
  return (
    <PageShell>
      <MainPage />
    </PageShell>
  );
}

export default Contact;
