"use client";

export default function Steps() {
  return (
    <div className="p-4 max-w-xl mx-auto ">
      <h2 className=" mb-8 text-2xl font-bold">Tour plan</h2>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center text-white rounded-xl bg-amber-600 ">
            01
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 1
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt
            vehicula. Fusce sit amet dui tellus.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center text-white rounded-xl bg-amber-600 ">
            02
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 2
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center text-white rounded-xl bg-amber-600 ">
            03
          </div>
          <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 3
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed
            porttitor est nibh at nulla.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center text-white rounded-xl bg-amber-600 ">
            04
          </div>
        </div>
      </div>
    </div>
  );
}
