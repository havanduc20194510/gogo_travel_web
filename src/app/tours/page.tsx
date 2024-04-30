"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Banner from "@/component/page/Home/Banner";
import Tours from "@/component/page/Tours";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <Banner />
      <Tours />
      <Footer />
    </Suspense>
  );
}
