import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { TopArtists } from "./pages/TopArtists";
import { TopChart } from "./pages/TopChart";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

const { Sider, Content, Header } = Layout

// const Layout = () =>
// {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Outlet />
//       <Sidebar />
//       <Footer />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "*",
//         element: <ErrorPage />
//       },
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/top-artists",
//         element: <TopArtists />
//       },
//       {
//         path: "/top-chart",
//         element: <TopChart />
//       },
//     ]
//   }
// // ])

function App()
{
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content>
          <h1>Hello world!</h1>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
