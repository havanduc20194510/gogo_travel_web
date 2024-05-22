/* eslint-disable @next/next/no-img-element */
"use client";

import { DatePicker } from "@/component/ui/Datepicker";
import { GetTourByFilterAndSortRequest } from "@/models/tour/get";
import { formatDate, parseDateString } from "@/utils/date";
import { objectToQueryString } from "@/utils/url";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function Banner({
  onSearch,
}: {
  onSearch?: (values: GetTourByFilterAndSortRequest) => void;
}) {
  const searchParams = useSearchParams();

  const query: GetTourByFilterAndSortRequest = useMemo(() => {
    return {
      destination: searchParams.get("destination") ?? "",
      departureLocation: searchParams.get("departureLocation") ?? "",
      startDate: searchParams.get("startDate") ?? "",
      numberOfDay: searchParams.get("numberOfDay") ?? "",
    };
  }, [searchParams]);

  const router = useRouter();

  const [values, setValues] = useState<GetTourByFilterAndSortRequest>(query);

  const handleSubmit = () => {
    const query = objectToQueryString(values);
    router.push(`/tours?${query}`, { scroll: false });
  };

  return (
    <div className=" bg-[url('/banner.png')] bg-no-repeat	width-full  h-screen text-white bg-cover">
      <div className="relative z-10 flex flex-col justify-center h-full text-center">
        <div className="bg-black bg-opacity-50 text-white py-10 px-36 max-w-[1100px] mx-auto rounded-lg">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Vùng đất mới con người mới
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Đón bình minh ở một nơi xa, cảm nhận sự bình yên của đát trời.{" "}
            <br />
            Cuộc sống bình yên là vậy, thư giản, giao lưu và trải nghiệm
          </p>
          <div>
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm  flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <img
                src="/icons/map.svg"
                alt="map"
                width={20}
                height={20}
                className="ml-5"
              />
              <input
                id="search-bar"
                placeholder="Bạn muốn đi đâu"
                name="destination"
                className="px-6 py-2 w-full flex-1 outline-none bg-white text-black"
                onChange={(event) => {
                  setValues({ ...values, destination: event.target.value });
                }}
                value={values.destination}
              />
            </label>
          </div>
          <div>
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm   flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <img
                src="/icons/map.svg"
                alt="map"
                width={20}
                height={20}
                className="ml-5"
              />
              <input
                id="search-bar"
                placeholder="Điểm xuất phát"
                name="departureLocation"
                className="px-6 py-2 w-full flex-1 outline-none bg-white text-black border-r border-black"
                onChange={(event) => {
                  setValues({
                    ...values,
                    departureLocation: event.target.value,
                  });
                }}
                value={values.departureLocation}
              />
              <div className="z-10">
                <DatePicker
                  onChange={(selectedDate: Date) => {
                    setValues({
                      ...values,
                      startDate: formatDate(selectedDate),
                    });
                  }}
                  className="px-6 py-2 w-full flex-1 outline-none bg-white text-black border-r border-black"
                  defaultDate={parseDateString(values.startDate)}
                />
              </div>
              <input
                id="search-bar"
                placeholder="Số ngày"
                name="numberOfDay"
                className="px-6 py-2 w-full flex-1 outline-none bg-white text-black"
                onChange={(event) => {
                  setValues({ ...values, numberOfDay: event.target.value });
                }}
                value={values.numberOfDay}
              />
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto px-6 py-3 bg-emerald-700 border-emerald-700 text-white-700 fill-emerald-700 active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <img
                    src="/icons/search.svg"
                    alt="map"
                    width={20}
                    height={20}
                    className="mr-5"
                  />
                  <span
                    className="text-sm font-semibold whitespace-nowrap truncate mx-auto"
                    onClick={() => onSearch?.(values)}
                  >
                    Search
                  </span>
                </div>
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
