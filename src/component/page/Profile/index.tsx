/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { useCallback, useEffect, useRef, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { editUser, getUserById } from "@/service/user";
import { User } from "@/models/user/get";
import { Spin, notification } from "antd";

const defaultUser = {
  username: "",
  password: "",
  email: "",
  phone: "",
  address: "",
};
type NotificationType = "success" | "info" | "warning" | "error";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [formData, setFormData] = useState<Omit<User, "id">>(defaultUser);

  const [user, setUser] = useState<Omit<User, "id">>(defaultUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loadUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUserById(
        "ee050da6-6049-482f-8ee7-c5d457ec30f5"
      );
      setFormData(response);
      setUser(response);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  const openNotificationWithIcon = useCallback(
    (type: NotificationType) => {
      api[type]({
        message: "Edit user success",
      });
    },
    [api]
  );

  const handleSubmit = useCallback(async () => {
    try {
      const res = await editUser(
        "ee050da6-6049-482f-8ee7-c5d457ec30f5",
        formData
      );
      setUser(res);
      openNotificationWithIcon("success");
    } catch {
      //Do nothing
    }
  }, [formData, openNotificationWithIcon]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {contextHolder}
      <div className="py-24 grid grid-cols-4 content2">
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  {user.username}
                </h3>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                  <svg
                    className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      className=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  {user.address}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className={`w-full col-span-3 ${!isEdit && "opacity-70"}`}>
          <div className="text-end">
            <EditOutlined
              className="text-3xl text-emerald-500 cursor-pointer"
              onClick={() => setIsEdit(!isEdit)}
            />
          </div>

          <h1 className=" text-xl mb-3">Personal Information</h1>

          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
          <input
            className="bg-gray-200 mb-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            name="username"
            value={formData?.username}
            onChange={handleChange}
            disabled={!isEdit}
          />

          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-phone"
          >
            Phone
          </label>

          <input
            className="bg-gray-200 mb-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-phone"
            type="text"
            disabled={!isEdit}
            name="phone"
            value={formData?.phone}
            onChange={handleChange}
          />

          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-address"
          >
            Address
          </label>

          <input
            className="bg-gray-200 mb-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="text"
            disabled={!isEdit}
            name="address"
            value={formData?.address}
            onChange={handleChange}
          />

          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>

          <input
            className="bg-gray-200 mb-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-address"
            type="text"
            disabled={!isEdit}
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />

          <label
            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>

          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="******************"
            disabled={!isEdit}
            name="password"
            value={formData?.password}
            onChange={handleChange}
          />
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow mt-10 bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                disabled={!isEdit}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
