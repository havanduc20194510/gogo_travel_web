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
import moment from "moment";
import { DepartureTime } from "@/models/departureTime/get";
import {
  getDepartureTimesByTourId,
  deleteDepartureTime,
  updateDepartureTime,
  createDepartureTime,
} from "@/service/departureTime";
import { useParams } from "next/navigation";
import { PlusCircleOutlined, SnippetsOutlined } from "@ant-design/icons";

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
      message.error("Failed to fetch data");
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
        startDate: moment(record.startDate),
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
        message.success("Record deleted successfully");
        fetchData();
      } catch (error) {
        message.error("Failed to delete record");
      } finally {
        setLoading(false);
      }
    },
    [fetchData]
  );

  const handleOk = useCallback(async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      const data = {
        tourId: values.tourId,
        startDate: values.startDate.format("YYYY-MM-DD"),
        numberOfSeats: values.numberOfSeats,
      };
      if (currentRecord) {
        await updateDepartureTime(String(currentRecord.id), data);
        message.success("Record updated successfully");
      } else {
        await createDepartureTime(data);
        message.success("Record created successfully");
      }
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      message.error("Failed to save record");
    } finally {
      setLoading(false);
    }
  }, [currentRecord, fetchData, form]);

  const columns: ColumnsType<DepartureTime> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate" },
    {
      title: "Number of Seats",
      dataIndex: "numberOfSeats",
      key: "numberOfSeats",
    },
    { title: "Booked Seats", dataIndex: "bookedSeats", key: "bookedSeats" },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
      render: (text) => (text ? "Yes" : "No"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Delete
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
        title={currentRecord ? "Edit Departure Time" : "Add Departure Time"}
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
            rules={[{ required: true, message: "Please select a start date" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="numberOfSeats"
            label="Number of Seats"
            rules={[
              { required: true, message: "Please enter the number of seats" },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
