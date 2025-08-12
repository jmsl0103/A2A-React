import React from 'react';
import { Typography, Card, Row, Col, Button, Tag, Avatar, Rate } from 'antd';
import { UserOutlined, RobotOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AgentsPage: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: 'Research Assistant Pro',
      description: 'Advanced research agent that can gather, analyze, and summarize information from multiple sources',
      author: 'AI Research Lab',
      category: 'Research',
      rating: 4.8,
      downloads: '12.5k',
      tags: ['Research', 'Analysis', 'Summarization'],
      status: 'Featured'
    },
    {
      id: 2,
      name: 'Code Generator',
      description: 'Generate clean, efficient code in multiple programming languages with best practices',
      author: 'DevTools Inc',
      category: 'Development',
      rating: 4.6,
      downloads: '8.9k',
      tags: ['Coding', 'Generation', 'Multi-language'],
      status: 'Popular'
    },
    {
      id: 3,
      name: 'Content Optimizer',
      description: 'Optimize content for SEO, readability, and engagement across different platforms',
      author: 'Marketing Pro',
      category: 'Marketing',
      rating: 4.9,
      downloads: '15.2k',
      tags: ['SEO', 'Content', 'Optimization'],
      status: 'Featured'
    },
    {
      id: 4,
      name: 'Data Analyst',
      description: 'Perform statistical analysis and create visualizations from complex datasets',
      author: 'Data Science Team',
      category: 'Analytics',
      rating: 4.7,
      downloads: '6.3k',
      tags: ['Analytics', 'Visualization', 'Statistics'],
      status: 'New'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'gold';
      case 'Popular': return 'green';
      case 'New': return 'blue';
      default: return 'default';
    }
  };

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        <div className="mb-4">
          <Title level={2} style={{ marginBottom: '8px' }}>Agents</Title>
          <Text type="secondary">Discover and deploy AI agents created by the community</Text>
        </div>

        <Row gutter={[24, 24]}>
          {agents.map((agent) => (
            <Col key={agent.id} xs={24} lg={12}>
              <Card
                hoverable
                style={{ 
                  borderRadius: '12px', 
                  height: '100%',
                  border: '1px solid #e2e8f0'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3">
                    <Avatar 
                      size={48} 
                      icon={<RobotOutlined />} 
                      style={{ background: '#8b5cf6' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Title level={4} style={{ margin: 0 }}>
                        {agent.name}
                      </Title>
                      <Tag color={getStatusColor(agent.status)}>
                        {agent.status}
                      </Tag>
                    </div>
                    <Tag color="blue" style={{ marginBottom: '8px' }}>
                      {agent.category}
                    </Tag>
                  </div>
                </div>
                
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                  {agent.description}
                </Text>
                
                <div className="mb-3">
                  {agent.tags.map(tag => (
                    <Tag key={tag} style={{ marginBottom: '4px' }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <Rate disabled defaultValue={agent.rating} allowHalf style={{ fontSize: '14px' }} />
                    <Text style={{ marginLeft: '8px' }}>{agent.rating}</Text>
                  </div>
                  <Text type="secondary">
                    {agent.downloads} downloads
                  </Text>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Text style={{ marginLeft: '8px', fontSize: '12px' }}>
                      {agent.author}
                    </Text>
                  </div>
                  <Button 
                    type="primary" 
                    icon={<DownloadOutlined />}
                    style={{ 
                      background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  >
                    Deploy
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AgentsPage;