import { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  LaptopOutlined,
  ContainerOutlined,
  ProjectOutlined,
} from '@ant-design/icons';

import HomePage from './components/HomePage'; 
import DeliveryDashboard from './components/DeliveryDashboard'

import './App.css'

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

function App() {
  const [selectedItem, setSelectedItem] = useState('homepage');

  const handleMenuClick = (item) => {
    setSelectedItem(item.key);
  };



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={'300'} style={{ background: '#748DA6' }}>
        <Menu
          mode="inline"
          selectedKeys={[selectedItem]}
          onClick={handleMenuClick}
          style={{ background: '#748DA6', color: '#eeeeee', height: '100%' }}
        >
          <img src="/takeiteasy.png" alt="logo" style={{ width: '100%', padding: '30px' }} />
          <Menu.Item key="homepage" icon={<HomeOutlined />}>
            Home Page
          </Menu.Item>
          <Menu.Item key="deliveries" icon={<ContainerOutlined />}>
            Deliveries
          </Menu.Item>
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Submenu 1">
            <Menu.Item key="option1">Option 1</Menu.Item>
            <Menu.Item key="option2">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="stats" icon={<ProjectOutlined />}>
            Stats (?)
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ 
        background: '#9CB4CC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Content style={{
          minWidth: '80%',
        }}>
          {selectedItem === 'homepage' && <HomePage />}
          {selectedItem === 'deliveries' && <DeliveryDashboard />}
          {selectedItem === 'stats' && <h1>Stats :)</h1>}
          {selectedItem === 'option1' && <h1>Option 1 Content</h1>}
          {selectedItem === 'option2' && <h1>Option 2 Content</h1>}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
