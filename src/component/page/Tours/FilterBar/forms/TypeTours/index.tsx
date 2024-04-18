"use client";

import { DatePicker } from "@/component/ui/Datepicker";
import FormHeading from "../FormHeading";

export default function TypeTours() {
  return (
    <FormHeading title="Loại tour">
      <div className="flex flex-col gap-3">
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-500">Tour trong nước</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-500">Tour nước ngoài</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-500">Tour lễ hội</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-500">Tour khách đoàn</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-500">Tour khách lẻ</span>
        </label>
        <p className="text-emerald-600  mt-5 text-center">Hiển thị thêm</p>
      </div>
    </FormHeading>
  );
}
