import React, { useState } from 'react';
import { Button, Input, Row, Col, Tabs } from 'antd';
import { SearchOutlined, UploadOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HireBlock from '../components/Layout/HireBlock';
import FindSkills from '../components/Layout/FindSkills';

const { TextArea } = Input;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [taskDescription, setTaskDescription] = useState("");
  const handleNavigate = () => {
    if(taskDescription) {
      const randomId = Math.random().toString(36).substring(2, 10);
      navigate(`/chat/${randomId}`, { state: { taskDescription } });
    }
  };

  return (
    <div className="gradient-bg">
      <div className="container">
        <div className="hero-section">
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div className="text-center">
                <h1 className="hero-title">
                  Tell us what you need.<br />
                  Our agents will take it from here.
                </h1>
              </div>

              <FindSkills />
              <HireBlock />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;