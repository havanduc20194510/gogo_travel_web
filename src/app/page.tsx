"use client";
import Banner from "@/component/Banner";
import Comments from "@/component/Comments";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import PopularTours from "@/component/PopularTours";
import TopDestinations from "@/component/TopDestinations";
import Vision from "@/component/Vision";

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
