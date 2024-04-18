/* eslint-disable @next/next/no-img-element */
"use client";

export default function Footer() {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-emerald-800 text-white">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 text-sm">
          <a href="#" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide ">
              GogoTravel
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm">
              VietNam chúng tớ, một đất nước được ban tặng thiên nhiên cảnh sắc
              tươi đẹp trong lành, con người chân chất, bình dị nhưng cũng rất
              cởi mở hiếu khách. Cùng đến và hòa mình, trải nghiệm chuyến đi
              tuyệt vời của bạn!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide ">links</p>
          <a href="#">Discover</a>
          <a href="#">Special Deals</a>
          <a href="#">Services</a>
          <a href="#">Community</a>
          <a href="#">About Us</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide ">Services</p>
          <a href="#">About Us</a>
          <a href="#">Blog & Articles</a>
          <a href="#">Term and Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide ">Contact</p>
          <a href="#">Address: Jl.Codelaras No.205A</a>
          <a href="#">General Knowledge</a>
          <a href="#">MBA</a>
          <a href="#">Human Resource Management</a>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">
          © Copyright 2023 Company. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
