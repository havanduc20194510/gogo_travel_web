"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { editUser, getUserById } from "@/service/user";
import { notification } from "antd";
import {
  getFromLocalStorage,
  updateLocalStorageItem,
} from "@/utils/localStorage";
import { User } from "@/models/user/get";
const defaultUser = {
  id: "",
  username: "",
  password: "",
  email: "",
  phone: "",
  address: "",
};

export type NotificationType = "success" | "info" | "warning" | "error";

type Props = {
  userInfo?: User;
  onChangeUserInfo: (userInfo?: User) => void;
};

export const UserInfo = ({ userInfo, onChangeUserInfo }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [formData, setFormData] = useState<User>(defaultUser);
  const user: User | undefined = getFromLocalStorage("user");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      const res = await editUser(userInfo?.id ?? "", formData);
      onChangeUserInfo(res.data);

      openNotificationWithIcon("success");
      updateLocalStorageItem("user", res.data);
    } catch {
      //Do nothing
    }
  }, [formData, onChangeUserInfo, openNotificationWithIcon, userInfo?.id]);

  const getUser = useCallback(async () => {
    const res = await getUserById(user?.id ?? "");
    onChangeUserInfo(res.data);
    if (res.data) {
      setFormData(res.data);
    }
  }, [onChangeUserInfo, user?.id]);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className={`mt-5 ${!isEdit && "opacity-70"}`}>
      {contextHolder}
      <div className="text-end">
        <EditOutlined
          className="text-3xl text-emerald-500 cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        />
      </div>

      <h1 className=" text-xl mb-3">Personal Information</h1>
      <div className="my-4 md:flex md:items-center md:justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
        <p className="text-xl">{formData?.coin}</p>
      </div>

      <label
        className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        User Name
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
      
      <div className="md:flex md:items-center md:justify-center">
        <div className="md:w-1/2" />
        <div className="md:w-1/2">
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
  );
};
