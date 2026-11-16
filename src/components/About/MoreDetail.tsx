"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutImage1 from "../../../public/images/general/about/aboutMain2.jpg";
import AboutImage2 from "../../../public/images/general/about/aboutIntro1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";

function MoreDetail() {
  const image1 = useRef(null);
  const image2 = useRef(null);

  const textRef = useRef(null);
  const text = useInView(textRef, { once: true });

  const EASING = [0.83, 0, 0.17, 1];

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image2.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

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

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[5vh]">
      <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
        <div className="w-full flex-1 object-cover overflow-hidden">
          <Image
            src={AboutImage1}
            alt="Editorial portrait with soft natural lighting and refined styling"
            className="w-full h-full scale-110 object-cover"
            placeholder="blur"
            ref={image1}
          />
        </div>
        <div className="flex-[1.5]">
          <div className="w-full object-cover overflow-hidden">
            <Image
              src={AboutImage2}
              alt="Floral botanical study reflecting natural color palette"
              className="w-full h-full scale-110 object-cover"
              placeholder="blur"
              ref={image2}
            />
          </div>
          <div className="mt-[4vh]" ref={textRef}>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className="tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase"
              >
                Craft
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className="tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase"
              >
                & Discipline
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <div>
            <Paragraph text="We start every project by understanding what a brand needs to communicate and what its customers need to experience. We consider the details, question the obvious and build around the requirements of the business." />
          </div>
          <div className="mt-6">
            <Paragraph text="Our focus is deliberately narrow: fashion labels, clothing brands and premium retail businesses. We do not manufacture garments or operate as a general IT helpdesk. We design and engineer websites and e-commerce platforms that honour the brand and support commercial growth." />
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div>
            <Paragraph text="Founded by P. Midas and based in Cape Town, South Africa, we collaborate with independent labels and premium retailers locally and internationally. Creative direction and technical execution are united under one roof." />
          </div>
          <div className="mt-6">
            <Paragraph text="Every site is built with modern performance standards, accessibility, mobile fluid layouts and organic search foundations from day one. Where brand meets commerce." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MoreDetail;
