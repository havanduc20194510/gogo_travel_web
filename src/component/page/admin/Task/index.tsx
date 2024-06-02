"use client";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Button, Input, Table, TableProps, message } from "antd";
import { TaskStatus } from "@/component/ui/TaskStatus";
import { SearchFormRequest, Task } from "@/models/task/get";
import { getAllTask, getTaskByPhoneOrEmail, verifyTask } from "@/service/task";

export type NotificationType = "success" | "info" | "warning" | "error";

interface UserTask {
  id: string;
  userId: string;
  email: string;
  phone: string;
  tourId: string;
  tourName: string;
  taskName: string;
  bookingTourId: string;
  taskDeadline: string;
  taskStatus: string;
}

const TaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>();
  const [searchForm, setSearchForm] = useState<SearchFormRequest>();

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

  const columns: TableProps<UserTask>["columns"] = useMemo(
    () => [
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
        title: "Task Name",
        dataIndex: "taskName",
        key: "taskName",
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
              <Button
                onClick={() => handleVerifyTask(record.id)}
                type="primary"
              >
                Xác nhận hoàn thành
              </Button>
            )}
          </>
        ),
      },
    ],
    [handleVerifyTask]
  );

  const handleSearch = useCallback(async () => {
    try {
      if (searchForm?.email || searchForm?.phone) {
        const res = await getTaskByPhoneOrEmail(searchForm);
        setTaskList(res.data);
      } else {
        getTask();
      }
    } catch {
      // Do nothing
    }
  }, [getTask, searchForm]);

  const handleEmailChange = useCallback((e: any) => {
    setSearchForm((prev) => ({ ...prev, email: e.target.value }));
  }, []);

  const handlePhoneChange = useCallback((e: any) => {
    setSearchForm((prev) => ({ ...prev, phone: e.target.value }));
  }, []);

  useEffect(() => {
    getTask();
  }, [getTask]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4 my-10">
        <div>
          <div className="font-bold">Email:</div>
          <Input
            size="large"
            placeholder="Duc@gmail.com"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <div className="font-bold">Số điện thoại: </div>
          <Input
            size="large"
            placeholder="0861903348"
            onChange={handlePhoneChange}
          />
        </div>

        <Button
          className="mt-5"
          type="primary"
          size="large"
          onClick={handleSearch}
        >
          Tìm kiếm
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={taskList}
        rowKey="id"
        className="overflow-x-auto"
      />
    </div>
  );
};

export default TaskList;
