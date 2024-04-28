"use client";

import { getTours } from "@/service/tour";
import { useCallback, useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import Heading from "./Heading";
import SpecialList from "./SpecialList";
import TourList from "./TourList";
import { Tour, TourListResponse } from "@/models/tour/get";
import { Spin } from "antd";

export default function Tours() {
  const [tourList, setTourList] = useState<Tour[]>();
  const [loading, setLoading] = useState(false);

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getTours();
      setTourList(response.data);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="">
      <div className="p-20">
        <Heading count={tourList?.length} />
      </div>
      <div className="content bg-slate-100 mt-10 p-5">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <FilterBar />
          </div>
          <div className="col-span-3">
            <TourList tourList={tourList} />
          </div>
        </div>
      </div>
      <div className="content py-5">
        <h1 className="text-lg font-medium my-5 py-5 border-b border-gray-300">
          Outside the city specials
        </h1>
        <SpecialList />
      </div>
    </div>
  );
}
