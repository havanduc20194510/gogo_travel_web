"use client";

import Select from "@/component/ui/Select";

export default function Heading() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl">Số tour tìm được</h1>
        <p className="text-gray-500	">49 activities found</p>
      </div>
      <div className="flex items-center justify-center">
        <span className="mr-5 font-bold">Sort by:</span>
        <Select />
      </div>
    </div>
  );
}
