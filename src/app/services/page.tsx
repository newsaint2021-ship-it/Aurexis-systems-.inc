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
  title: "Digital Design & E-commerce Services",
  description:
    "Considered websites and e-commerce experiences for fashion, clothing and premium retail brands. Built around brand expression, fast performance and organic search visibility.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Design & E-commerce Services | Aurexis",
    description:
      "Considered websites and e-commerce experiences for fashion, clothing and premium retail brands. Built around brand expression, fast performance and organic search visibility.",
    url: "/services",
  },
};

const primarySlugs = ["fashion-websites", "ecommerce", "premium-retail"];
const supportingSlugs = [
  "seo",
  "dashboards-analytics",
  "integrations-automation",
];

export default function ServicesPage() {
  const primaryServices = primarySlugs
    .map((slug) => servicePages.find((page) => page.slug === slug))
    .filter(Boolean);

  const supportingServices = supportingSlugs
    .map((slug) => servicePages.find((page) => page.slug === slug))
    .filter(Boolean);

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
        headline={["Where brand", "meets commerce"]}
        intro="Aurexis designs and builds considered websites and e-commerce experiences for fashion, clothing and premium retail brands. We bring brand expression, digital design and technology together to create digital experiences that look considered, function intuitively and support commercial growth."
        secondaryCta={{ text: "Selected Work", link: "/work" }}
      />

      {/* PRIMARY SERVICES — WHAT WE SELL */}
      <section className="mt-[10vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <div className="md:w-[22vw] shrink-0">
            <span className="text-[12px] uppercase tracking-wider text-lightText60 dark:text-darkText60 block mb-1">
              Core Offering
            </span>
            <h2 className="text-[16px] md:text-[20px] font-medium">
              Primary Services
            </h2>
            <p className="mt-3 text-[13.5px] sm:text-[15px] text-lightText60 dark:text-darkText60 leading-relaxed">
              Tailored digital storefronts and brand websites for independent
              fashion labels, apparel brands and premium retail businesses.
            </p>
          </div>
          <ul className="flex-1">
            {primaryServices.map((service, index) => {
              if (!service) return null;
              return (
                <li
                  key={service.slug}
                  className="border-b-[1px] border-b-lightText20 dark:border-b-darkText20 last:border-b-0 py-8 first:pt-0"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[14px] text-lightText60 dark:text-darkText60">
                        {`( 0${index + 1} )`}
                      </span>
                      <span
                        className={`${spectralBridgeRegular.className} block text-[8vw] md:text-[4vw] leading-[1] group-hover:italic duration-300`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <p className="block mt-4 max-w-[62ch] text-[14.5px] sm:text-[16.5px] text-lightText80 dark:text-darkText80 leading-relaxed">
                      {service.intro}
                    </p>
                    <div className="mt-5 inline-block">
                      <Banner text="Explore service details" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SUPPORTING CAPABILITIES — WHAT STRENGTHENS THE WORK */}
      <section className="mt-[10vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <div className="md:w-[22vw] shrink-0">
            <span className="text-[12px] uppercase tracking-wider text-lightText60 dark:text-darkText60 block mb-1">
              Complementary Depth
            </span>
            <h2 className="text-[16px] md:text-[20px] font-medium">
              Supporting Capabilities
            </h2>
            <p className="mt-3 text-[13.5px] sm:text-[15px] text-lightText60 dark:text-darkText60 leading-relaxed">
              Technical specialisations that ensure your website stays fast,
              search-visible, connected to operational tools and measurable.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {supportingServices.map((service, index) => {
              if (!service) return null;
              return (
                <div
                  key={service.slug}
                  className="p-6 border-[1px] border-lightText20 dark:border-darkText20 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[13px] text-lightText60 dark:text-darkText60 block mb-2">
                      {`( 0${index + 4} )`}
                    </span>
                    <h3
                      className={`${spectralBridgeRegular.className} text-[22px] md:text-[26px] leading-[1.1]`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] text-lightText70 dark:text-darkText70 leading-relaxed">
                      {service.intro}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-[13px] underline underline-offset-4 hover:opacity-80"
                    >
                      View details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterTransition />
    </PageShell>
  );
}
