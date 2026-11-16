import React from "react";
import type { Metadata } from "next";
import MainPage from "@/components/Home/MainPage";

export const metadata: Metadata = {
  title: {
    absolute: "Fashion Website Design & E-commerce Studio | Aurexis",
  },
  description:
    "Aurexis is a Cape Town digital design studio creating considered websites and e-commerce experiences for fashion, clothing and premium retail brands.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fashion Website Design & E-commerce Studio | Aurexis",
    description:
      "Aurexis is a Cape Town digital design studio creating considered websites and e-commerce experiences for fashion, clothing and premium retail brands.",
    url: "/",
  },
};

export default function Home() {
  return <MainPage />;
}
