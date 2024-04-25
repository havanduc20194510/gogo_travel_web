"use client";

import React, { ReactNode } from "react";
import { UserOutlined, CarOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const { Header, Content, Footer, Sider } = Layout;

const navList: MenuProps["items"] = [
  {
    key: 1,
    label: "Home",
  },
];

export const LayoutAdmin: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  const menuList = [
    {
      key: "/admin/tour",
      icon: React.createElement(CarOutlined),
      label: "Tour",
    },
    {
      key: "/admin/user",
      icon: React.createElement(UserOutlined),
      label: "User",
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navList}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/admin">Admin</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              defaultSelectedKeys={[pathname]}
              mode="inline"
              style={{ height: "100%" }}
            >
              {menuList.map((menu) => {
                return (
                  <Menu.Item key={menu?.key}>
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
  );
};
