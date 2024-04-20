"use client";

import FilterBar from "./FilterBar";
import Heading from "./Heading";
import SpecialList from "./SpecialList";
import TourList from "./TourList";

export default function Tours() {
  return (
    <div className="">
      <div className="p-20">
        <Heading />
      </div>
      <div className="content bg-slate-100 mt-10 p-5">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <FilterBar />
          </div>
          <div className="col-span-3">
            <TourList />
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
