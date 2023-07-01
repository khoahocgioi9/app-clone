/** @format */

import { Button, Layout, Space } from "antd";
import "./App.css";
import { Sidebar, PlayerControllerComponent } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SearchScreen from "./pages/Search";
import { useEffect, useState } from "react";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import { TopChart } from "./pages/TopChart";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { TopArtists } from "./pages/TopArtists";
import SearchBar from "./components/SearchBar";
import Truyen from "./pages/Tags/Truyen";
import TinhCam from "./pages/Tags/TinhCam";
import Podcast from "./pages/Tags/Podcast";
import TuTruyen from "./pages/Tags/TuTruyen";
import ChuaLanh from "./pages/Tags/ChuaLanh";
import Audio from "./pages/Tags/Audio";

const { Content, Header } = Layout;

function App({ onSearch, onHome }) {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(true);
    localStorage.setItem("searchVisible", "true");
  };

  const handleHomeClick = () => {
    setSearchVisible(false);
    localStorage.removeItem("searchVisible");
  };
  useEffect(() => {
    const storedSearchVisible = localStorage.getItem("searchVisible");
    if (storedSearchVisible) {
      setSearchVisible(true);
    }
  }, []);
  const goBack = () => {
    window.history.back();
  }
  
  return (
    <BrowserRouter>
      <>
        <Layout
          style={{
            backgroundColor: "white",
          }}
        >
          <Sidebar onHome={handleHomeClick} onSearchClick={handleSearchClick} />
          <Layout style={{ minHeight: "100vh" }}>
            <Header
              style={{ margin: 10, background: "#ffffff" }}
              className="rounded justify-between flex space-x-4 "
            >
              <Space className="left">
              <button onClick={goBack}><ArrowBackIosNewIcon/></button>
                <SearchBar
                  onSearch={onSearch}
                  searchVisible={searchVisible}
                />
              </Space>

              <Space className="right">
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
              style={{ maxHeight: "calc(80vh - 64px)", overflowY: "auto" }}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/top-chart" element={<TopChart />} />
                <Route path="/top-artists" element={<TopArtists />} />  
                <Route path="/truyen" element={<Truyen/>}/>              
                <Route path="/tinh-cam" element={<TinhCam/>}/>              
                <Route path="/podcast" element={<Podcast/>}/>              
                <Route path="/tu-truyen" element={<TuTruyen/>}/>              
                <Route path="/chua-lanh" element={<ChuaLanh/>}/>              
                <Route path="/audio" element={<Audio/>}/>              
                <Route path="*" element={<ErrorPage />} />
                
              </Routes>
            </Content>
          </Layout>
        </Layout>
                  
        <PlayerControllerComponent />
      </>
    </BrowserRouter>
  );
}

export default App;
