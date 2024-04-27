import React from "react";
import { List } from "antd";
import { ScheduleDetail } from "@/models/tour/get";

type Props = {
  scheduleDetail?: ScheduleDetail[];
};

const Detail: React.FC<Props> = ({ scheduleDetail }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={scheduleDetail}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            className="w-2/3"
            title={item.place}
            description={item.activity}
          />
          <div className="w-1/3 text-center">{item.timeLine}</div>
        </List.Item>
      )}
    />
  );
};

export default Detail;
