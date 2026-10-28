import React from "react";
import type { Metadata } from "next";
import MainPage from "@/components/Home/MainPage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <MainPage />;
}
