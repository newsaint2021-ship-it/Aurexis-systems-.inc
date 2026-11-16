import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "Our approach brings creative";
  const line2 = "direction and technical execution";
  const line3 = "into one connected process.";
  const line4 = "From the first interaction to";
  const line5 = "the final implementation,";
  const line6 = "every design and code decision";
  const line7 = "should have a reason.";

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className="text-[14px] md:text-[18px] uppercase tracking-wider text-lightText60 dark:text-darkText60">
          Studio Approach
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]" />
          <Header3 phrase={line2} />
          <Header3 phrase={line3} />
          <Header3 phrase={line4} />
          <Header3 phrase={line5} />
          <Header3 phrase={line6} />
          <Header3 phrase={line7} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
