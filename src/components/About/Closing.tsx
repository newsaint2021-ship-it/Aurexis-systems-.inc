"use client";
import React from "react";
import Header3 from "../Header3";
import MainButton from "../MainButton";
import { easeInOut, motion } from "framer-motion";

function Closing() {
  const line1 = "If your brand deserves a better";
  const line2 = "website or online store, tell us";
  const line3 = "what you are building. We will";
  const line4 = "review it properly and reply with";
  const line5 = "honest next steps.";

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[8vh] mb-[4vh] sm:my-[5vh] md:my-[8vh]">
      <h2 className="sr-only">{`${line1} ${line2} ${line3} ${line4} ${line5}`}</h2>
      <div aria-hidden="true">
        <Header3 phrase={line1} className="indent-[10%]" />
        <Header3 phrase={line2} />
        <Header3 phrase={line3} />
        <Header3 phrase={line4} />
        <Header3 phrase={line5} />
      </div>

      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-10"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-[2] flex flex-wrap gap-3">
          <MainButton text="Start a Project" link="/contact" />
          <MainButton text="Our Services" link="/services" />
        </div>
      </motion.div>
    </section>
  );
}

export default Closing;
