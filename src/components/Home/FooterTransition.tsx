import React from "react";
import TransitionCarousel from "./TransitionCarousel";
import Link from "next/link";

function FooterTransition() {
  const closingTerms = [
    "Start a Project",
    "Start a Project",
    "Start a Project",
    "Start a Project",
    "Start a Project",
  ];

  return (
    <section className="mt-[6vh] my-[10vh]">
      <Link href="/contact" aria-label="Start a project with Aurexis">
        <div aria-hidden="true">
          <TransitionCarousel
            classNameRotate="rotate-0"
            array={closingTerms}
            className="py-5 rounded-full flex justify-center hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 h-fit"
          />
        </div>
      </Link>
    </section>
  );
}

export default FooterTransition;
