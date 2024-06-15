"use client";

import React, { ReactNode, Suspense } from "react";
import {
  UserOutlined,
  CarOutlined,
  BarChartOutlined,
  AccountBookOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthRequire } from "@/component/AuthRequire/AuthRequire";
import { getFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/models/user/get";

type Props = {
  children: ReactNode;
};

const { Header, Content, Sider } = Layout;

export const LayoutAdmin: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  const tourKey =
    pathname === "/admin/tour" ||
    pathname === "/admin/tour/add" ||
    pathname.includes("/admin/tour/edit")
      ? pathname
      : "/admin/tour";

  const user: User | undefined = getFromLocalStorage("user");
  const isGameManage = user?.roles?.includes("GAME_MANAGER");

  const gameMenuList = [
    {
      key: "/admin/task",
      icon: React.createElement(AccountBookOutlined),
      label: "Quản lý Task",
    },
  ];

  const menuList = [
    {
      key: "/admin",
      icon: React.createElement(BarChartOutlined),
      label: "Biểu đồ thống kê",
    },
    {
      key: tourKey,
      icon: React.createElement(CarOutlined),
      label: "Quản lý tour",
    },
    {
      key: "/admin/user",
      icon: React.createElement(UserOutlined),
      label: "Quản lý người dùng",
    },
    {
      key: "/admin/booking",
      icon: React.createElement(AccountBookOutlined),
      label: "Quản lý Booking",
    },
    {
      key: "/admin/task",
      icon: React.createElement(FileDoneOutlined),
      label: "Quản lý Task",
    },
  ];

  return (
    <Suspense>
      <AuthRequire role="ADMIN" require>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ flex: 1, minWidth: 0 }}
            >
              <Menu.Item>
                <Link href="/">Home</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Layout
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Sider
                style={{ background: colorBgContainer }}
                width={200}
                className="min-h-screen"
              >
                <Menu
                  defaultSelectedKeys={[pathname]}
                  mode="inline"
                  style={{ minHeight: "100%" }}
                  theme="dark"
                >
                  {(isGameManage ? gameMenuList : menuList).map((menu) => {
                    return (
                      <Menu.Item key={menu?.key}>
                        <span className="mr-2">{menu.icon}</span>
                        <Link href={menu.key}>{menu.label}</Link>
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                {children}
              </Content>
            </Layout>
          </Content>
        </Layout>
      </AuthRequire>
    </Suspense>
  );
};
