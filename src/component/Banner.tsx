/* eslint-disable @next/next/no-img-element */
"use client";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
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
            <input
              id="search-bar"
              placeholder="your keyword here"
              name="q"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-black"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-emerald-700 border-emerald-700 text-white-700 fill-emerald-700 active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
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
