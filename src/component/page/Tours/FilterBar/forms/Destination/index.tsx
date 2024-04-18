"use client";

import FormHeading from "../FormHeading";

export default function Destination() {
  return (
    <FormHeading title="Điểm đến">
      <div className="flex flex-col gap-3 ">
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Hà Nội</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Đà Nẵng</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Hà Giang</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">TP.Hồ Chí Minh</span>
        </label>

        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Cần Thơ</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Hải Phòng</span>
        </label>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-500"
          />
          <span className="ml-2 text-gray-500">Thanh Hóa</span>
        </label>
        <p className="text-emerald-600  mt-5 text-center">Hiển thị thêm</p>
      </div>
    </FormHeading>
  );
}
