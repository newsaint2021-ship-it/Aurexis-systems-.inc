"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutMain from "../../../public/images/general/about/aboutIntro3.jpg";
import { easeInOut, motion } from "framer-motion";

function Intro() {
  const line1 = "AN INDEPENDENT STUDIO.";
  const line2 = "A CONSIDERED APPROACH.";

  const imageRef = useRef(null);

  const EASING = [0.83, 0, 0.17, 1];

  const rise1 = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.3,
      },
    },
  };

  const reveal = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "auto",
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.45,
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
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section>
      <div className="flex justify-center mt-[8vh]">
        <div className="w-[85%] sm:w-[70%] lg:w-[65%] flex justify-center items-center flex-col">
          <div className="z-[10] dark:mix-blend-exclusion">
            <div className="overflow-hidden">
              <motion.h1
                variants={rise1}
                initial="initial"
                animate="animate"
                className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion text-[10vw] xs:text-[8vw] sm:text-[7vw] lg:text-[5.5vw] text-center leading-[1.05]`}
              >
                {line1}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={rise1}
                initial="initial"
                animate="animate"
                className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion text-[10vw] xs:text-[8vw] sm:text-[7vw] lg:text-[5.5vw] text-center leading-[1.05]`}
              >
                {line2}
              </motion.h1>
            </div>
          </div>
          <div className="min-h-[30vh] lg:min-h-[65vh] w-full sm:w-[80%] lg:w-[60%] mt-[-3.3vh] md:mt-[-5vh] lg:mt-[-6vh]">
            <motion.div
              variants={reveal}
              initial="initial"
              animate="animate"
              className="overflow-hidden object-cover object-top z-[0]"
            >
              <div>
                <Image
                  src={AboutMain}
                  alt="Editorial styling demonstrating tactile brand presentation"
                  className="w-full"
                  placeholder="blur"
                  ref={imageRef}
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sm:w-[75%] lg:w-[60%] mt-8"
          >
            <Paragraph
              text="Aurexis is an independent digital design studio based in Cape Town, South Africa. We work at the intersection of brand, design and technology, creating digital experiences for fashion, clothing and premium retail businesses."
              className="text-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
