/* eslint-disable @next/next/no-img-element */
"use client";

import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/utils/localStorage";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { User } from "@/models/user/get";
import { getUserById, logout } from "@/service/user";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState<User | undefined>();

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 1025);
    };

    updateMedia();

    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    deleteFromLocalStorage("user");
    deleteFromLocalStorage("token");
    setUserInfo(undefined);
  }, []);

  const items: MenuProps["items"] = [
    {
      label: <a href="/profile">Trang cá nhân</a>,
      key: "0",
    },
    {
      label: (
        <a href="/login" onClick={handleLogout}>
          Đăng xuất
        </a>
      ),
      key: "1",
    },
  ];

  const isGameManage = userInfo?.roles?.includes("GAME_MANAGER");

  if (userInfo?.roles?.includes("ADMIN") || isGameManage) {
    items.push({
      label: <a href={`${isGameManage ? "/admin/task" : "/admin"}`}>Admin</a>,
      key: "2",
    });
  }

  const getUser = useCallback(async () => {
    try {
      const user: User | undefined = getFromLocalStorage("user");
      const res = await getUserById(user?.id ?? "");
      setUserInfo(res.data);
    } catch {
      //
    }
  }, []);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="fixed z-50 w-full py-2.5 bg-black opacity-80">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center">
            <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>
            {!!userInfo ? (
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div className="text-white select-none cursor-pointer">
                      {userInfo.username}
                    </div>
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {(isShowMenu || !isMobile) && (
            <div
              className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="/tours"
                    className={`block py-2 pl-3 pr-4  ${
                      pathname.includes("/tours")
                        ? "text-emerald-700"
                        : "text-white"
                    } rounded lg:bg-transparent  lg:p-0 hover:text-emerald-700 `}
                    aria-current="page"
                  >
                    Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/destination"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Điểm đến
                  </a>
                </li>
                <li>
                  <a
                    href="/suggest"
                    className={`block py-2 pl-3 pr-4 ${
                      pathname.includes("/suggest")
                        ? "text-emerald-700"
                        : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Gợi ý
                  </a>
                </li>
                <li>
                  <a
                    href="/map"
                    className={`block py-2 pl-3 pr-4 ${
                      pathname.includes("/map")
                        ? "text-emerald-700"
                        : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Bản đồ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Yêu thích
                  </a>
                </li>
                {isMobile && (
                  <>
                    <li>
                      <a
                        href="/profile"
                        className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Trang cá nhân
                      </a>
                    </li>
                    <li>
                      <a
                        href="/login"
                        onClick={handleLogout}
                        className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Logout
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
