"use client";
import React, { useRef } from "react";
import Link from "next/link";
import StarSpin from "./StarSpin";
import { spectralBridgeRegular } from "@/fonts/font";
import MainButton from "./MainButton";
import { motion, useInView, easeInOut } from "framer-motion";
import { footerNav, legalNav, siteConfig } from "@/utils/site";

const linkUnderline =
  "relative w-fit after:duration-300 after:ease hover:after:w-full after:absolute after:w-0 after:h-[2px] after:top-full after:left-0 after:bg-lightText after:dark:bg-darkText";

function Footer() {
  const lineRef = useRef(null);
  const line = useInView(lineRef, { once: true });

  const line1 = "Have a brand or store";
  const line2 = "that deserves better?";
  const line3 = "Let’s talk about it.";

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.4,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <footer className="mb-[20px]">
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center mb-[4vh] md:mb-[8vh]"
      >
        <StarSpin classNameSize="w-[16vw] sm:w-[12vw] lg:w-[8vw]" />
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-6">
        <nav aria-label="Footer" className="flex-1">
          <ul className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-1 w-fit">
            {footerNav.map((link, i) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: easeInOut,
                    },
                  }}
                  viewport={{ once: true }}
                  key={link.href}
                  className={`${linkUnderline} text-[14px] md:text-[18px]`}
                >
                  <Link href={link.href}>{link.title}</Link>
                </motion.li>
              );
            })}
            {siteConfig.contactEmail ? (
              <li className={`${linkUnderline} text-[14px] md:text-[18px]`}>
                <a href={`mailto:${siteConfig.contactEmail}`}>Email</a>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="flex-1" ref={lineRef}>
          <p className="sr-only">{`${line1} ${line2} ${line3}`}</p>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.p
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line1}
            </motion.p>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.p
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line2}
            </motion.p>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.p
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line3}
            </motion.p>
          </div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-2"
          >
            <MainButton
              text="Start a Project"
              fontSize="text-[16px]"
              classNameWidth="w-full sm:w-[45%] lg:w-[12em]"
              link="/contact"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-8 gap-y-3 gap-x-6">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">
              Design & Engineering
            </p>
            <p className="text-[14px] text-lightText dark:text-darkText">
              {siteConfig.name}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">
              Working with
            </p>
            <p className="text-[14px] text-lightText dark:text-darkText">
              South Africa & international
            </p>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-lightText60 dark:text-darkText60">
            <span
              aria-hidden="true"
              className="text-[14px] animate-ping text-green-500 mr-1"
            >
              &#x2022;
            </span>
            Accepting enquiries
          </p>
          <p className="text-[14px] text-lightText dark:text-darkText">
            Websites & e-commerce
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-col xs:flex-row items-center justify-between gap-2">
        <p className="text-[12px]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <ul className="flex gap-4">
          {legalNav.map((link) => (
            <li key={link.href} className={`${linkUnderline} text-[12px]`}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
