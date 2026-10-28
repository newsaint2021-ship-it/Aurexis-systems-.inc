import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
  const topline1 = "Clear scope, steady";
  const topline2 = "communication and";
  const bottomline1 = "no surprises. We work one stage";
  const bottomline2 = "at a time, and nothing moves forward";
  const bottomline3 = "until you are happy with the last.";
  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px]">Our approach</p>
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
