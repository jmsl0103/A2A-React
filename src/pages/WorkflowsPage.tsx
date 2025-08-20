import React from 'react';
import { Typography, Card, Row, Col, Button, Tag, Timeline, Progress } from 'antd';
import { BranchesOutlined, PlayCircleOutlined, PauseCircleOutlined, StopOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const WorkflowsPage: React.FC = () => {
  const workflows = [
    {
      id: 1,
      name: 'Content Creation Pipeline',
      description: 'Automated workflow for generating, optimizing, and publishing content',
      status: 'Running',
      progress: 75,
      steps: ['Research', 'Generate', 'Review', 'Optimize', 'Publish'],
      currentStep: 3,
      tags: ['Content', 'Automation', 'Publishing'],
      lastRun: '2 hours ago'
    },
    {
      id: 2,
      name: 'Data Processing Chain',
      description: 'Extract, transform, and load data from multiple sources with validation',
      status: 'Completed',
      progress: 100,
      steps: ['Extract', 'Transform', 'Validate', 'Load', 'Report'],
      currentStep: 5,
      tags: ['ETL', 'Data', 'Validation'],
      lastRun: '1 day ago'
    },
    {
      id: 3,
      name: 'Customer Support Bot',
      description: 'Multi-stage workflow for handling customer inquiries and escalations',
      status: 'Paused',
      progress: 45,
      steps: ['Classify', 'Route', 'Respond', 'Escalate', 'Follow-up'],
      currentStep: 2,
      tags: ['Support', 'Classification', 'Routing'],
      lastRun: '6 hours ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': return 'green';
      case 'Paused': return 'orange';
      case 'Completed': return 'blue';
      case 'Failed': return 'red';
      default: return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Running': return <PlayCircleOutlined />;
      case 'Paused': return <PauseCircleOutlined />;
      case 'Completed': return <PlayCircleOutlined />;
      default: return <StopOutlined />;
    }
  };

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        <div className="mb-4">
          <Title level={2} style={{ marginBottom: '8px' }}>Workflows</Title>
          <Text type="secondary">Manage and monitor your automated agent workflows</Text>
        </div>

        <Row gutter={[24, 24]}>
          {workflows.map((workflow) => (
            <Col key={workflow.id} xs={24}>
              <Card
                style={{ 
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24} lg={16}>
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3">
                        <BranchesOutlined style={{ fontSize: '24px', color: '#212529' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Title level={4} style={{ margin: 0 }}>
                            {workflow.name}
                          </Title>
                          <Tag 
                            color={getStatusColor(workflow.status)}
                            icon={getStatusIcon(workflow.status)}
                          >
                            {workflow.status}
                          </Tag>
                        </div>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '12px' }}>
                          {workflow.description}
                        </Text>
                        <div className="mb-3">
                          {workflow.tags.map(tag => (
                            <Tag key={tag} style={{ marginBottom: '4px' }}>
                              {tag}
                            </Tag>
                          ))}
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <Text style={{ marginRight: '12px' }}>Progress:</Text>
                          <Progress 
                            percent={workflow.progress} 
                            size="small" 
                            style={{ flex: 1, maxWidth: '200px' }}
                            strokeColor="#212529"
                          />
                        </div>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          Last run: {workflow.lastRun}
                        </Text>
                      </div>
                    </div>
                  </Col>
                  
                  <Col xs={24} lg={8}>
                    <div style={{ marginBottom: '16px' }}>
                      <Text strong style={{ marginBottom: '8px', display: 'block' }}>
                        Workflow Steps
                      </Text>
                      <Timeline
                        size="small"
                        current={workflow.currentStep - 1}
                        items={workflow.steps.map((step, index) => ({
                          title: step,
                          description: index < workflow.currentStep ? 'Completed' : 
                                     index === workflow.currentStep ? 'In Progress' : 'Pending'
                        }))}
                      />
                    </div>
                    
                    <div className="d-flex gap-2">
                      <Button 
                        type="primary" 
                        size="small"
                        style={{ 
                          background: workflow.status === 'Running' ? '#ef4444' : '#212529',
                          border: 'none',
                          borderRadius: '6px'
                        }}
                      >
                        {workflow.status === 'Running' ? 'Stop' : 'Start'}
                      </Button>
                      <Button size="small" style={{ borderRadius: '6px' }}>
                        Edit
                      </Button>
                      <Button size="small" style={{ borderRadius: '6px' }}>
                        Logs
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WorkflowsPage;