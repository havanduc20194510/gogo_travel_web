import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FormProps, Modal, Spin, Tree, TreeDataNode, TreeProps } from "antd";
import { Schedule } from "@/models/schedule/get";
import {
  createSchedule,
  createScheduleDetail,
  getSchedule,
} from "@/service/schedule";
import { useParams } from "next/navigation";
import {
  DownOutlined,
  PlusCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import ScheduleForm, { FieldType } from "./ScheduleForm";
import { Toast, showToast } from "@/component/ui/toast";
import DetailForm, { FieldDetailType } from "./DetailForm";

const Schedule: FC = () => {
  const [loading, setLoading] = useState(false);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
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
    return schedules.map((schedule) => {
      return {
        key: schedule.id,
        title: (
          <>
            <div className="flex items-center gap-5 text-xl">
              {schedule.title}
              {/* <EditOutlined
                className="hover:text-[#16a34a]"
                onClick={() => {
                  setIsEditSchedule(true);
                  setScheduleIdSelected(schedule.id);
                  showScheduleModal();
                }}
              /> */}
            </div>
          </>
        ),
        children: [
          ...schedule.scheduleDetail.map((detail) => {
            return {
              key: detail.id,
              title: (
                <div className="flex items-center gap-3">
                  <span>{detail.activity}</span>
                  {/* <EditOutlined
                    className="hover:text-[#16a34a]"
                    onClick={() => {
                      setIsEditDetail(true);
                      showDetailModal();
                    }}
                  /> */}
                </div>
              ),
            };
          }, []),
          {
            key: "abc",
            title: (
              <div
                className="text-[#0ea5e9]"
                onClick={() => {
                  setScheduleIdSelected(schedule.id);
                  showDetailModal();
                  setIsEditDetail(false);
                }}
              >
                <PlusCircleOutlined className="hover:text-[#16a34a]" />
              </div>
            ),
          },
        ],
      };
    }, []);
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
      <div className="flex items-center justify-end gap-3 text-xl cursor-pointer">
        <span
          onClick={() => {
            setIsEditSchedule(false);
            showScheduleModal();
          }}
          className="hover:text-[#16a34a]"
        >
          Thêm lịch trình
        </span>
        <PlusCircleOutlined
          onClick={showScheduleModal}
          className="hover:text-[#16a34a]"
        />
      </div>

      <Tree treeData={treeData} selectable={false} defaultExpandAll={true} />
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
    </div>
  );
};
export default Schedule;
