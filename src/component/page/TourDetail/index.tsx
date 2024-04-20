"use client";

import TabContent from "@/component/ui/TabContent";
import Banner from "../Home/Banner";
import TourPlan from "./TourPlan";

export default function TourDetail() {
  const tabs = [
    {
      title: "Chương trình tour",
      content: <TourPlan />,
      iconUrl: "/icons/info.svg",
    },
    {
      title: "Lịch trình",
      content: <div>This is content for Tab 2</div>,
      iconUrl: "/icons/calendar.svg",
    },
    {
      title: "Khởi hành",
      content: <div>This is content for Tab 3</div>,
      iconUrl: "/icons/map.svg",
    },
    {
      title: "Bảng giá",
      content: <div>This is content for Tab 4</div>,
      iconUrl: "/icons/price.svg",
    },
  ];

  return (
    <>
      <Banner />
      <div className="content">
        <TabContent tabs={tabs} />
      </div>
    </>
  );
}
