import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/Content/PageHero";
import FooterTransition from "@/components/Home/FooterTransition";
import Banner from "@/components/Banner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { spectralBridgeRegular } from "@/fonts/font";
import { servicePages } from "@/utils/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, e-commerce, SEO, custom dashboards and integrations for fashion brands, premium retailers and growing consumer businesses.",
  alternates: { canonical: "/services" },
};

const serviceGroups = [
  {
    label: "Build",
    description:
      "The main entry point for most clients: a website or online store designed around the brand.",
    slugs: ["web-development", "ecommerce"],
  },
  {
    label: "Grow",
    description:
      "Ongoing work that improves visibility and performance once a site is live.",
    slugs: ["seo"],
  },
  {
    label: "Connect",
    description:
      "Custom engineering for businesses that need clearer data and systems that work together. Scoped after a feasibility assessment.",
    slugs: ["dashboards-analytics", "integrations-automation"],
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        headline={["Design and", "engineering"]}
        intro="Our services are connected rather than separate products. A well-built website or store is the foundation; search, reporting and integrations build on it as the business grows."
        secondaryCta={{ text: "View Work", link: "/work" }}
      />
      {serviceGroups.map((group) => (
        <section
          key={group.label}
          className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20"
        >
          <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
            <div className="md:w-[22vw] shrink-0">
              <h2 className="text-[14px] md:text-[18px]">{group.label}</h2>
              <p className="mt-2 text-[13.5px] sm:text-[15px] text-lightText60 dark:text-darkText60">
                {group.description}
              </p>
            </div>
            <ul className="flex-1">
              {group.slugs.map((slug) => {
                const service = servicePages.find((page) => page.slug === slug);
                if (!service) return null;
                return (
                  <li
                    key={slug}
                    className="border-b-[1px] border-b-lightText20 dark:border-b-darkText20 last:border-b-0"
                  >
                    <Link href={`/services/${slug}`} className="group block py-6">
                      <span
                        className={`${spectralBridgeRegular.className} block text-[9vw] md:text-[4.5vw] leading-[1] group-hover:italic duration-300`}
                      >
                        {service.title}
                      </span>
                      <span className="block mt-3 max-w-[60ch] text-[14px] sm:text-[16px] text-lightText80 dark:text-darkText80">
                        {service.intro}
                      </span>
                      <span className="inline-block mt-4">
                        <Banner text="Learn more" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}
      <FooterTransition />
    </PageShell>
  );
}
