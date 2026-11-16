"use client";
import React, { useRef } from "react";
import Top1 from "../../../public/images/services/top1.png";
import Top2 from "../../../public/images/services/top2.png";
import Bottom1 from "../../../public/images/services/bottom1.png";
import Bottom2 from "../../../public/images/services/bottom2.jpg";
import Bottom3 from "../../../public/images/services/bottom3.jpg";
import Service1 from "../../../public/images/services/list/serviceDisplay1.jpg";
import Service2 from "../../../public/images/services/list/serviceDisplay2.jpg";
import Service4 from "../../../public/images/services/list/serviceDisplay5.jpg";
import Header2 from "../Header2";
import Image from "next/image";
import Link from "next/link";
import ServiceImage from "../../../public/images/services/list/john-gonzales-bcPmxdBGyyw-unsplash.jpg";
import ServicesList from "./ServicesList";
import { allServices, supportingCapabilities } from "@/utils/services";
import { spectralBridgeRegular } from "@/fonts/font";
import Banner from "../Banner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

function Services() {
  const serviceDiv = useRef(null);
  const topImage1 = useRef(null);
  const topImage2 = useRef(null);
  const bottomImage1 = useRef(null);
  const bottomImage2 = useRef(null);
  const bottomImage3 = useRef(null);

  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);

  const serviceImage1 = useRef(null);
  const serviceImage2 = useRef(null);
  const serviceImage3 = useRef(null);

  const serviceRef = [serviceRef1, serviceRef2, serviceRef3];
  const serviceImage = [serviceImage1, serviceImage2, serviceImage3];

  const image = useRef(null);

  useGSAP(() => {
    gsap.to(image.current, {
      y: "25%",
      scrollTrigger: {
        trigger: image.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from(topImage1.current, {
      y: "40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(topImage2.current, {
      y: "50%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -30%",
        scrub: true,
      },
    });
    gsap.from(bottomImage1.current, {
      y: "-40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 120%",
        end: "bottom -100%",
        scrub: true,
      },
    });
    gsap.from(bottomImage2.current, {
      y: "-45%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 50%",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(bottomImage3.current, {
      y: "-35%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 135%",
        end: "bottom -105%",
        scrub: true,
      },
    });

    serviceImage.forEach((ref, i) => {
      gsap.to(ref.current, {
        zIndex: `${i}`,
        visibility: "visible",
        duration: 0.0001,
        scrollTrigger: {
          trigger: i === 0 ? serviceRef[i].current : serviceRef[i - 1].current,
          start: `top top`,
          scrub: true,
        },
      });
    });
  });

  const topImages = [
    {
      alt: "laptop sitting on a cozy desk",
      image: Top1,
      ref: topImage1,
    },
    {
      alt: "phone against a rock and branch",
      image: Top2,
      ref: topImage2,
    },
  ];

  const bottomImages = [
    {
      alt: "a laptop sitting on the edge of a wooden chair",
      image: Bottom1,
      ref: bottomImage1,
    },
    {
      alt: "aesthetic sculpture with sky blue wall background",
      image: Bottom2,
      ref: bottomImage2,
    },
    {
      alt: "a blue door surrounded by stone wall",
      image: Bottom3,
      ref: bottomImage3,
    },
  ];

  const serviceImages = [
    {
      id: "service1",
      image: Service2,
      zIndex: "z-[1]",
      alt: "Editorial lookbook layout on laptop screen",
    },
    {
      id: "service2",
      image: Service1,
      zIndex: "z-[2]",
      alt: "Mobile e-commerce storefront layout",
    },
    {
      id: "service3",
      image: Service4,
      zIndex: "z-[3]",
      alt: "Premium product bottle and packaging curation",
    },
  ];

  return (
    <section className="mb-[8vh] pt-[6vh]" id="services">
      {/* SERVICE HEADER WITH SURROUNDING IMAGES */}
      <div className="mb-[6vh]" ref={serviceDiv}>
        <div className="flex justify-evenly items-end">
          {topImages.map((img) => (
            <div
              key={img.alt}
              className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
            >
              <Image
                src={img.image}
                alt={img.alt}
                placeholder="blur"
                className="w-full h-full"
                ref={img.ref}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center my-[3vh]">
          <Header2 text="services" />
          <p
            className={`${spectralBridgeRegular.className} text-[20px] sm:text-[28px] md:text-[34px] leading-tight tracking-tight mt-2 uppercase`}
          >
            Digital experiences, built around the brand.
          </p>
        </div>
        <div className="flex justify-between sm:justify-around items-start">
          {bottomImages.map((img) => (
            <div
              key={img.alt}
              className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
            >
              <Image
                src={img.image}
                alt={img.alt}
                placeholder="blur"
                className="w-full h-full"
                ref={img.ref}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PRIMARY SERVICES (WHAT WE SELL) */}
      <div className="flex justify-end">
        <motion.div className="relative flex flex-col-reverse md:flex-row gap-4 border-t-[1px] border-b-[1px] border-t-lightText20 dark:border-t-darkText20 border-b-lightText20 dark:border-b-darkText20 w-full">
          <div className="flex-1">
            {allServices.map((item, i) => (
              <motion.div key={item.title}>
                <ServicesList services={item} ref={serviceRef[i]} />
              </motion.div>
            ))}
          </div>
          <div className="relative md:sticky top-0 flex-1 h-auto md:h-screen object-cover overflow-hidden">
            <Image
              src={ServiceImage}
              alt="Architectural space reflecting considered design discipline"
              className="w-full h-full scale-150"
              placeholder="blur"
              ref={image}
            />
            <div>
              {serviceImages.map((img, i) => (
                <motion.div
                  ref={serviceImage[i]}
                  className={`${
                    i === 0 ? "visible" : "invisible"
                  } absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 
                    left-1/2 w-[40%] md:w-[50%] lg:w-[40%] 2xl:w-[50%] h-[20%] 2xl:h-[30%] object-cover`}
                  key={img.id}
                >
                  <Image
                    src={img.image}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* SUPPORTING CAPABILITIES — CLEARLY SECONDARY */}
      <div className="mt-[8vh] pt-[6vh]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-y-3">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-lightText60 dark:text-darkText60 block mb-1">
              Complementary Capabilities
            </span>
            <h3
              className={`${spectralBridgeRegular.className} text-[26px] sm:text-[32px] leading-tight`}
            >
              What strengthens the work
            </h3>
          </div>
          <p className="max-w-[48ch] text-[13.5px] sm:text-[15px] text-lightText70 dark:text-darkText70">
            These supporting capabilities ensure your digital storefront stays
            fast, visible in organic search, connected to your operations and
            measurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t-[1px] border-t-lightText20 dark:border-t-darkText20 pt-6">
          {supportingCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 border-[1px] border-lightText20 dark:border-darkText20 flex flex-col justify-between"
            >
              <div>
                <span className="text-[13px] text-lightText60 dark:text-darkText60 block mb-2">
                  {`( ${cap.number} )`}
                </span>
                <h4
                  className={`${spectralBridgeRegular.className} text-[22px] leading-snug`}
                >
                  <Link href={cap.href} className="hover:italic duration-300">
                    {cap.title}
                  </Link>
                </h4>
                <p className="mt-3 text-[13.5px] text-lightText70 dark:text-darkText70 leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cap.capabilities.map((item) => (
                    <Banner key={item} text={item} />
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t-[1px] border-lightText10 dark:border-darkText10">
                <Link
                  href={cap.href}
                  className="text-[13px] underline underline-offset-4 hover:opacity-80"
                >
                  View capability details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
