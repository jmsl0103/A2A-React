import React from 'react';
import { Typography, Card, Row, Col, Button, Tag } from 'antd';
import { ToolOutlined, LinkOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ToolsPage: React.FC = () => {
  const tools = [
    {
      id: 1,
      name: 'API Gateway',
      description: 'Manage and monitor API endpoints for your agents',
      category: 'Infrastructure',
      rating: 4.8,
      users: '2.3k',
      tags: ['API', 'Gateway', 'Monitoring']
    },
    {
      id: 2,
      name: 'Data Connector',
      description: 'Connect to various data sources and databases seamlessly',
      category: 'Data',
      rating: 4.6,
      users: '1.8k',
      tags: ['Database', 'Integration', 'ETL']
    },
    {
      id: 3,
      name: 'Model Deployer',
      description: 'Deploy and scale machine learning models with ease',
      category: 'ML/AI',
      rating: 4.9,
      users: '3.1k',
      tags: ['ML', 'Deployment', 'Scaling']
    },
    {
      id: 4,
      name: 'Workflow Builder',
      description: 'Visual workflow builder for complex agent interactions',
      category: 'Workflow',
      rating: 4.7,
      users: '1.5k',
      tags: ['Workflow', 'Visual', 'Automation']
    }
  ];

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        <div className="mb-4">
          <Title level={2} style={{ marginBottom: '8px' }}>Tools</Title>
          <Text type="secondary">Essential tools and utilities for building and managing AI agents</Text>
        </div>

        <Row gutter={[24, 24]}>
          {tools.map((tool) => (
            <Col key={tool.id} xs={24} lg={12}>
              <Card
                hoverable
                style={{ 
                  borderRadius: '12px', 
                  height: '100%',
                  border: '1px solid #e2e8f0'
                }}
                bodyStyle={{ padding: '24px' }}
                actions={[
                  <Button type="link" icon={<LinkOutlined />}>
                    View Details
                  </Button>,
                  <Button type="primary" style={{ background: 'linear-gradient(45deg, #8b5cf6, #6366f1)', border: 'none' }}>
                    Install
                  </Button>
                ]}
              >
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3">
                    <ToolOutlined style={{ fontSize: '24px', color: '#8b5cf6' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Title level={4} style={{ margin: 0, marginBottom: '8px' }}>
                      {tool.name}
                    </Title>
                    <Tag color="blue" style={{ marginBottom: '8px' }}>
                      {tool.category}
                    </Tag>
                  </div>
                </div>
                
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                  {tool.description}
                </Text>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <StarOutlined style={{ color: '#fbbf24', marginRight: '4px' }} />
                    <Text strong>{tool.rating}</Text>
                    <Text type="secondary" style={{ marginLeft: '8px' }}>
                      ({tool.users} users)
                    </Text>
                  </div>
                </div>
                
                <div>
                  {tool.tags.map(tag => (
                    <Tag key={tag} style={{ marginBottom: '4px' }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ToolsPage;