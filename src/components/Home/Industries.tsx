"use client";
import React from "react";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { spectralBridgeRegular } from "@/fonts/font";
import Banner from "../Banner";

const industries = [
  {
    href: "/industries/fashion",
    title: "Fashion & clothing",
    tag: "Primary focus",
    text: "Independent labels, streetwear and direct-to-consumer brands that need collections, sizing and mobile shopping done properly.",
  },
  {
    href: "/industries/luxury-retail",
    title: "Luxury & premium retail",
    tag: "Accessories, jewellery, fragrance",
    text: "Premium products presented with restraint, clear detail and enquiry or purchase journeys that build trust.",
  },
  {
    href: "/industries/ecommerce",
    title: "Established e-commerce",
    tag: "Existing stores",
    text: "Stores that are already trading and need better usability, redevelopment, technical SEO or clearer reporting.",
  },
];

function Industries() {
  return (
    <section className="my-[12vh]" aria-labelledby="industries-heading">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <h2
          id="industries-heading"
          className="text-[14px] md:text-[18px] md:w-[16vw] shrink-0"
        >
          Who we work with
        </h2>
        <ul className="flex-1 border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
          {industries.map((industry, i) => (
            <motion.li
              key={industry.href}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.6, ease: easeInOut, delay: i * 0.08 },
              }}
              viewport={{ once: true }}
              className="border-b-[1px] border-b-lightText20 dark:border-b-darkText20"
            >
              <Link
                href={industry.href}
                className="group flex flex-col md:flex-row md:items-end gap-x-[4vw] gap-y-3 py-6"
              >
                <span className="flex items-start gap-5 md:flex-[1.4]">
                  <span className={`${spectralBridgeRegular.className} text-[16px] md:text-[20px]`}>
                    {`( ${i + 1} )`}
                  </span>
                  <span
                    className={`${spectralBridgeRegular.className} text-[10vw] md:text-[5vw] leading-[1] group-hover:italic duration-300`}
                  >
                    {industry.title}
                  </span>
                </span>
                <span className="md:flex-1 flex flex-col gap-3 items-start">
                  <Banner text={industry.tag} />
                  <span className="text-[14px] sm:text-[16px] 2xl:text-[24px] text-lightText80 dark:text-darkText80">
                    {industry.text}
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Industries;
