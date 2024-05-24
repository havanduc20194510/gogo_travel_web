"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Table, TableProps, message, notification } from "antd";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import { TaskStatus } from "@/component/ui/TaskStatus";
import { Task } from "@/models/task/get";
import { getAllTask, verifyTask } from "@/service/task";
import { useRouter } from "next/router";

export type NotificationType = "success" | "info" | "warning" | "error";

interface UserTask {
  id: string;
  userId: string;
  email: string;
  phone: string;
  tourId: string;
  tourName: string;
  bookingTourId: string;
  taskDeadline: string;
  taskStatus: string;
}

interface Props {
  data: UserTask[];
}

const UserTaskTable: React.FC<Props> = () => {
  const [taskList, setTaskList] = useState<Task[]>();

  const columns: TableProps<UserTask>["columns"] = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tour Name",
      dataIndex: "tourName",
      key: "tourName",
    },
    {
      title: "Booking Tour ID",
      dataIndex: "bookingTourId",
      key: "bookingTourId",
    },
    {
      title: "Task Deadline",
      dataIndex: "taskDeadline",
      key: "taskDeadline",
    },
    {
      title: "Task Status",
      dataIndex: "taskStatus",
      key: "taskStatus",
      render: (_, record) => (
        <>
          <div className="w-[100px] text-sm flex items-center mb-2">
            <TaskStatus status={record.taskStatus} />
          </div>
          {record.taskStatus === "IN_PROGRESS" && (
            <Button onClick={() => handleVerifyTask(record.id)} type="primary">
              Xác nhận hoàn thành
            </Button>
          )}
        </>
      ),
    },
  ];

  const getTask = useCallback(async () => {
    const res = await getAllTask();
    setTaskList(res.data);
  }, []);

  const handleVerifyTask = useCallback(
    async (id: string) => {
      try {
        await verifyTask(id);
        message.success("Xác nhận task thành công");
        await getTask();
      } catch (error: any) {
        message.error("Xác nhận task lỗi");
      }
    },
    [getTask]
  );

  useEffect(() => {
    getTask();
  }, [getTask]);

  return (
    <LayoutAdmin>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <Table
          columns={columns}
          dataSource={taskList}
          rowKey="id"
          pagination={false}
          className="overflow-x-auto"
        />
      </div>
    </LayoutAdmin>
  );
};

export default UserTaskTable;
