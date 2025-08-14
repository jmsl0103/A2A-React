import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd';
import { SearchOutlined, UploadOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import HireBlock from '../components/Layout/HireBlock';

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
              
              <Row gutter={[24, 24]} justify="center" style={{ marginBottom: '3rem' }}>
                <Col xs={24} sm={12} md={8}>
                  <Button 
                    size="large" 
                    className="outline-button w-100"
                    icon={<SearchOutlined />}
                  >
                    Find Skills
                  </Button>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Button 
                    size="large" 
                    className="outline-button w-100"
                    icon={<UploadOutlined />}
                    onClick={() => navigate('/submit')}
                  >
                    Upload Agents
                  </Button>
                </Col>
              </Row>

              <div className="search-container">
                <Row gutter={[16, 16]} align="middle">
                  <Col xs={24} lg={18}>
                    <TextArea
                      placeholder="Describe what task you want to complete or a workflow you have"
                      rows={3}
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        resize: 'none',
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={6}>
                    <div className="d-flex gap-2 justify-content-end">
                      <Button
                        shape="circle"
                        size="large"
                        icon={<UploadOutlined />}
                        style={{
                          background: 'rgba(255, 255, 255, 0.2)',
                          border: 'none',
                          color: 'white',
                        }}
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        className="gradient-button"
                        onClick={handleNavigate}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <HireBlock />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
