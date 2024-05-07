import React, { useCallback, useState } from "react";
import {
  Alert,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  UploadFile,
  UploadProps,
} from "antd";
import { addDepartureTime, addTour, uploadTourImage } from "@/service/tour";
import { Store } from "antd/es/form/interface";
import Link from "next/link";
import { Tour, TourResponse } from "@/models/tour/get";
import UploadImage from "./uploadImage";
import { AddTourRequest } from "@/models/tour/add";
import { useRouter } from "next/navigation";
import DatePicker, { DateObject } from "react-multi-date-picker";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const unitOptions = [
  {
    label: "VNĐ",
    value: "VNĐ",
  },
  {
    label: "UDS",
    value: "UDS",
  },
];

const tourTypeOptions = [
  {
    label: "Du lịch trong nước",
    value: "Du lịch trong nước",
  },
  {
    label: "Du lịch nước ngoài",
    value: "Du lịch nước ngoài",
  },
];

const statusOptions = [
  {
    label: "DELETED",
    value: "DELETED",
  },
  {
    label: "INACTIVE",
    value: "INACTIVE",
  },
  {
    label: "ACTIVE",
    value: "ACTIVE",
  },
];

type Props = {
  tour?: Tour;
  isEdit?: boolean;
};

const TourForm: React.FC<Props> = ({ isEdit, tour }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [startDates, setStartDates] = useState<
    DateObject | DateObject[] | null
  >(null);
  console.log(startDates, "startDates");

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const initialValues: Store = {
    ...tour,
  };

  const handleChangeFile: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const onFinish = useCallback(
    async (values: AddTourRequest) => {
      setLoading(true);

      try {
        if (isEdit) {
          // TODO: edit
        } else {
          const response = await addTour(values);
          await uploadTourImage(response.data.tourId, fileList);

          if (startDates instanceof Array) {
            const promises = startDates.map(async (startDate) => {
              await addDepartureTime({
                tourId: response.data.tourId,
                startDate: startDate.format(),
              });
            });

            await Promise.all(promises);
          }
          router.push("/admin");
        }
      } catch {
        //Do nothing
      } finally {
        setLoading(false);
      }
    },
    [fileList, isEdit, router, startDates]
  );

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <>
      <Button type="primary" className="my-10">
        <Link href="/admin"> Back to tour list page</Link>
      </Button>
      <Form
        {...formItemLayout}
        size="large"
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Adult price"
          name="adultPrice"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Child price"
          name="childPrice"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Baby price"
          name="babyPrice"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Unit"
          name="unit"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select options={unitOptions} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Number of days"
          name="numberOfDays"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="number of nights"
          name="numberOfNights"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Vehicle"
          name="vehicle"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Departure location"
          name="departureLocation"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hotel Star"
          name="hotelStar"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Number Of Seats"
          name="numberOfSeats"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Available seats"
          name="availableSeats"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select options={statusOptions} />
        </Form.Item>

        <Form.Item
          label="Note"
          name="note"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Tour type"
          name="tourTypeName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Images"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <UploadImage fileList={fileList} onChangeFile={handleChangeFile} />
        </Form.Item>
        <Form.Item
          label="Departure times"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker
            className="w-full"
            multiple
            format="YYYY-MM-DD"
            value={startDates}
            onChange={setStartDates}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default TourForm;
