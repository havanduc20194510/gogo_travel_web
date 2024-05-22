/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  UploadFile,
  UploadProps,
} from "antd";
import { addTour, getTour, updateTour, uploadTourImage } from "@/service/tour";
import Link from "next/link";
import { TourResponse } from "@/models/tour/get";
import UploadImage from "./uploadImage";
import { AddTourRequest } from "@/models/tour/add";
import { useParams, useRouter } from "next/navigation";
import { TourType } from "@/models/tourType/get";
import { getTourTypes } from "@/service/tourType";
import Schedule from "../../Schedule";
import { DepartureTimePage } from "../../DepartureTime";

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

const TourForm: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [tourResponse, setTourResponse] = useState<TourResponse>();
  const param = useParams();
  const id = typeof param.id === "string" ? param.id : "";
  const [tourTypeList, setTourTypeList] = useState<TourType[]>([]);

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      if (id) {
        const response = await getTour(id);
        setTourResponse(response);
      }
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, [id]);

  const tourTypeOptions = tourTypeList.map((tourType) => ({
    label: tourType.name,
    value: tourType.name,
  }));

  const initialValues = useMemo(() => {
    return {
      ...tourResponse?.data,
      tourTypeName:
        tourResponse?.data.tourType.name ?? tourTypeOptions[0]?.value,
    };
  }, [tourResponse?.data, tourTypeOptions]);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  const handleChangeFile: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const onFinish = useCallback(
    async (values: AddTourRequest) => {
      setLoading(true);

      try {
        let res;
        if (id) {
          res = await updateTour(id, values);
        } else {
          res = await addTour(values);
        }

        await uploadTourImage(res.data.tourId, fileList);
        router.push("/admin");
      } catch {
        //Do nothing
      } finally {
        setLoading(false);
      }
    },
    [fileList, id, router]
  );

  const loadTourType = useCallback(async () => {
    try {
      const res = await getTourTypes();
      setTourTypeList(res.data);
    } catch {
      //
    }
  }, []);

  useEffect(() => {
    loadTourType();
  }, [loadTourType]);

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
          <Select
            defaultValue={tourResponse?.data.tourType.name}
            options={tourTypeOptions}
          />
        </Form.Item>
        <Form.Item
          label="Images"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <div className="flex items-center gap-2 mb-3">
            {tourResponse?.data.images?.map((image) => (
              <img
                className="w-[100px] h-[100px]"
                key={image.id}
                src={image.url}
              />
            ))}
          </div>
          <UploadImage fileList={fileList} onChangeFile={handleChangeFile} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="px-[50px] m-auto">
        <DepartureTimePage />
        <Schedule />
      </div>
    </>
  );
};
export default TourForm;
