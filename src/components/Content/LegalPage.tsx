import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";

type LegalPageProps = {
  readonly title: string;
  readonly updated: string;
  readonly sections: { heading: string; paragraphs: string[] }[];
};

function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <article className="my-[8vh]">
      <h1
        className={`${spectralBridgeRegular.className} text-[13vw] sm:text-[8vw] leading-[1] uppercase`}
      >
        {title}
      </h1>
      <p className="mt-4 text-[14px] text-lightText60 dark:text-darkText60">
        Last updated {updated}
      </p>
      <div className="mt-[6vh] flex flex-col gap-y-10">
        {sections.map((section) => (
          <section
            key={section.heading}
            className="pt-6 border-t-[1px] border-t-lightText20 dark:border-t-darkText20 flex flex-col md:flex-row gap-x-[8vw] gap-y-4"
          >
            <h2 className="text-[16px] md:text-[18px] md:w-[22vw] shrink-0">
              {section.heading}
            </h2>
            <div className="flex-1 flex flex-col gap-y-4 max-w-[65ch]">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[14px] sm:text-[16px] 2xl:text-[22px] text-lightText80 dark:text-darkText80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default LegalPage;
