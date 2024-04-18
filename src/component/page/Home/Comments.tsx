/* eslint-disable @next/next/no-img-element */
"use client";

export default function Comments() {
  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="text-center mb-12">
          <b className="text-emerald-700 text-lg">Đánh giá</b>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
            Mọi người nghĩ gì?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="text-lg font-medium text-gray-800">
                  John Doe
                </div>
                <div className="text-gray-500">2 hours ago</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lorem nulla. Donec consequat urna a tortor sagittis lobortis.
            </p>
          </div>
          <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="text-lg font-medium text-gray-800">
                  John Doe
                </div>
                <div className="text-gray-500">2 hours ago</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lorem nulla. Donec consequat urna a tortor sagittis lobortis.
            </p>
          </div>
          <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="text-lg font-medium text-gray-800">
                  John Doe
                </div>
                <div className="text-gray-500">2 hours ago</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lorem nulla. Donec consequat urna a tortor sagittis lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
