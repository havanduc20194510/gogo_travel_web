import React, { FC } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

export type FieldDetailType = {
  timeLine: string;
  place: string;
  activity: string;
};

type Props = {
  isEdit: boolean;
  onFinish: FormProps<FieldDetailType>["onFinish"];
};

const DetailForm: FC<Props> = ({ isEdit, onFinish }) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldDetailType>
        label="TimeLine"
        name="timeLine"
        rules={[{ required: true, message: "Please input your time line!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldDetailType>
        label="Place"
        name="place"
        rules={[{ required: true, message: "Please input your place!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldDetailType>
        label="Activity"
        name="activity"
        rules={[{ required: true, message: "Please input your activity!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DetailForm;
