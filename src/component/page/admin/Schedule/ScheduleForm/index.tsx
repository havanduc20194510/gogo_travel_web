import React, { FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Schedule } from "@/models/schedule/get";

export type FieldType = {
  title: string;
  timeInDays: string;
};

type Props = {
  isEdit: boolean;
  schedule?: Schedule;
  onFinish: FormProps<FieldType>["onFinish"];
};

const ScheduleForm: FC<Props> = ({ isEdit, schedule, onFinish }) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        title: isEdit ? schedule?.title : "",
        timeInDays: isEdit ? schedule?.timeInDays ?? "" : "",
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Time in days"
        name="timeInDays"
        rules={[{ required: true, message: "Please input your time in days!" }]}
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

export default ScheduleForm;
