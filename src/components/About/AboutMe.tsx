import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "Aurexis is a digital studio"
  const line2 = "focused on websites and e-commerce"
  const line3 = "for brands where presentation"
  const line4 = "matters. We combine considered"
  const line5 = "design with practical engineering,"
  const line6 = "search visibility and clear"
  const line7 = "reporting, so a site looks right"
  const line8 = "and works for the business."

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>
          About Aurexis
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]"/>
          <Header3 phrase={line2}/>
          <Header3 phrase={line3}/>
          <Header3 phrase={line4}/>
          <Header3 phrase={line5}/>
          <Header3 phrase={line6}/>
          <Header3 phrase={line7}/>
          <Header3 phrase={line8}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
