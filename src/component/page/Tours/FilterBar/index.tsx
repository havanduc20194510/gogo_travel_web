"use client";

import { useState } from "react";
import FromTo from "./forms/FromTo";
import TypeTours from "./forms/TypeTours";

export type FilterValue = {
  filterType?: string;
  filterPriceMin?: number;
  filterPriceMax?: number;
};

type Props = {
  onSubmit: (filterValue?: FilterValue) => void;
};

export default function FilterBar({ onSubmit }: Props) {
  const [filterValue, setFilterValue] = useState<FilterValue>();

  const handleChange = (fieldName: string, value: string) => {
    setFilterValue({
      ...filterValue,
      [fieldName]: value,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <FromTo onChange={handleChange} />
      <TypeTours onChange={handleChange} />
      <button
        className="shadow mt-10 bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => onSubmit(filterValue)}
      >
        Tìm kiếm
      </button>
    </div>
  );
}
