"use client";
import React, { useRef } from "react";
import Header2 from "../Header2";
import { allProjects } from "@/utils/works";
import IndividualWork from "./IndividualWork";
import { motion, useInView } from "framer-motion";

function Works() {
  const headerRef = useRef(null);
  const header = useInView(headerRef, { once: true });

  return (
    <section className="py-[10vh]" id="works">
      <div>
        <div className="sticky top-[8vh] z-10">
          <div className="overflow-hidden">
            <motion.div
              ref={headerRef}
              initial={{ y: "80%" }}
              animate={
                header && {
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: 0.1,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }
              }
            >
              <Header2 text="Selected" />
            </motion.div>
          </div>
          <div className="flex justify-center overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={
                header && {
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: 0.15,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }
              }
            >
              <Header2 text="Digital Work" />
            </motion.div>
          </div>
          <p className="text-center text-[12px] sm:text-[14px] uppercase tracking-[0.16em] text-lightText60 dark:text-darkText60 mt-2">
            Independent engagements &middot; concepts &middot; digital commerce
          </p>
        </div>
        <div className="mt-[2vh]">
          {allProjects?.map((work) => {
            return (
              <div key={work.title}>
                <IndividualWork work={work} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Works;
