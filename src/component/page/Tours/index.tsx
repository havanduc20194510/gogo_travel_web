"use client";

import { getTours, tourSearch } from "@/service/tour";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Heading from "./Heading";
import TourList from "./TourList";
import { Tour, TourSearchRequest } from "@/models/tour/get";
import { Spin } from "antd";
import { useSearchParams } from "next/navigation";
import FilterBar from "./FilterBar";

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Tours() {
  const [tourList, setTourList] = useState<Tour[]>();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const query: TourSearchRequest = useMemo(() => {
    return {
      destination: searchParams.get("destination") ?? "",
      departureLocation: searchParams.get("departureLocation") ?? "",
      startDate: searchParams.get("startDate") ?? "",
      numberOfDay: searchParams.get("numberOfDay") ?? "",
    };
  }, [searchParams]);

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const response =
        !!query.destination ||
        !!query.departureLocation ||
        !!query.startDate ||
        !!query.numberOfDay
          ? await tourSearch(query)
          : await getTours();

      setTourList(response.data);
    } catch {
      setTourList([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    loadTour();
    scrollToElement("section-1");
  }, [loadTour, query]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div id="section-1">
      <div className="p-5">
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
      </div>
    </div>
  );
}
