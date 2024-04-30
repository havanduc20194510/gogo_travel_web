"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Banner from "@/component/page/Home/Banner";
import Tours from "@/component/page/Tours";

export default function Page() {
  return (
    <>
      <Navbar />
      <Banner />
      <Tours />
      <Footer />
    </>
  );
}
