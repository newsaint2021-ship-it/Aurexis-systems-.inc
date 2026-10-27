import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageShell({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="px-[6vw]">
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export default PageShell;
