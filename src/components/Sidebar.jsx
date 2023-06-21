import {
  PieChartOutlined,
  UserOutlined
} from "@ant-design/icons";
import { DesktopWindowsOutlined } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { Avatar, Layout, Menu, theme } from "antd";
import React, { useState } from "react";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("option 1", "1", <PieChartOutlined />),
  getItem("option 2", "2", <DesktopWindowsOutlined />),
  getItem("option 3", "3", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <PeopleIcon />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, red },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
      className="bg-white"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <div className="flex items-center justify-center p-4 ">
          <Avatar size={200} src="data:image/png;base64,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" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          
          items={items}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: red,
          }}
        /> */}
        {/* <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>

          </Breadcrumb>
          <div             style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}>
              Bill is a cat
            </div>
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;
