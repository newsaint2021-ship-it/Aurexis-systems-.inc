"use client";
import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, easeInOut } from "framer-motion";
import Paragraph from "../Paragraph";
import MainButton from "../MainButton";

type PageHeroProps = {
  readonly eyebrow?: string;
  readonly headline: readonly [string, string];
  readonly intro: string;
  readonly primaryCta?: { text: string; link: string };
  readonly secondaryCta?: { text: string; link: string };
};

const EASING = [0.83, 0, 0.17, 1];

const rise = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 1, ease: EASING, delay: 0.4 } },
};

const appear = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: easeInOut, delay: 0.7 },
  },
};

function PageHero({
  eyebrow,
  headline,
  intro,
  primaryCta = { text: "Start a Project", link: "/contact" },
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="my-[8vh]">
      {eyebrow ? (
        <motion.p
          variants={appear}
          initial="initial"
          animate="animate"
          className="text-[14px] md:text-[18px] text-center mb-4 text-lightText60 dark:text-darkText60"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <h1
        className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[13vw] sm:text-[10vw]`}
      >
        <span className="block overflow-hidden">
          <motion.span
            variants={rise}
            initial="initial"
            animate="animate"
            className="block"
          >
            {headline[0]}
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            variants={rise}
            initial="initial"
            animate="animate"
            className="block italic lowercase"
          >
            {headline[1]}
          </motion.span>
        </span>
      </h1>
      <div className="flex justify-end mt-8">
        <motion.div
          variants={appear}
          initial="initial"
          animate="animate"
          className="w-full xs:w-[70%] sm:w-[55%] md:w-[40%]"
        >
          <Paragraph text={intro} />
          <div className="mt-5 flex flex-wrap gap-3">
            <MainButton text={primaryCta.text} link={primaryCta.link} />
            {secondaryCta ? (
              <MainButton text={secondaryCta.text} link={secondaryCta.link} />
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
