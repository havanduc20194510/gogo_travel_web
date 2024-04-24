"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Banner from "@/component/page/Home/Banner";
import Comments from "@/component/page/Home/Comments";
import PopularTours from "@/component/page/Home/PopularTours/PopularTours";
import TopDestinations from "@/component/page/Home/TopDestinations/TopDestinations";
import Vision from "@/component/page/Home/Vision";
import { Tour, TourListResponse } from "@/models/tour";
import { getTours } from "@/service/tour";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [tourListResponse, setTourListResponse] = useState<TourListResponse>();

  const loadTour = useCallback(async () => {
    try {
      const response = await getTours();
      setTourListResponse(response);
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  return (
    <>
      <Navbar />
      <Banner />
      <Vision />
      <PopularTours tourList={tourListResponse?.data} />
      <TopDestinations tourList={tourListResponse?.data} />
      <Comments />
      <Footer />
    </>
  );
}
