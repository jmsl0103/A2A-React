import React from 'react';
import { Typography, Card, Row, Col, Statistic, Avatar, Space } from 'antd';
import { TeamOutlined, RocketOutlined, GlobalOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const stats = [
    {
      title: 'Active Agents',
      value: 2847,
      icon: <RocketOutlined style={{ color: '#212529' }} />
    },
    {
      title: 'Community Members',
      value: 15632,
      icon: <TeamOutlined style={{ color: '#06b6d4' }} />
    },
    {
      title: 'Countries',
      value: 85,
      icon: <GlobalOutlined style={{ color: '#10b981' }} />
    },
    {
      title: 'Success Rate',
      value: 98.5,
      suffix: '%',
      icon: <TrophyOutlined style={{ color: '#f59e0b' }} />
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of AI',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Emily Zhang',
      role: 'Product Manager',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <Title level={1} style={{ color: '#1e293b', marginBottom: '16px' }}>
            About A2A Catalog
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            We're building the world's largest marketplace for AI agents, connecting developers, 
            businesses, and innovators to accelerate the future of automation.
          </Paragraph>
        </div>

        {/* Statistics */}
        <Card style={{ marginBottom: '40px', borderRadius: '12px' }}>
          <Row gutter={[24, 24]}>
            {stats.map((stat, index) => (
              <Col key={index} xs={12} md={6}>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.icon}
                  valueStyle={{ color: '#1e293b', fontWeight: 600 }}
                />
              </Col>
            ))}
          </Row>
        </Card>

        {/* Mission & Vision */}
        <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
          <Col xs={24} lg={12}>
            <Card 
              title="Our Mission" 
              style={{ height: '100%', borderRadius: '12px' }}
              headStyle={{ background: 'linear-gradient(45deg, #212529, #6366f1)', color: 'white' }}
            >
              <Paragraph>
                To democratize AI by making intelligent agents accessible, shareable, and easy to deploy. 
                We believe that the future of work will be powered by AI agents working alongside humans, 
                and we're building the infrastructure to make that future possible.
              </Paragraph>
              <Paragraph>
                Our platform enables anyone to create, share, and monetize AI agents, fostering a global 
                community of innovation and collaboration.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card 
              title="Our Vision" 
              style={{ height: '100%', borderRadius: '12px' }}
              headStyle={{ background: 'linear-gradient(45deg, #06b6d4, #10b981)', color: 'white' }}
            >
              <Paragraph>
                To create a world where AI agents handle routine tasks, allowing humans to focus on 
                creativity, strategy, and meaningful work. We envision a marketplace where the best 
                AI solutions rise to the top through community feedback and real-world performance.
              </Paragraph>
              <Paragraph>
                By 2030, we aim to be the go-to platform for AI agent discovery and deployment, 
                powering millions of workflows worldwide.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Card style={{ borderRadius: '12px', marginBottom: '40px' }}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '32px' }}>
            Meet Our Team
          </Title>
          <Row gutter={[24, 24]}>
            {team.map((member, index) => (
              <Col key={index} xs={12} md={6}>
                <div style={{ textAlign: 'center' }}>
                  <Avatar 
                    size={80} 
                    src={member.avatar}
                    style={{ marginBottom: '12px' }}
                  />
                  <Title level={5} style={{ marginBottom: '4px' }}>
                    {member.name}
                  </Title>
                  <Text type="secondary">{member.role}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Values */}
        <Card style={{ borderRadius: '12px' }}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '32px' }}>
            Our Values
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <RocketOutlined style={{ fontSize: '48px', color: '#212529', marginBottom: '16px' }} />
                <Title level={4}>Innovation</Title>
                <Text>We push the boundaries of what's possible with AI technology</Text>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <TeamOutlined style={{ fontSize: '48px', color: '#06b6d4', marginBottom: '16px' }} />
                <Title level={4}>Community</Title>
                <Text>We believe in the power of collaborative development and knowledge sharing</Text>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <GlobalOutlined style={{ fontSize: '48px', color: '#10b981', marginBottom: '16px' }} />
                <Title level={4}>Accessibility</Title>
                <Text>We make advanced AI technology accessible to everyone, everywhere</Text>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;