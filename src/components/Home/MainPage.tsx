"use client";

import React, { useState, useEffect } from "react";
import PreLoading from "./PreLoading";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import About from "./About";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProcessTransition from "./ProcessTransition";
import Process from "./Process";
import FooterTransition from "./FooterTransition";
import ProcessParagraph from "./ProcessParagraph";
import Industries from "./Industries";

// The preloader plays from 10 down to 4, then animates out.
const PRELOADER_START = 10;
const PRELOADER_EXIT = 4;

function MainPage() {
  const [count, setCount] = useState(PRELOADER_START);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(0);
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === PRELOADER_EXIT) window.scrollTo(0, 0);
  }, [count]);

  // Keep the preloader mounted briefly after its exit begins so its exit animation can finish.
  const preloaderActive = count > PRELOADER_EXIT - 2;

  return (
    <>
      {preloaderActive ? <PreLoading count={count} /> : null}
      {/* Content is always rendered so it is present in the server HTML; the preloader overlays it. */}
      <div className="px-[6vw]" aria-hidden={count > PRELOADER_EXIT}>
        <Navbar />
        <main id="main">
          <Hero ready={count <= PRELOADER_EXIT} />
          <About />
          <Works />
          <Services />
          <Industries />
          <ProcessParagraph />
          <ProcessTransition />
          <Process />
          <FooterTransition />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
