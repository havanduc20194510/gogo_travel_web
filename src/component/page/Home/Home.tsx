"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Banner from "@/component/page/Home/Banner";
import Comments from "@/component/page/Home/Comments";
import PopularTours from "@/component/page/Home/PopularTours/PopularTours";
import TopDestinations from "@/component/page/Home/TopDestinations/TopDestinations";
import Vision from "@/component/page/Home/Vision";
import { GetPlaceResponse } from "@/models/place/get";
import { TourListResponse } from "@/models/tour/get";
import { getTopPlace } from "@/service/place";
import { getTopTours, getTours } from "@/service/tour";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [placeListResponse, setPlaceListResponse] =
    useState<GetPlaceResponse>();
  const [topTourResponse, setTopTourResponse] = useState<TourListResponse>();
  const [loading, setLoading] = useState(false);

  const loadTour = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getTopPlace();
      setPlaceListResponse(response);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  const loadTopTour = useCallback(async () => {
    try {
      const response = await getTopTours();
      setTopTourResponse(response);
    } catch {
      //Do nothing
    }
  }, []);

  useEffect(() => {
    loadTour();
    loadTopTour();
  }, [loadTopTour, loadTour]);

  return (
    <>
      <Navbar />
      <Banner />
      <Vision />
      <PopularTours tourList={topTourResponse?.data} loading={loading} />
      <TopDestinations placeList={placeListResponse?.data} loading={loading} />
      <Comments />
      <Footer />
    </>
  );
}
