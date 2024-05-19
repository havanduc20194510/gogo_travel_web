"use client";

import { FC } from "react";

interface Status {
  label: string;
  class: string;
}

type TaskStatusType = Record<string, Status>;

type Props = {
  status: string;
};

export const TaskStatus: FC<Props> = ({ status }) => {
  const taskStatus: TaskStatusType = {
    PENDING: {
      label: "Chờ xác nhận",
      class:
        "bg-yellow-300 text-yellow-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
    IN_PROGRESS: {
      label: "Đang thực hiện",
      class:
        "bg-pink-300 text-pink-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
    EXPIRED: {
      label: "Đã hết hạn",
      class:
        "bg-red-300 text-red-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
    DONE: {
      label: "Hoàn thành",
      class:
        "bg-green-300 text-green-900 inline-block text-center px-2 py-1 rounded text-md font-semibold",
    },
  };

  return (
    <div className={`${taskStatus[status].class} text-nowrap`}>
      {taskStatus[status].label}
    </div>
  );
};
