/* eslint-disable @next/next/no-img-element */
"use client";

export default function Card() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <img
        className="h-48 w-full object-cover object-end"
        src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
        alt="Home in Countryside"
      />
      <div className="p-6">
        <h4 className="my-2 font-semibold text-lg leading-tight truncate">
          Alaska: Westminster to Greenwich River Thames
        </h4>
        <div className="flex items-center gap-1 mb-2 text-sm">
          <img src="/icons/clock.svg" alt="" />
          <span>Duration 2 hours</span>
        </div>
        <div className="flex items-center gap-1 mb-2 text-sm">
          <img src="/icons/car.svg" alt="" />
          <span>Transport Facility</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src="/icons/family.svg" alt="" />
          <span>Family Plan</span>
        </div>
        <div className="flex items-center justify-between text-gray-400 border-t border-gray-300 mt-3 pt-2">
          <div>
            <div className="flex items-center mb-2">
              <img width={20} height={20} src="/icons/star.svg" alt="" />
              <img width={20} height={20} src="/icons/star.svg" alt="" />
              <img width={20} height={20} src="/icons/star.svg" alt="" />
              <img width={20} height={20} src="/icons/star.svg" alt="" />
            </div>
            <p>584 reviews</p>
          </div>
          <div>
            <div className="font-bold text-2xl text-emerald-500">$35.00</div>
            <p>per person</p>
          </div>
        </div>
      </div>
    </div>
  );
}
