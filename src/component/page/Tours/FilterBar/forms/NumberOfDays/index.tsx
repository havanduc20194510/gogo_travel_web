"use client";

import { DatePicker } from "@/component/ui/Datepicker";
import FormHeading from "../FormHeading";

export default function NumberOfDays() {
  return (
    <FormHeading title="Số ngày">
      <div className="flex flex-col gap-3 ">
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Trong 1 ngày</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">1-2 ngày</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">2-4 ngày</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Trên 4 ngày</span>
        </label>
      </div>
    </FormHeading>
  );
}
