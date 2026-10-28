import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainPage from "@/components/NotFound/MainPage";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

function NotFound() {

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage/>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
