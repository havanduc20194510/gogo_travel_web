import React, { useCallback, useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";
import { Store } from "antd/es/form/interface";
import Link from "next/link";
import { Tour } from "@/models/tour/get";
import { useRouter } from "next/navigation";
import { register } from "@/service/user";
import { RegisterRequest } from "@/models/user/register";

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

type Props = {
  tour?: Tour;
  isEdit?: boolean;
};

const UserForm: React.FC<Props> = ({ isEdit, tour }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues: Store = {
    ...tour,
  };

  const onFinish = useCallback(
    async (values: RegisterRequest) => {
      setLoading(true);

      try {
        if (isEdit) {
          // TODO: edit
        } else {
          await register(values);

          router.push("/admin/user");
        }
      } catch {
        //Do nothing
      } finally {
        setLoading(false);
      }
    },
    [isEdit, router]
  );

  const roleOptions = [
    {
      label: "ADMIN",
      value: "ADMIN",
    },
    {
      label: "USER",
      value: "USER",
    },
    {
      label: "GAME_MANAGE",
      value: "GAME_MANAGE",
    },
  ];

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
        <Link href="/admin/user"> Back to user list page</Link>
      </Button>
      <Form {...formItemLayout} size="large" form={form} onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="username"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Role"
          name="roles"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            mode="multiple"
            size="large"
            placeholder="Please select"
            options={roleOptions}
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
export default UserForm;
