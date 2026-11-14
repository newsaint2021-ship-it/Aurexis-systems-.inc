"use client";
import React, { useRef } from "react";
import Header6 from "../Header6";
import Image from "next/image";
import StarSpin from "../StarSpin";
import Paragraph from "../Paragraph";
import HeroImage from "../../../public/images/general/home/hero_image.jpg";
import MainButton from "../MainButton";
import HeroFilm from "./HeroFilm";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const EASE_OUT = [0.25, 1, 0.5, 1];
const EASE_IN_OUT = [0.65, 0, 0.35, 1];

const rise = (delay: number) => ({
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 1.2, delay, ease: EASE_OUT } },
});

const appear = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2, delay, ease: EASE_IN_OUT } },
});

const INTRO_COPY =
  "We design and build premium websites and online stores for fashion labels, clothing brands and premium retailers. Considered design, solid engineering and search visibility, delivered as one.";

function HeroActions() {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      <MainButton text="Start a Project" link="/contact" />
      <MainButton text="View Work" link="/work" />
    </div>
  );
}

function Hero({ ready = true }: { readonly ready?: boolean }) {
  const star = useRef(null);
  const state = ready ? "animate" : "initial";

  useGSAP(() => {
    gsap.to(star.current, {
      y: "30%",
      rotate: 270,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: star.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="pt-[3vh] pb-[8vh]">
      <h1 className="sr-only">
        Aurexis Digital Studio: premium websites and e-commerce for fashion
        brands and premium retailers
      </h1>

      {/* FILM + HEADLINE, WITH DESCRIPTORS AND COPY ALONGSIDE ON DESKTOP */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-[4vw]">
        <motion.div
          variants={appear(0.1)}
          initial="initial"
          animate={state}
          className="relative w-full md:w-[60%] aspect-square xs:aspect-[5/4] md:aspect-[4/3] overflow-hidden bg-darkBg"
        >
          <HeroFilm ready={ready} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-darkBg/75 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[5%] right-[14%] bottom-[7%] text-darkText"
          >
            <div className="overflow-hidden">
              <motion.span
                variants={rise(0.3)}
                initial="initial"
                animate={state}
                className={`${spectralBridgeRegular.className} block uppercase leading-[0.9] tracking-[-0.01em] text-[16vw] xs:text-[14vw] md:text-[8.6vw] 2xl:text-[8vw]`}
              >
                Aurexis
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                variants={rise(0.45)}
                initial="initial"
                animate={state}
                className={`${spectralBridgeRegular.className} block uppercase leading-[1.1] tracking-[0.32em] pl-[0.12em] mt-[0.35em] text-[4.6vw] xs:text-[4vw] md:text-[2.3vw] 2xl:text-[2.1vw]`}
              >
                Digital Studio
              </motion.span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={appear(0.6)}
          initial="initial"
          animate={state}
          className="flex flex-1 flex-row justify-between md:flex-col md:justify-between md:py-[2vh]"
        >
          <div className="flex flex-row justify-between w-full md:w-auto md:flex-col md:gap-y-1">
            <Header6 text="Design Studio" />
            <Header6 text="Web & E-commerce" />
          </div>
          <div className="hidden md:block">
            <div className="lg:w-[85%]">
              <Paragraph text={INTRO_COPY} />
            </div>
            <HeroActions />
          </div>
        </motion.div>
      </div>

      {/* SUPPORTING PHOTOGRAPHY, COPY AND CTAS */}
      <div className="mt-10 md:mt-[6vh] flex flex-col-reverse md:flex-row gap-[8vw] items-start">
        <motion.div
          variants={appear(0.9)}
          initial="initial"
          animate={state}
          className="flex-1 flex justify-end origin-center"
        >
          <div className="w-fit" ref={star}>
            <StarSpin classNameSize="w-[30vw] xs:w-[20vw] sm:w-[15vw] md:w-[12vw]" />
          </div>
        </motion.div>
        <div className="md:flex-[2.5] lg:flex-[1.5] flex flex-col xs:flex-row xs:mt-[2vh] md:mt-0 gap-8">
          <motion.div
            variants={appear(0.7)}
            initial="initial"
            animate={state}
            className="translate-x-[10vw] xs:translate-x-0 max-w-[40vw] md:max-w-[26vw] md:flex-[1.5]"
          >
            <Image
              src={HeroImage}
              alt="chairs and tables in a cozy room with plants"
              className="w-full h-full"
              placeholder="blur"
              sizes="(min-width: 992px) 26vw, 40vw"
            />
          </motion.div>
          <motion.div
            variants={appear(0.8)}
            initial="initial"
            animate={state}
            className="flex-[3] flex justify-end xs:items-end xs:py-[4vh] md:hidden"
          >
            <div className="w-[80%] xs:w-full">
              <div className="w-[90%] sm:w-[80%]">
                <Paragraph text={INTRO_COPY} />
              </div>
              <HeroActions />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
