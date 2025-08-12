import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import SubmitAgentPage from './pages/SubmitAgentPage';
import WorkPage from './pages/WorkPage';
import ToolsPage from './pages/ToolsPage';
import AgentsPage from './pages/AgentsPage';
import WorkflowsPage from './pages/WorkflowsPage';
import AboutPage from './pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#8b5cf6',
    colorBgBase: '#ffffff',
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/submit" element={<SubmitAgentPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/workflows" element={<WorkflowsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;