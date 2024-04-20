/* eslint-disable @next/next/no-img-element */
import React, { ReactNode, useCallback, useState } from "react";

type Tab = {
  title: string;
  content: ReactNode;
  iconUrl: string;
};

type Props = {
  tabs: Tab[];
};

const TabContent = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <div className="pt-20">
      <div className="grid grid-cols-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-10 font-bold ${
              activeTab === index ? "bg-whit" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center gap-2">
              <img width={20} height={20} src={tab.iconUrl} alt="" />
              {tab.title}
            </div>
          </button>
        ))}
      </div>
      <div className=" p-4 rounded-b-md">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabContent;
