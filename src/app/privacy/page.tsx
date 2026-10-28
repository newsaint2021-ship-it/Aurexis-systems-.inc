import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalPage from "@/components/Content/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aurexis Systems Inc. handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalPage
        title="Privacy"
        updated="27 October 2026"
        sections={[
          {
            heading: "Who we are",
            paragraphs: [
              "This website is operated by Aurexis Systems Inc. This policy explains what information we collect through the website and how we use it.",
            ],
          },
          {
            heading: "Information you submit",
            paragraphs: [
              "When you send an enquiry through the contact form, we receive the details you provide: your name, business or brand, email address, website or social profile, the service you are interested in, budget range, timeline, project description and any references you include.",
              "We use this information only to respond to your enquiry and to prepare any proposal you request. Enquiries are delivered to us by email.",
            ],
          },
          {
            heading: "Cookies and analytics",
            paragraphs: [
              "This website does not currently use analytics, advertising or tracking cookies. Your light or dark theme preference is stored in your browser's local storage so the site remembers it on your next visit.",
              "If we add analytics in future, this policy will be updated before that change takes effect.",
            ],
          },
          {
            heading: "Service providers",
            paragraphs: [
              "The website is hosted by a third-party provider that may process technical information such as IP addresses and request logs to deliver and secure the site. Enquiry emails are processed by our email provider.",
            ],
          },
          {
            heading: "Retention and your rights",
            paragraphs: [
              "We keep enquiry information for as long as needed to respond and, where a project proceeds, for the duration of that engagement and any related record-keeping obligations.",
              "You may ask us to access, correct or delete the personal information we hold about you. We aim to handle personal information in line with South Africa's Protection of Personal Information Act (POPIA).",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "For any privacy question or request, please get in touch through the contact page.",
            ],
          },
        ]}
      />
    </PageShell>
  );
}
