import { TaskStatus } from "@/component/ui/TaskStatus";
import { Task } from "@/models/task/get";
import { User } from "@/models/user/get";
import { getTaskByEmail } from "@/service/task";
import { getUserById } from "@/service/user";
import { useCallback, useEffect, useState } from "react";

export const TaskList = ({ userInfo }: { userInfo?: User }) => {
  const [taskList, setTaskList] = useState<Task[]>();
  console.log(userInfo, "userInfo");

  const getTaskList = useCallback(async () => {
    const res = await getTaskByEmail(userInfo?.email ?? "");
    setTaskList(res.data);
  }, [userInfo?.email]);

  useEffect(() => {
    getTaskList();
  }, [getTaskList]);

  if (!taskList?.length) {
    return <div className="text-xl font-bold mt-10">Chưa có task</div>;
  }

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone </th>
            <th className="py-2 px-4 border">Task Name </th>
            <th className="py-2 px-4 border">Tour Name </th>
            <th className="py-2 px-4 border">Task Deadline </th>
            <th className="py-2 px-4 border">Task Status </th>
          </tr>
        </thead>
        <tbody>
          {taskList?.map((task) => (
            <tr key={task.id}>
              <td className="py-2 px-4 border">{task.email}</td>
              <td className="py-2 px-4 border">{task.phone}</td>
              <td className="py-2 px-4 border">{task.taskName}</td>
              <td className="py-2 px-4 border">{task.tourName}</td>
              <td className="py-2 px-4 border">{task.taskDeadline}</td>
              <td className="py-2 px-4 border">
                <TaskStatus status={task.taskStatus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
