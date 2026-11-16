"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";
import Image2 from "../../../public/images/general/home/about_image3.jpg";
import Image3 from "../../../public/images/general/home/about_image6.jpg";
import Header3 from "../Header3";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    var tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, {
      yPercent: 10,
    }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  const topline1 = "MORE THAN A WEBSITE.";
  const topline2 = "AN EXTENSION OF YOUR BRAND.";
  const bottomline1 = "Where brand expression";
  const bottomline2 = "meets digital commerce.";

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
    <section className="py-[12vh]">
      <div>
        <div>
          <Header3 phrase={topline1} className="pr-[8vw]" />
          <Header3 phrase={topline2} className="pr-[8vw]" />
        </div>
        <div className="mt-2">
          <Header3 phrase={bottomline1} className="pl-[8vw]" />
          <Header3 phrase={bottomline2} className="pl-[8vw]" />
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center gap-y-4 md:gap-y-0">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image3}
            alt="Product packaging and material details reflecting tactile luxury brand presentation"
            className="w-full h-full scale-110"
            ref={image1}
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-full md:w-[70%] object-cover object-left-top overflow-hidden"
            ref={image2Div}
          >
            <Image
              src={Image2}
              alt="Mobile screens demonstrating considered mobile-first digital storefront layouts"
              className="w-full h-full"
              ref={image2}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="flex mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="xs:flex-[1] hidden xs:block"></div>
        <div className="xs:flex-[2.5] md:flex-[1.2] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text="The digital experience should carry the same thought, character and attention to detail as the brand itself. In fashion and premium retail, the online storefront is the primary point of contact for new customers." />
          </div>
          <div className="flex-1">
            <Paragraph text="We bring art direction, interface design and technology together to create digital storefronts that feel considered, function intuitively and support the way modern brands do business." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
