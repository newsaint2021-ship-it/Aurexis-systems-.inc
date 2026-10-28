import React from "react";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/Content/PageHero";
import { spectralBridgeRegular } from "@/fonts/font";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical writing on fashion e-commerce, online store usability, technical SEO and measurement.",
  alternates: { canonical: "/insights" },
  // Kept out of the index until real articles are published.
  robots: { index: false, follow: true },
};

const plannedTopics = [
  "Fashion e-commerce",
  "Online store usability",
  "Technical SEO",
  "Product page optimisation",
  "E-commerce measurement",
  "Dashboards for growing businesses",
];

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        headline={["Notes on", "digital retail"]}
        intro="We are preparing practical articles for brand founders and e-commerce teams. Nothing is published yet; these are the topics we will cover first."
        secondaryCta={{ text: "Our Services", link: "/services" }}
      />
      <section className="mt-[8vh] pt-[6vh] mb-[10vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <h2 className="text-[14px] md:text-[18px] md:w-[16vw] shrink-0">
            Coming topics
          </h2>
          <ul className="flex-1">
            {plannedTopics.map((topic, i) => (
              <li
                key={topic}
                className="flex items-baseline gap-6 py-4 border-b-[1px] border-b-lightText20 dark:border-b-darkText20"
              >
                <span className={`${spectralBridgeRegular.className} text-[16px]`}>
                  {`( ${i + 1} )`}
                </span>
                <span
                  className={`${spectralBridgeRegular.className} text-[7vw] sm:text-[4vw] md:text-[2.6vw] leading-[1]`}
                >
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
