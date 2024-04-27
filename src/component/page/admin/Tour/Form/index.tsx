import React, { useCallback, useState } from "react";
import { Alert, Button, Form, Input, InputNumber, Select, Spin } from "antd";
import { AddTourRequest, Request } from "@/models/tour/add";
import { addTour } from "@/service/tour";
import { Store } from "antd/es/form/interface";
import Link from "next/link";
import { Tour, TourResponse } from "@/models/tour/get";

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
    label: "WAITING",
    value: "WAITING",
  },
  {
    label: "ACTIVE",
    value: "ACTIVE",
  },
  {
    label: "PENDING",
    value: "PENDING",
  },
  {
    label: "SUCCESS",
    value: "SUCCESS",
  },
];

type Props = {
  tour?: Tour;
  isEdit?: boolean;
};

const TourForm: React.FC<Props> = ({ isEdit, tour }) => {
  const [form] = Form.useForm();

  const [tourType, setTourType] = useState<string>(tour?.tourType.name ?? "");
  const [image, setImage] = useState<string>(tour?.images[0].url ?? "");
  const [loading, setLoading] = useState(false);

  const defaultTourTypeOption = {
    label: tour?.tourType.name ?? "",
    value: tour?.tourType.name ?? "",
  };

  const initialValues: Store = {
    ...tour,
  };

  const onFinish = useCallback(
    async (values: Request) => {
      setLoading(true);
      const payload: AddTourRequest = {
        request: values,
        images: [image],
        tourType,
      };
      try {
        if (isEdit) {
          // TODO: edit
        } else {
          await addTour(payload);
        }
      } catch {
        //Do nothing
      } finally {
        setLoading(false);
      }
    },
    [image, isEdit, tourType]
  );

  if (loading) {
    return <Spin tip="Loading..." />;
  }
  return (
    <>
      <Button type="primary" className="mb-10">
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
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={tourTypeOptions}
            onSelect={(value) => setTourType(value.value)}
            defaultValue={defaultTourTypeOption}
          />
        </Form.Item>
        <Form.Item
          label="Images"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input
            defaultValue={tour?.images[0].url ?? ""}
            onChange={(event) => setImage(event.target.value)}
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
