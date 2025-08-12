import React from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopNavbar />
      <Layout>
        {!isHomePage && <Sidebar />}
        <Layout>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;