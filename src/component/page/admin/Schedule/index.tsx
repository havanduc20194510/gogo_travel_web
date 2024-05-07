/* eslint-disable @next/next/no-img-element */
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  FormProps,
  Modal,
  Spin,
  Tooltip,
  Tree,
  TreeDataNode,
} from "antd";
import { Schedule as ScheduleType } from "@/models/schedule/get";
import {
  createSchedule,
  createScheduleDetail,
  getSchedule,
} from "@/service/schedule";
import { useParams } from "next/navigation";
import { PlusCircleOutlined, SnippetsOutlined } from "@ant-design/icons";
import ScheduleForm, { FieldType } from "./ScheduleForm";
import { Toast, showToast } from "@/component/ui/toast";
import DetailForm, { FieldDetailType } from "./DetailForm";
import TaskForm, { FieldTaskType } from "./TaskForm";
import { createTask } from "@/service/task";

const Schedule: FC = () => {
  const [loading, setLoading] = useState(false);
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const param = useParams();
  const [isEditSchedule, setIsEditSchedule] = useState(false);
  const [isEditDetail, setIsEditDetail] = useState(false);
  const [scheduleIdSelected, setScheduleIdSelected] = useState<number>();
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const schedule = schedules.find((item) => item.id === scheduleIdSelected);

  const showScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleScheduleOk = () => {
    setIsScheduleModalOpen(false);
  };

  const handleScheduleCancel = () => {
    setIsScheduleModalOpen(false);
  };

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const showDetailModal = () => {
    setIsDetailModalOpen(true);
  };

  const handleDetailOk = () => {
    setIsDetailModalOpen(false);
  };

  const handleDetailCancel = () => {
    setIsDetailModalOpen(false);
  };

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const showTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const handleTaskOk = () => {
    setIsTaskModalOpen(false);
  };

  const handleTaskCancel = () => {
    setIsTaskModalOpen(false);
  };

  const id = typeof param.id === "string" ? param.id : "";

  const loadSchedule = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getSchedule(id);
      setSchedules(response.data);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadSchedule();
  }, [loadSchedule]);

  const treeData: TreeDataNode[] = useMemo(() => {
    return schedules.map((schedule, index) => {
      return {
        key: schedule.id,
        title: (
          <div>
            <div className="flex items-center gap-5 w-[700px]">
              <span className="text-xl font-bold text-[#075985]">
                {index + 1}. {schedule.title}
              </span>
              <div
                onClick={() => {
                  setScheduleIdSelected(schedule.id);
                  showDetailModal();
                  setIsEditDetail(false);
                }}
              >
                <Tooltip title="Thêm schedule detail">
                  <PlusCircleOutlined className="hover:text-[#16a34a]" />
                </Tooltip>
              </div>
              <div
                onClick={() => {
                  setScheduleIdSelected(schedule.id);
                  showTaskModal();
                }}
              >
                <Tooltip title="Thêm task">
                  <SnippetsOutlined className="hover:text-[#16a34a]" />
                </Tooltip>
              </div>
            </div>
            {!!schedule.task && (
              <div className="my-2 gap-3">
                <div className="flex items-center gap-3 my-3">
                  <img
                    src="/icons/task.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <div className="font-bold text-gray-500">Task:</div>
                </div>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Task Name</th>
                      <th className="px-4 py-2">description</th>
                      <th className="px-4 py-2">coin</th>
                      <th className="px-4 py-2">reward</th>
                      <th className="px-4 py-2">deadline</th>
                      <th className="px-4 py-2">taskTypeName</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{schedule.task.name}</td>
                      <td className="border px-4 py-2">
                        {schedule.task.description}
                      </td>
                      <td className="border px-4 py-2">{schedule.task.coin}</td>
                      <td className="border px-4 py-2">
                        {schedule.task.reward}
                      </td>
                      <td className="border px-4 py-2">
                        {schedule.task.deadline}
                      </td>
                      <td className="border px-4 py-2">
                        {schedule.task.taskType.name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {!!schedule.scheduleDetail.length && (
              <div className="my-2 gap-3">
                <div className="flex items-center gap-3 my-3">
                  <img
                    src="/icons/detail.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <div className=" font-bold text-gray-500">
                    Schedule detail:
                  </div>
                </div>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Place</th>
                      <th className="px-4 py-2">TimeLine</th>
                      <th className="px-4 py-2">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.scheduleDetail.map((detail) => (
                      <tr key={detail.id}>
                        <td className="border px-4 py-2">{detail.place}</td>
                        <td className="border px-4 py-2">{detail.timeLine}</td>
                        <td className="border px-4 py-2">{detail.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ),
      };
    });
  }, [schedules]);

  const handleFinish: FormProps<FieldType>["onFinish"] = useCallback(
    async (values: FieldType) => {
      try {
        await createSchedule({
          tourId: id,
          ...values,
        });
        showToast({
          message: "Tạo schedule thành công",
          type: "success",
        });

        await loadSchedule();
      } catch {
        showToast({
          message: "Tạo schedule thất bại",
          type: "error",
        });
      } finally {
        handleScheduleCancel();
      }
    },
    [id, loadSchedule]
  );

  const handleFinishDetail: FormProps<FieldDetailType>["onFinish"] =
    useCallback(
      async (values: FieldDetailType) => {
        try {
          await createScheduleDetail({
            tourScheduleId: scheduleIdSelected ?? 0,
            ...values,
          });
          showToast({
            message: "Tạo schedule detail thành công",
            type: "success",
          });
          await loadSchedule();
        } catch {
          showToast({
            message: "Tạo schedule detail thất bại",
            type: "error",
          });
        } finally {
          handleDetailCancel();
        }
      },
      [loadSchedule, scheduleIdSelected]
    );

  const handleFinishTask: FormProps<FieldTaskType>["onFinish"] = useCallback(
    async (values: FieldTaskType) => {
      try {
        await createTask({
          tourScheduleId: scheduleIdSelected ?? 0,
          ...values,
        });
        showToast({
          message: "Tạo schedule task thành công",
          type: "success",
        });
        await loadSchedule();
      } catch {
        showToast({
          message: "Tạo schedule task thất bại",
          type: "error",
        });
      } finally {
        handleTaskCancel();
      }
    },
    [loadSchedule, scheduleIdSelected]
  );

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 max-w-[700px] m-auto">
      <Toast />
      <div className="flex items-center justify-end">
        <Button className="flex items-center">
          <span
            onClick={() => {
              setIsEditSchedule(false);
              showScheduleModal();
            }}
          >
            Thêm lịch trình
          </span>
          <PlusCircleOutlined onClick={showScheduleModal} />
        </Button>
      </div>

      <Tree
        treeData={treeData}
        defaultExpandAll={true}
        showLine
        className="w-full"
      />
      <Modal
        title="Schedule"
        open={isScheduleModalOpen}
        onOk={handleScheduleOk}
        onCancel={handleScheduleCancel}
        footer={null}
      >
        <ScheduleForm
          onFinish={handleFinish}
          isEdit={isEditSchedule}
          schedule={schedule}
        />
      </Modal>

      <Modal
        title="Schedule detail"
        open={isDetailModalOpen}
        onOk={handleDetailOk}
        onCancel={handleDetailCancel}
        footer={null}
      >
        <DetailForm isEdit={isEditDetail} onFinish={handleFinishDetail} />
      </Modal>

      <Modal
        title="Thêm task"
        open={isTaskModalOpen}
        onOk={handleTaskOk}
        onCancel={handleTaskCancel}
        footer={null}
      >
        <TaskForm onFinish={handleFinishTask} />
      </Modal>
    </div>
  );
};
export default Schedule;
