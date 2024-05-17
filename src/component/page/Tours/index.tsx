"use client";

import { getTourByFilterAndSort } from "@/service/tour";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Heading from "./Heading";
import TourList from "./TourList";
import { Tour, TourSearchRequest } from "@/models/tour/get";
import { Spin } from "antd";
import { useSearchParams } from "next/navigation";
import FilterBar, { FilterValue } from "./FilterBar";

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
      const res = await getTourByFilterAndSort(query);
      setTourList(res.data.content);
    } catch {
      setTourList([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleSort = useCallback(async (selectedValue: string) => {
    const response = await getTourByFilterAndSort({
      sortField: selectedValue,
    });
    setTourList(response.data.content ?? []);
  }, []);

  const handleSubmit = useCallback(async (filterValue?: FilterValue) => {
    const response = await getTourByFilterAndSort({
      ...filterValue,
    });

    setTourList(response.data.content ?? []);
  }, []);

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
        <Heading count={tourList?.length} onChange={handleSort} />
      </div>
      <div className="content bg-slate-100 mt-10 p-5">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <FilterBar onSubmit={handleSubmit} />
          </div>
          <div className="col-span-3">
            <TourList tourList={tourList} />
          </div>
        </div>
      </div>
    </div>
  );
}
