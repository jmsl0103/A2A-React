import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import SubmitAgentPage from './pages/SubmitAgentPage';
import WorkPage from './pages/WorkPage';
import ToolsPage from './pages/ToolsPage';
import AgentsPage from './pages/AgentsPage';
import WorkflowsPage from './pages/WorkflowsPage';
import AboutPage from './pages/AboutPage';
import AgentDetails from './pages/AgentDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './App.css';
import ChatBot from './pages/Chatbot';

const theme = {
  token: {
    colorPrimary: '#212529',
    colorBgBase: '#ffffff',
  },
};
function AppRoutes() {
  const location = useLocation();
  return (
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/submit" element={<SubmitAgentPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/workflows" element={<WorkflowsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/agent/:id" element={<AgentDetails />} />
            <Route path="/chat/:id" element={<ChatBot />} />
            <Route path="/chat/agent/:agentId" element={<ChatBot key={location.key}/>} />
          </Routes>
        </MainLayout>
  )
}
function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}

export default App;