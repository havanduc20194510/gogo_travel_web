/* eslint-disable @next/next/no-img-element */
import React, { FC, useCallback, useState } from "react";
import type { FormProps } from "antd";
import { Form, Select } from "antd";
import { createBooking } from "@/service/booking";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User as UserLogin } from "@/models/user/login";
import { Toast, showToast } from "@/component/ui/toast";
import { useParams } from "next/navigation";
import { DatePicker } from "@/component/ui/Datepicker";
import { formatDate } from "@/utils/date";
import { Tour } from "@/models/tour/get";

export type FieldTaskType = {
  email: string;
  phone: string;
  startDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  note: string;
};

type Props = {
  tour: Tour;
};

const BookingForm: FC<Props> = ({ tour }) => {
  const user: UserLogin | undefined = getFromLocalStorage("user");
  const param = useParams();
  const id = typeof param.id === "string" ? param.id : "";

  const handleSubmit: FormProps<FieldTaskType>["onFinish"] = useCallback(
    async (values: FieldTaskType) => {
      try {
        await createBooking({
          ...values,
          userId: user?.user.id ?? "",
          tourId: id,
          numberOfAdults: Number(values.numberOfAdults),
          numberOfChildren: Number(values.numberOfChildren),
          numberOfBabies: Number(values.numberOfBabies),
        });
        showToast({
          message: "Book tour thành công",
          type: "success",
        });
      } catch {
        showToast({
          message: "Book tour thất bại",
          type: "error",
        });
      }
    },
    [id, user?.user.id]
  );

  const departureTimes =
    tour.departureTimes?.map((departureTime) => ({
      label: departureTime.startDate,
      value: departureTime.startDate,
    })) ?? [];

  return (
    <div className="container mx-auto p4-10 bg-gray-100">
      <Toast />
      <div className="max-w-md mx-auto  rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8">
            <h2 className="text-2xl text-center font-bold text-gray-800">
              Book This Tour
            </h2>
            <p className="my-4 text-center text-gray-600">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
            <Form
              name="basic"
              onFinish={handleSubmit}
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item<FieldTaskType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
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
              </Form.Item>
              <Form.Item<FieldTaskType>
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="+098 456 321"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
                    <img width={20} height={20} src="/icons/phone.svg" alt="" />
                  </span>
                </div>
              </Form.Item>
              <Form.Item
                name="startDate"
                rules={[
                  { required: true, message: "Please input your start date!" },
                ]}
              >
                <select
                  defaultValue={"Start date"}
                  className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                >
                  {departureTimes?.map((option) => (
                    <option key={option.value}>{option.value}</option>
                  ))}
                </select>
              </Form.Item>

              <Form.Item<FieldTaskType>
                name="numberOfAdults"
                rules={[
                  {
                    required: true,
                    message: "Please input your number of adults!",
                  },
                ]}
              >
                <div className="relative mt-1">
                  <input
                    type="number"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Number of adults"
                  />
                  {/* <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
            <img width={20} height={20} src="/icons/phone.svg" alt="" />
          </span> */}
                </div>
              </Form.Item>

              <Form.Item<FieldTaskType>
                name="numberOfChildren"
                rules={[
                  {
                    required: true,
                    message: "Please input your number of children!",
                  },
                ]}
              >
                <div className="relative mt-1">
                  <input
                    type="number"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Number of children"
                  />
                  {/* <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
            <img width={20} height={20} src="/icons/phone.svg" alt="" />
          </span> */}
                </div>
              </Form.Item>
              <Form.Item<FieldTaskType>
                name="numberOfBabies"
                rules={[
                  {
                    required: true,
                    message: "Please input your number of babies!",
                  },
                ]}
              >
                <div className="relative mt-1">
                  <input
                    type="number"
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Number of babies"
                  />
                  {/* <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
            <img width={20} height={20} src="/icons/phone.svg" alt="" />
          </span> */}
                </div>
              </Form.Item>

              <Form.Item<FieldTaskType> name="note">
                <div className="relative mt-1">
                  <textarea
                    className="w-full text-lg pl-10 pr-3 py-6 border focus:outline-none rounded shadow"
                    placeholder="Note"
                  />
                  {/* <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-3">
            <img width={20} height={20} src="/icons/phone.svg" alt="" />
          </span> */}
                </div>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button
                  className="bg-amber-700 text-center hover:bg-amber-500 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book Now
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
