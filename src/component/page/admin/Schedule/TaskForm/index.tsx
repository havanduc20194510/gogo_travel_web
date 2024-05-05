import React, { FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { DatePicker } from "@/component/ui/Datepicker";

export type FieldTaskType = {
  name: string;
  description: string;
  coin: number;
  reward: string;
  deadline: string;
  taskTypeName: string;
};

type Props = {
  onFinish: FormProps<FieldTaskType>["onFinish"];
};

const TaskForm: FC<Props> = ({ onFinish }) => {
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
      <Form.Item<FieldTaskType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldTaskType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldTaskType>
        label="Coin"
        name="coin"
        rules={[{ required: true, message: "Please input your coin!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item<FieldTaskType>
        label="Reward"
        name="reward"
        rules={[{ required: true, message: "Please input your reward!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldTaskType>
        label="Deadline"
        name="deadline"
        rules={[{ required: true, message: "Please input your deadline!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item<FieldTaskType>
        label="Task type name"
        name="taskTypeName"
        rules={[
          { required: true, message: "Please input your task type name!" },
        ]}
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

export default TaskForm;
