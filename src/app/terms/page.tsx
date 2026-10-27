import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalPage from "@/components/Content/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Aurexis Systems Inc. website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalPage
        title="Terms"
        updated="27 October 2026"
        sections={[
          {
            heading: "Use of this website",
            paragraphs: [
              "These terms apply to your use of the Aurexis Systems Inc. website. By using the site you agree to them. They do not govern client projects, which are covered by a separate written agreement.",
            ],
          },
          {
            heading: "Information on this site",
            paragraphs: [
              "Content on this website is provided for general information about our services. It does not constitute a quote, guarantee or offer. Project scope, timelines and fees are agreed in writing for each engagement.",
            ],
          },
          {
            heading: "Intellectual property",
            paragraphs: [
              "Unless stated otherwise, the design, text and code of this website belong to Aurexis Systems Inc. Project imagery and trademarks shown in our work remain the property of their respective owners.",
            ],
          },
          {
            heading: "External links",
            paragraphs: [
              "The site may link to external websites, including live client or demonstration projects. We are not responsible for the content or availability of those sites.",
            ],
          },
          {
            heading: "Liability",
            paragraphs: [
              "We take care to keep this website accurate and available, but we cannot guarantee that it will always be error-free or uninterrupted. To the extent permitted by law, we are not liable for losses arising from use of the website.",
            ],
          },
          {
            heading: "Changes",
            paragraphs: [
              "We may update these terms from time to time. The date at the top of this page shows when they were last revised.",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
