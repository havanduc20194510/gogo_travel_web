/* eslint-disable @next/next/no-img-element */
"use client";

export default function TourList() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-y-3 items-start">
        <li className="relative flex flex-row items-center bg-white rounded-md">
          <div className="order-1 ml-6 ">
            <div className="flex items-center width-full gap-5">
              <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
                Water Activities
              </button>
              <span className="text-gray-300">|</span>
              <div className="flex items-center">
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
              </div>
              <span className="text-sm text-gray-500">(584 reviews)</span>
            </div>
            <h3 className="my-3 text-slate-900 font-semibold text-lg">
              Westminster to Greenwich River Thames
            </h3>

            <div className="flex items-center gap-2 text-gray-500">
              <img src="/icons/clock.svg" alt="" />
              <span>|</span>
              <span>2 hours</span>
              <span>|</span>
              <img src="/icons/car.svg" alt="" />
              <span>Transport</span>
              <span>|</span>
              <img src="/icons/family.svg" alt="" />
              <span>Family Plan</span>
            </div>
          </div>
          <img
            src="/location.png"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50  sm:mb-0"
            width={150}
            height={140}
          />
        </li>
        <li className="relative flex flex-row items-center bg-white rounded-md">
          <div className="order-1 ml-6 ">
            <div className="flex items-center width-full gap-5">
              <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
                Water Activities
              </button>
              <span className="text-gray-300">|</span>
              <div className="flex items-center">
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
              </div>
              <span className="text-sm text-gray-500">(584 reviews)</span>
            </div>
            <h3 className="my-3 text-slate-900 font-semibold text-lg">
              Westminster to Greenwich River Thames
            </h3>

            <div className="flex items-center gap-2 text-gray-500">
              <img src="/icons/clock.svg" alt="" />
              <span>|</span>
              <span>2 hours</span>
              <span>|</span>
              <img src="/icons/car.svg" alt="" />
              <span>Transport</span>
              <span>|</span>
              <img src="/icons/family.svg" alt="" />
              <span>Family Plan</span>
            </div>
          </div>
          <img
            src="/location.png"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 sm:mb-0"
            width={150}
            height={140}
          />
        </li>
        <li className="relative flex flex-row items-center bg-white rounded-md">
          <div className="order-1 ml-6 ">
            <div className="flex items-center width-full gap-5">
              <button className="rounded-2xl bg-emerald-600 text-sm px-4 py-1 leading-none text-white">
                Water Activities
              </button>
              <span className="text-gray-300">|</span>
              <div className="flex items-center">
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
                <img width={20} height={20} src="/icons/star.svg" alt="" />
              </div>
              <span className="text-sm text-gray-500">(584 reviews)</span>
            </div>
            <h3 className="my-3 text-slate-900 font-semibold text-lg">
              Westminster to Greenwich River Thames
            </h3>

            <div className="flex items-center gap-2 text-gray-500">
              <img src="/icons/clock.svg" alt="" />
              <span>|</span>
              <span>2 hours</span>
              <span>|</span>
              <img src="/icons/car.svg" alt="" />
              <span>Transport</span>
              <span>|</span>
              <img src="/icons/family.svg" alt="" />
              <span>Family Plan</span>
            </div>
          </div>
          <img
            src="/location.png"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50  sm:mb-0"
            width={150}
            height={140}
          />
        </li>
      </ul>
      <div className="flex items-center justify-center mt-5">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 w-full text-sm font-medium text-emerald-600 focus:outline-none bg-white rounded-full border border-emerald-600 hover:bg-emerald-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Load more
        </button>
      </div>
    </>
  );
}
