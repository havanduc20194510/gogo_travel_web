import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Space, Spin, Table } from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getUser } from "@/service/user";
import { User } from "@/models/user/get";

type DataType = Pick<User, "address" | "email" | "username" | "phone"> & {
  key: string;
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="large">
        <Link href={`/admin/tour/edit/${record.key}`}>
          <EditOutlined />
        </Link>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const Users: FC = () => {
  const [userListResponse, setUserListResponse] = useState<User[]>();
  const [loading, setLoading] = useState(false);

  const loadUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUser();
      setUserListResponse(response.data);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  const userData: DataType[] = useMemo(() => {
    return (userListResponse ?? []).map((user) => ({
      key: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      address: user.address,
    }));
  }, [userListResponse]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Table columns={columns} dataSource={userData} />
    </div>
  );
};
export default Users;
