"use client";

import { FC, useCallback, useMemo } from "react";

type Props = {
  tab: string;
  onChangeTab: (tab: string) => void;
};

export const Tab: FC<Props> = ({ tab, onChangeTab }) => {
  const getActiveClass = useCallback(
    (tabActive: string) => {
      if (tabActive === tab) {
        return "bg-gray-900 text-white  border-gray-900 hover:bg-gray-800";
      }
      return "bg-white text-gray-800 border-gray-200 hover:bg-gray-100";
    },
    [tab]
  );

  const tabList = [
    {
      tab: "info",
      name: "Thông tin tài khoản",
    },
    {
      tab: "booking",
      name: "Lịch sử đặt tour",
    },
    {
      tab: "payment",
      name: "Lịch sử thanh toán",
    },
    {
      tab: "task",
      name: "Danh sách task",
    },
  ];

  return (
    <div className="flex w-full rounded shadow">
      {tabList.map((tab) => {
        return (
          <a
            key={tab.name}
            aria-current="false"
            className={`w-full cursor-pointer flex justify-center font-medium rounded-l px-5 py-2 border ${getActiveClass(
              tab.tab
            )}`}
            onClick={() => onChangeTab(tab.tab)}
          >
            {tab.name}
          </a>
        );
      })}
    </div>
  );
};
