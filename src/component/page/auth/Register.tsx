"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { RegisterRequest } from "@/models/user/register";
import { login, register } from "@/service/user";
import { saveToLocalStorage } from "@/utils/localStorage";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export type NotificationType = "success" | "info" | "warning" | "error";

export default function Register() {
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterRequest>({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const openNotificationWithIcon = useCallback(
    (type: NotificationType, message: string) => {
      api[type]({
        message,
      });
    },
    [api]
  );
  const handleSubmit = useCallback(async () => {
    try {
      await register(formData);

      const res = await login({
        username: formData.username,
        password: formData.password,
      });

      saveToLocalStorage("user", res.data.user);
      saveToLocalStorage("token", res.data.token);

      const redirectUrl = res.data.user.roles?.includes("ADMIN")
        ? "/admin"
        : "/";

      router.push(redirectUrl);
      openNotificationWithIcon("success", "Đăng ký thành công");
    } catch (error: any) {
      openNotificationWithIcon("error", error.response.data.message ?? "");
    }
  }, [formData, openNotificationWithIcon, router]);

  return (
    <>
      {contextHolder}
      <Navbar />
      <div className="py-48 max-w-sm mx-auto flex items-center justify-center w-full">
        <div className="w-full">
          <h1 className=" text-xl mb-5 font-bold">Đăng ký</h1>
          <form className={`w-full col-span-3 `}>
            <label
              className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Name
            </label>

            <input
              className="bg-gray-200 mb-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-address"
              type="text"
              name="username"
              value={formData.username}
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
              name="email"
              value={formData.email}
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
                  onClick={handleSubmit}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
