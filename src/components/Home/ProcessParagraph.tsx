import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
  const topline1 = "DESIGN WITH INTENTION.";
  const topline2 = "TECHNOLOGY WITH PURPOSE.";
  const bottomline1 = "Good digital work begins with";
  const bottomline2 = "understanding what a brand needs";
  const bottomline3 = "and building around the business.";

  return (
    <section className="my-[12vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px] text-lightText60 dark:text-darkText60 uppercase tracking-wider">
            Philosophy
          </p>
          <div>
            <Header3 phrase={topline1} />
            <Header3 phrase={topline2} />
          </div>
        </div>
        <div>
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
          <Header3 phrase={bottomline3} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
