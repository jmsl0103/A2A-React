import React, { useState } from 'react';
import { Typography, Card, Row, Col, Input, Select, Button, Tag, Avatar } from 'antd';
import { SearchOutlined, FilterOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const WorkPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const workItems = [
    {
      id: 1,
      title: 'Data Analysis Assistant',
      description: 'Analyze large datasets and generate insights with automated reporting capabilities.',
      category: 'Data Analysis',
      author: 'John Smith',
      tags: ['Python', 'Analytics', 'Automation'],
      status: 'Active',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      category: 'Creative Generation',
      author: 'Sarah Johnson',
      tags: ['Content', 'Writing', 'Marketing'],
      status: 'Active',
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      title: 'Code Review Bot',
      description: 'Automated code review with security analysis and best practices suggestions.',
      category: 'Coding',
      author: 'Mike Chen',
      tags: ['Development', 'Security', 'Review'],
      status: 'Beta',
      lastUpdated: '3 days ago'
    }
  ];

  const categories = ['all', 'Data Analysis', 'Creative Generation', 'Coding', 'Documentation', 'Research'];

  const filteredItems = workItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        <div className="mb-4">
          <Title level={2} style={{ marginBottom: '8px' }}>Work</Title>
          <Text type="secondary">Discover and manage AI agents in your workspace</Text>
        </div>

        <Card style={{ marginBottom: '24px', borderRadius: '12px' }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder="Search agents and workflows..."
                allowClear
                size="large"
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: '8px' }}
              />
            </Col>
            <Col xs={24} md={8}>
              <Select
                size="large"
                value={selectedCategory}
                onChange={setSelectedCategory}
                style={{ width: '100%', borderRadius: '8px' }}
                prefix={<FilterOutlined />}
              >
                {categories.map(category => (
                  <Option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} md={4}>
              <Button 
                type="primary" 
                size="large" 
                style={{ 
                  width: '100%', 
                  background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
                  border: 'none',
                  borderRadius: '8px'
                }}
              >
                New Agent
              </Button>
            </Col>
          </Row>
        </Card>

        <Row gutter={[24, 24]}>
          {filteredItems.map((item) => (
            <Col key={item.id} xs={24} lg={12} xl={8}>
              <Card
                hoverable
                style={{ 
                  borderRadius: '12px', 
                  height: '100%',
                  border: '1px solid #e2e8f0'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Title level={4} style={{ margin: 0, color: '#1e293b' }}>
                    {item.title}
                  </Title>
                  <Tag color={item.status === 'Active' ? 'green' : 'orange'}>
                    {item.status}
                  </Tag>
                </div>
                
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                  {item.description}
                </Text>
                
                <div className="mb-3">
                  {item.tags.map(tag => (
                    <Tag key={tag} style={{ marginBottom: '4px' }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Text style={{ marginLeft: '8px', fontSize: '12px' }}>
                      {item.author}
                    </Text>
                  </div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {item.lastUpdated}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredItems.length === 0 && (
          <Card style={{ textAlign: 'center', padding: '60px 0', borderRadius: '12px' }}>
            <Title level={4} type="secondary">No agents found</Title>
            <Text type="secondary">Try adjusting your search terms or filters</Text>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WorkPage;