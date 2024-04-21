"use client";

export default function Step() {
  return (
    <div className="flex">
      <div className="mr-4 flex flex-col items-center">
        <div className="flex h-10 w-10 leading-10	 items-center justify-center text-white rounded-xl bg-amber-600 ">
          01
        </div>
        <div className="h-full border-dashed border border-amber-600" />
      </div>
      <div className="pt-1 pb-8">
        <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
          Day 1: Departure
        </p>
        <p className="text-gray-600  mb-7 text-lg	">
          Qui tempore voluptate qui quia commodi rem praesentium alias et
          voluptates officia sed molestiae sint et voluptas quos. Qui harum
          repudiandae galisum dolorem
        </p>
        <ul className="ml-5 list-disc text-gray-600">
          <li className="my-1">5 Star Accommodation</li>
          <li className="my-1">Breakfast</li>
          <li className="my-1">5 Star Accommodation</li>
          <li className="my-1">Breakfast</li>
        </ul>
      </div>
    </div>
  );
}
