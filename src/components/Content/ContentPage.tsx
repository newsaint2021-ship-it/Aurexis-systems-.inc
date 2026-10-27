import React from "react";
import Link from "next/link";
import { spectralBridgeRegular } from "@/fonts/font";
import type { ContentPageData } from "@/utils/content";
import PageHero from "./PageHero";
import FooterTransition from "../Home/FooterTransition";
import Next from "../Next";

const divider = "border-t-[1px] border-t-lightText20 dark:border-t-darkText20";

function ContentPage({ page }: { readonly page: ContentPageData }) {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        headline={page.headline}
        intro={page.intro}
        secondaryCta={{ text: "View Work", link: "/work" }}
      />

      <section className={`mt-[8vh] pt-[6vh] ${divider}`}>
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <p className="text-[14px] md:text-[18px] md:w-[16vw] shrink-0">
            Who it&apos;s for
          </p>
          <p
            className={`${spectralBridgeRegular.className} flex-1 indent-[10%] text-[7vw] md:text-[3.6vw] leading-[1.05]`}
          >
            {page.audience}
          </p>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.heading} className={`mt-[8vh] pt-[6vh] ${divider}`}>
          <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
            <p className="text-[14px] md:text-[18px] md:w-[16vw] shrink-0">
              {section.label}
            </p>
            <div className="flex-1">
              <h2
                className={`${spectralBridgeRegular.className} text-[9vw] md:text-[4.5vw] leading-[1]`}
              >
                {section.heading}
              </h2>
              {section.body ? (
                <p className="mt-6 max-w-[60ch] text-[15px] sm:text-[17px] 2xl:text-[24px] text-lightText80 dark:text-darkText80">
                  {section.body}
                </p>
              ) : null}
              {section.items ? (
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {section.items.map((item) => (
                    <li key={item.title} className={`py-5 ${divider}`}>
                      <h3 className="text-[18px] 2xl:text-[28px]">{item.title}</h3>
                      {item.text ? (
                        <p className="mt-2 text-[14px] sm:text-[15px] 2xl:text-[22px] text-lightText80 dark:text-darkText80">
                          {item.text}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {page.note ? (
        <section className="mt-[6vh] flex justify-end">
          <p className="w-full sm:w-[60%] md:w-[45%] text-[13.5px] sm:text-[15px] 2xl:text-[22px] text-lightText60 dark:text-darkText60">
            {page.note}
          </p>
        </section>
      ) : null}

      <section className={`mt-[8vh] pt-[6vh] ${divider}`}>
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <h2 className="text-[14px] md:text-[18px] md:w-[16vw] shrink-0">
            Related
          </h2>
          <ul className="flex-1">
            {page.related.map((link) => (
              <li key={link.href} className="border-b-[1px] border-b-lightText20 dark:border-b-darkText20">
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 gap-6 hover:gap-8 duration-300"
                >
                  <span className={`${spectralBridgeRegular.className} text-[7vw] sm:text-[4vw] md:text-[2.6vw] leading-[1]`}>
                    {link.title}
                  </span>
                  <Next className="w-[8vw] xs:w-[5vw] sm:w-[3vw] shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterTransition />
    </>
  );
}

export default ContentPage;
