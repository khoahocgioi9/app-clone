/** @format */

import { Button, Layout, Space } from 'antd';
import './App.css';
import { Sidebar, PlayerControllerComponent } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SearchScreen from './pages/Search';

const { Content, Header } = Layout;

function App()
{
  return (
    <BrowserRouter>
      <>
        <Layout
          style={{
            backgroundColor: 'white',
          }}>
          <Sidebar />
          <Layout style={{ minHeight: '100vh' }}>
            <Header
              style={{ margin: 10, background: '#ffffff' }}
              className='rounded justify-end flex space-x-4 '>
              <Space>
                <Button
                  type='primary'
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: 100,
                    margin: 5,
                  }}
                  shape='round'
                  size={'middle'}
                  className='transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 text-white'>
                  Signup
                </Button>
                <Button
                  type='primary'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: 100,
                    margin: 5,
                  }}
                  shape='round'
                  size={'large'}
                  className='transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 bg-white text-neutral-600'>
                  Login
                </Button>
              </Space>
            </Header>
            <Content
              className='m-5'
              style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<SearchScreen />} />
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
