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
import { User } from "@/models/user/login";
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
  );
};
