/* eslint-disable @next/next/no-img-element */
"use client";

export default function PopularTours() {
  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex  text-center items-center justify-center gap-8 sm:mb-8 md:mb-12">
          <div>
            <b className="text-emerald-700 text-lg">Best offers</b>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Tour được ưa chuộng
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/product.jpeg"
              loading="lazy"
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
              <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
              <div>
                <span className="font-bold text-lg text-white">
                  1000.000vnđ
                </span>
                <span className="text-emerald-500 font-bold text-xs">
                  Price stars from
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/product.jpeg"
              loading="lazy"
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
              <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
              <div>
                <span className="font-bold text-lg text-white">
                  1000.000vnđ
                </span>
                <span className="text-emerald-500 font-bold text-xs">
                  Price stars from
                </span>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/product.jpeg"
              loading="lazy"
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
              <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
              <div>
                <span className="font-bold text-lg text-white">
                  1000.000vnđ
                </span>{" "}
                <span className="text-emerald-500 font-bold text-xs">
                  Price stars from
                </span>
              </div>
            </div>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/product.jpeg"
              loading="lazy"
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
              <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
              <div>
                <span className="font-bold text-lg text-white">
                  1000.000vnđ
                </span>
                <span className="text-emerald-500 font-bold text-xs">
                  Price stars from
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/product.jpeg"
              loading="lazy"
              alt="Product"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
              <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
              <div>
                <span className="font-bold text-lg text-white">
                  1000.000vnđ
                </span>
                <span className="text-emerald-500 font-bold text-xs">
                  Price stars from
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
