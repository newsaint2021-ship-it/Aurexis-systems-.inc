"use client";
import React, { useRef } from "react";
import { offers } from "@/utils/offers";
import Image from "next/image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image1 from "@../../../public/images/general/home/process_image1.jpg";
import Image2 from "@../../../public/images/general/home/process_image2.jpg";
import { easeInOut, motion, useInView } from "framer-motion";

function ProcessTransition() {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list = useInView(listRef, { once: true });

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="mt-[6vh]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-x-[18vw]">
        <div className="flex-1" ref={imageRef}>
          <div className="object-cover object-top overflow-hidden">
            <motion.div className="w-full">
              <Image
                src={Image1}
                alt="Considered art direction showing glassware and delicate materials"
                className="w-full"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="mt-10 mb-[6vh] flex md:mt-6 md:mb-0">
            <div className="flex-1 block md:hidden"></div>
            <div className="flex-[2]">
              <Paragraph text="Good digital work begins with understanding what a brand needs to communicate and what its customers need to experience. We consider the details, question the obvious and build around the requirements of the business. The result should not simply look different. It should work better, feel coherent and remain useful as the brand evolves." />
            </div>
          </div>
        </div>
        <div className="flex-[1.5]">
          <motion.div className="object-cover object-top overflow-hidden z-[0]">
            <div>
              <Image
                src={Image2}
                alt="Design workspace showing laptop and warm interior textures"
                className="w-full"
                placeholder="blur"
              />
            </div>
          </motion.div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="flex justify-between py-1 border-b-[1px] border-b-lightText20 dark:border-b-darkText20">
              <Heading text="how we engage with brands" />
              <Heading text="model" />
            </div>
            {offers.map((offer, i) => {
              return (
                <motion.div
                  ref={listRef}
                  initial={{ opacity: 0, y: "-5%" }}
                  animate={
                    list && {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: easeInOut,
                        delay: i * 0.08,
                      },
                    }
                  }
                  key={offer.service}
                >
                  <Listings service={offer.service} price={offer.price} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Listings({ service, price }: { service: string; price: string }) {
  return (
    <div className="py-2 border-b-[1px] border-b-lightText20 dark:border-b-darkText20 flex justify-between items-center">
      <p className="text-[17px] 2xl:text-[28px]">{service}</p>
      <p className="text-[17px] 2xl:text-[28px] text-lightText70 dark:text-darkText70">
        {price}
      </p>
    </div>
  );
}

export default ProcessTransition;
