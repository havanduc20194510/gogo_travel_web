"use client";

import { getTourByFilterAndSort } from "@/service/tour";
import { useCallback, useEffect, useMemo, useState } from "react";
import Heading from "./Heading";
import TourList from "./TourList";
import { GetTourByFilterAndSortRequest, Tour } from "@/models/tour/get";
import { useSearchParams } from "next/navigation";
import FilterBar, { FilterValue } from "./FilterBar";
import Banner from "../Home/Banner";

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Tours() {
  const [tourList, setTourList] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState<number>(10);
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const query: GetTourByFilterAndSortRequest = useMemo(() => {
    return {
      destination: searchParams.get("destination") ?? "",
      departureLocation: searchParams.get("departureLocation") ?? "",
      startDate: searchParams.get("startDate") ?? "",
      numberOfDay: searchParams.get("numberOfDay") ?? "",
    };
  }, [searchParams]);

  const [request, setRequest] = useState<GetTourByFilterAndSortRequest>({
    ...query,
    offset: 1,
    pageSize,
  });

  const loadTour = useCallback(
    async (values?: GetTourByFilterAndSortRequest) => {
      setLoading(true);

      try {
        const res = await getTourByFilterAndSort({ ...request, ...values });
        setTourList(res.data.content);
        setTotalPage(res.data.totalPages);
        setRequest({ ...request, ...values });
      } catch {
        setTourList([]);
      } finally {
        setLoading(false);
      }
    },
    [request]
  );

  const handleSort = useCallback(
    async (selectedValue: string) => {
      const response = await getTourByFilterAndSort({
        ...request,
        sortField: selectedValue,
      });
      setTourList(response.data.content ?? []);
      setRequest({ ...request, sortField: selectedValue });
    },
    [request]
  );

  const handleSubmit = useCallback(
    async (filterValue?: FilterValue) => {
      const response = await getTourByFilterAndSort({
        ...request,
        ...filterValue,
      });

      setTourList(response.data.content ?? []);
      setRequest({ ...filterValue, ...request });
    },
    [request]
  );

  const handleLoadMore = useCallback(async () => {
    const offset = page * pageSize;
    const response = await getTourByFilterAndSort({
      ...request,
      offset,
      pageSize,
    });

    const newTourList = [...tourList, ...response.data.content];

    setTourList(newTourList);

    setPage(page + 1);
  }, [page, request, tourList]);

  useEffect(() => {
    loadTour();
    scrollToElement("section-1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="section-1">
      <Banner onSearch={loadTour} />
      <div className="p-5">
        <Heading count={tourList?.length} onChange={handleSort} />
      </div>
      <div className="content bg-slate-100 mt-10 p-5">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <FilterBar onSubmit={handleSubmit} />
          </div>
          <div className="col-span-3">
            <TourList tourList={tourList} loading={loading} />
            <div className="flex items-center justify-center mt-5">
              {page < totalPage && (
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 w-full text-sm font-medium text-emerald-600 focus:outline-none bg-white rounded-full border border-emerald-600 hover:bg-emerald-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  onClick={handleLoadMore}
                >
                  Load more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
