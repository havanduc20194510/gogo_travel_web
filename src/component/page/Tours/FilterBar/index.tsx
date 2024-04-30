"use client";

import Destination from "./forms/Destination";
import FromTo from "./forms/FromTo";
import NumberOfDays from "./forms/NumberOfDays";

export default function FilterBar() {
  return (
    <div className="flex flex-col gap-2">
      <FromTo />
      {/* <TypeTours /> */}
      <NumberOfDays />
      <Destination />
    </div>
  );
}
