"use client";

import FilterBar from "./FilterBar";
import Heading from "./Heading";

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
          <div className="col-span-3">07</div>
        </div>
      </div>
    </div>
  );
}
