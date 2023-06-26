import { Button, Layout, Space } from "antd";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ListComponent from "./components/ListTypeMS-component/ListComponent";

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
      <Layout style={{ background: "#FFFFFF"}}>
        <Header
          style={{ margin: 10, background: "#f5f5f5" }}
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
          style={{ maxHeight: "100%", overflowY: "auto" , margin:10}}
        >
          <ListComponent style={{}}/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
