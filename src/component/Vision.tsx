/* eslint-disable @next/next/no-img-element */
"use client";

export default function Navbar() {
  return (
    <div className="text-gray-600 body-font bg-white z-0 relative">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/suggest.png"
          />
        </div>
        <div className="lg:flex-grow mt-5 md:mt-0  ml-10 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <b className="text-emerald-700 text-lg">Tầm nhìn giá trị</b>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Cùng khám phá những điều tuyệt vời
          </h1>
          <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description
            here Short description here Short description here Short description
            here.
          </p>
          <div className="flex flex-wrap w-full">
            <div className="p-2 sm:w-1/2 ">
              <p className="text-xl font-bold text-emerald-800">50+</p>
              <p>Tours</p>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <p className="text-xl font-bold text-emerald-800">100+</p>
              <p>Điểm đến</p>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <p className="text-xl font-bold text-emerald-800">68</p>
              <p>Elite Transportation</p>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <p className="text-xl font-bold text-emerald-800">32M+</p>
              <p>we help to find your dream place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
