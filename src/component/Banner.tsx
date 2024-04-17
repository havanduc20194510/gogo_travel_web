/* eslint-disable @next/next/no-img-element */
"use client";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/banner.png"
          alt="banner"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Vùng đất mới con người mới
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Đón bình minh ở một nơi xa, cảm nhận sự bình yên của đát trời. <br />
          Cuộc sống bình yên là vậy, thư giản, giao lưu và trải nghiệm
        </p>

        <form>
          <label
            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <img
              src="/icons/map.svg"
              alt="map"
              width={20}
              height={20}
              className="ml-5"
            />
            <input
              id="search-bar"
              placeholder="Điểm đến"
              name="q"
              className="px-6 py-2 w-full flex-1 outline-none bg-white text-black border-r border-black"
            />
            <input
              id="search-bar"
              placeholder="Số ngày ở"
              name="q"
              className="px-6 py-2 w-full flex-1 outline-none bg-white text-black border-r border-black"
            />
            <input
              id="search-bar"
              placeholder="Số người"
              name="q"
              className="px-6 py-2 w-full flex-1 outline-none bg-white text-black"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-emerald-700 border-emerald-700 text-white-700 fill-emerald-700 active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <img
                  src="/icons/search.svg"
                  alt="map"
                  width={20}
                  height={20}
                  className="mr-5"
                />
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
