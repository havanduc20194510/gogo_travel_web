/* eslint-disable @next/next/no-img-element */
"use client";

export default function Form() {
  return (
    <div className="container mx-auto p4-10 bg-gray-100">
      <div className="max-w-md mx-auto  rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8">
            <h2 className="text-2xl text-center font-bold text-gray-800">
              Book This Tour
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
            <form className="mt-6">
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Name"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img width={20} height={20} src="/icons/user.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Email"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img width={20} height={20} src="/icons/email.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Confirm Email"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img width={20} height={20} src="/icons/email.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Phone"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img width={20} height={20} src="/icons/phone.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="dd-mm-yy"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img
                      width={20}
                      height={20}
                      src="/icons/calendar.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Number of ticket"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img
                      width={20}
                      height={20}
                      src="/icons/ticket.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative mt-1">
                  <textarea
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  className="bg-amber-700 text-center hover:bg-amber-500 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
