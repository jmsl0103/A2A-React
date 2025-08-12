import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  ToolOutlined,
  RobotOutlined,
  BranchesOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/work',
      icon: <FileTextOutlined />,
      label: 'Work',
    },
    {
      key: '/tools',
      icon: <ToolOutlined />,
      label: 'Tools',
    },
    {
      key: '/agents',
      icon: <RobotOutlined />,
      label: 'Agents',
    },
    {
      key: '/workflows',
      icon: <BranchesOutlined />,
      label: 'Workflows',
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: 'About',
    },
  ];

  return (
    <Sider width={250} theme="light">
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;