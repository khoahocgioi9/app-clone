import { Button, Layout, Space } from "antd";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

const { Sider, Content, Header } = Layout;

function App() {
  const { size, setSize } = useState("large");
  return (
    <Layout
      style={{
        backgroundColor: "white",
      }}
    >
      <Sidebar />
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{ margin: 10, background: "#ffffff" }}
          className="rounded justify-end flex space-x-4 "
        >
          
          <Space>
            <Button
              type="primary"
              style={{
                backgroundColor: "black",
                color: "white",
                width: 100,
                margin: 5,
              }}
              shape="round"
              size={"middle"}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 text-white"
            >
              Signup
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "white",
                color: "black",
                width: 100,
                margin: 5,
              }}
              shape="round"
              size={"large"}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 bg-white text-neutral-600"
            >
              Login
            </Button>
          </Space>
        </Header>
        <Content
          className="m-5"
          style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <h1>Hello world!</h1>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
