import React from 'react';
import { Layout } from 'antd';
import TopNavbar from './TopNavbar';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopNavbar />
      <Layout>
          <Content>
            {children}
          </Content>
        </Layout>
    </Layout>
  );
};

export default MainLayout;