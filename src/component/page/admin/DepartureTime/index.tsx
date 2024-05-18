import { useCallback, useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Space,
  message,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import { DepartureTime } from "@/models/departureTime/get";
import {
  getDepartureTimesByTourId,
  deleteDepartureTime,
  updateDepartureTime,
  createDepartureTime,
} from "@/service/departureTime";
import { useParams } from "next/navigation";
import { PlusCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export const DepartureTimePage = () => {
  const [data, setData] = useState<DepartureTime[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<DepartureTime | null>(
    null
  );
  const param = useParams();
  const tourId = typeof param.id === "string" ? param.id : "";
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getDepartureTimesByTourId(tourId);
      setData(response.data);
    } catch (error) {
      message.error("Không thể lấy dữ liệu");
    } finally {
      setLoading(false);
    }
  }, [tourId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCreate = useCallback(() => {
    setCurrentRecord(null);
    form.resetFields();
    setIsModalVisible(true);
  }, [form]);

  const handleEdit = useCallback(
    (record: DepartureTime) => {
      setCurrentRecord(record);
      form.setFieldsValue({
        ...record,
        startDate: dayjs(record.startDate), // Ensure this is a dayjs object
      });
      setIsModalVisible(true);
    },
    [form]
  );

  const handleDelete = useCallback(
    async (departureTimeId: string) => {
      setLoading(true);
      try {
        await deleteDepartureTime(departureTimeId);
        message.success("Xóa bản ghi thành công");
        fetchData();
      } catch (error) {
        message.error("Không thể xóa bản ghi");
      } finally {
        setLoading(false);
      }
    },
    [fetchData]
  );

  const handleOk = useCallback(async () => {
    try {
      const values = form.getFieldsValue();
      setLoading(true);
      const data = {
        tourId: values.tourId,
        startDate: values.startDate.format("YYYY-MM-DD"), // Format the startDate
        numberOfSeats: values.numberOfSeats,
      };
      if (currentRecord) {
        await updateDepartureTime(String(currentRecord.id), data);
        message.success("Cập nhật bản ghi thành công");
      } else {
        await createDepartureTime(data);
        message.success("Tạo bản ghi thành công");
      }
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      message.error("Không thể lưu bản ghi");
    } finally {
      setLoading(false);
    }
  }, [currentRecord, fetchData, form]);

  const columns: ColumnsType<DepartureTime> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Ngày bắt đầu", dataIndex: "startDate", key: "startDate" },
    {
      title: "Số ghế",
      dataIndex: "numberOfSeats",
      key: "numberOfSeats",
    },
    { title: "Ghế đã đặt", dataIndex: "bookedSeats", key: "bookedSeats" },
    {
      title: "Còn trống",
      dataIndex: "available",
      key: "available",
      render: (text) => (text ? "Có" : "Không"),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Chỉnh sửa</Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-end">
        <Button className="flex items-center mb-3" onClick={handleCreate}>
          <span>Thêm ngày bắt đầu</span>
          <PlusCircleOutlined />
        </Button>
      </div>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table<DepartureTime>
        dataSource={data}
        rowKey="id"
        loading={loading}
        columns={columns}
        pagination={false}
      />

      <Modal
        title={
          currentRecord ? "Chỉnh sửa Ngày khởi hành" : "Thêm Ngày khởi hành"
        }
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="tourId" label="Tour ID" initialValue={tourId} hidden>
            <Input />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Ngày bắt đầu"
            rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}
            initialValue={currentRecord ? dayjs(currentRecord.startDate) : null} // Ensure initialValue is a dayjs object
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="numberOfSeats"
            label="Số ghế"
            rules={[{ required: true, message: "Vui lòng nhập số ghế" }]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
