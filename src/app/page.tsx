"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Banner from "@/component/page/Home/Banner";
import Comments from "@/component/page/Home/Comments";
import PopularTours from "@/component/page/Home/PopularTours";
import TopDestinations from "@/component/page/Home/TopDestinations";
import Vision from "@/component/page/Home/Vision";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Vision />
      <PopularTours />
      <TopDestinations />
      <Comments />
      <Footer />
    </>
  );
}
