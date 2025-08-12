import React, { useState } from 'react';
import { 
  Form, 
  Input, 
  Button, 
  Select, 
  Checkbox, 
  Row, 
  Col, 
  Typography, 
  Space,
  Card,
  Upload,
  message
} from 'antd';
import { UploadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const SubmitAgentPage: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { value: 'logic-reasoning', label: 'Logic & Reasoning' },
    { value: 'creative-generation', label: 'Creative Generation' },
    { value: 'documentation', label: 'Documentation' },
    { value: 'content-writing', label: 'Content Writing' },
    { value: 'task-automation', label: 'Task Automation' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'research', label: 'Research' },
    { value: 'translation', label: 'Translation' },
    { value: 'coding', label: 'Coding' },
    { value: 'image-processing', label: 'Image Processing' },
    { value: 'communication', label: 'Communication' },
    { value: 'planning', label: 'Planning' },
  ];

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    action: '#',
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Agent submitted successfully!');
  };

  const handleCategoryChange = (checkedValues: string[]) => {
    setSelectedCategories(checkedValues);
  };

  return (
    <div className="container-fluid" style={{ background: '#f8fafc', minHeight: 'calc(100vh - 64px)', padding: '40px 0' }}>
      <div className="container">
        <Row justify="center">
          <Col xs={24} lg={16} xl={12}>
            <div className="text-center mb-5">
              <Title level={2} style={{ color: '#1e293b', marginBottom: '8px' }}>
                Submit an Agent
              </Title>
              <Text style={{ color: '#64748b', fontSize: '16px' }}>
                Share your AI agent with our community and make it available to the community.
              </Text>
            </div>

            <Card 
              className="form-section"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                border: 'none'
              }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                requiredMark={false}
              >
                <Row gutter={[24, 0]}>
                  <Col span={24}>
                    <Form.Item
                      name="agentName"
                      label={<Text strong>Agent Name</Text>}
                      rules={[{ required: true, message: 'Please enter agent name' }]}
                    >
                      <Input 
                        placeholder="Enter your agent's name"
                        style={{ borderRadius: '8px', height: '48px' }}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name="description"
                      label={<Text strong>Description</Text>}
                      rules={[{ required: true, message: 'Please enter description' }]}
                    >
                      <TextArea 
                        placeholder="Describe what your agent does and its capabilities"
                        rows={4}
                        style={{ borderRadius: '8px' }}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name="endpointUrl"
                      label={<Text strong>Agent Endpoint URL</Text>}
                      rules={[
                        { required: true, message: 'Please enter endpoint URL' },
                        { type: 'url', message: 'Please enter a valid URL' }
                      ]}
                    >
                      <Input 
                        placeholder="https://your-agent-endpoint.com"
                        style={{ borderRadius: '8px', height: '48px' }}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name="categories"
                      label={<Text strong>Categories</Text>}
                      rules={[{ required: true, message: 'Please select at least one category' }]}
                    >
                      <Checkbox.Group 
                        value={selectedCategories}
                        onChange={handleCategoryChange}
                        style={{ width: '100%' }}
                      >
                        <Row gutter={[16, 16]}>
                          {categories.map((category) => (
                            <Col xs={12} sm={8} md={6} key={category.value}>
                              <Checkbox 
                                value={category.value}
                                style={{ 
                                  padding: '8px 12px',
                                  border: selectedCategories.includes(category.value) 
                                    ? '2px solid #8b5cf6' 
                                    : '1px solid #e2e8f0',
                                  borderRadius: '8px',
                                  background: selectedCategories.includes(category.value) 
                                    ? '#f3f4f6' 
                                    : 'white',
                                  display: 'block',
                                  textAlign: 'center',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                {category.label}
                              </Checkbox>
                            </Col>
                          ))}
                        </Row>
                      </Checkbox.Group>
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="documentationType"
                      label={<Text strong>Documentation Type</Text>}
                    >
                      <Select 
                        placeholder="Select documentation type"
                        style={{ borderRadius: '8px' }}
                      >
                        <Option value="api-docs">API Documentation</Option>
                        <Option value="user-guide">User Guide</Option>
                        <Option value="technical-specs">Technical Specifications</Option>
                        <Option value="examples">Code Examples</Option>
                        <Option value="video-tutorial">Video Tutorial</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="recommendationUrl"
                      label={<Text strong>Recommendation URL</Text>}
                    >
                      <Input 
                        placeholder="https://your-documentation-url.com"
                        style={{ borderRadius: '8px', height: '48px' }}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name="contactEmail"
                      label={<Text strong>Contact Email</Text>}
                      rules={[
                        { required: true, message: 'Please enter your contact email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input 
                        placeholder="your-email@example.com"
                        style={{ borderRadius: '8px', height: '48px' }}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name="additionalFiles"
                      label={<Text strong>Additional Files (Optional)</Text>}
                    >
                      <Upload {...uploadProps} style={{ width: '100%' }}>
                        <Button 
                          icon={<UploadOutlined />}
                          style={{ 
                            height: '48px',
                            borderRadius: '8px',
                            width: '100%',
                            borderStyle: 'dashed'
                          }}
                        >
                          Click to Upload Documentation or Examples
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <div 
                      style={{ 
                        background: '#f0f9ff',
                        border: '1px solid #0ea5e9',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '24px'
                      }}
                    >
                      <Space align="start">
                        <InfoCircleOutlined style={{ color: '#0ea5e9', marginTop: '2px' }} />
                        <div>
                          <Text strong style={{ color: '#0369a1' }}>Submission Guidelines</Text>
                          <div style={{ color: '#0369a1', marginTop: '4px' }}>
                            <Text>• Ensure your agent endpoint is publicly accessible</Text><br />
                            <Text>• Provide clear documentation for better discoverability</Text><br />
                            <Text>• Test your agent thoroughly before submission</Text>
                          </div>
                        </div>
                      </Space>
                    </div>
                  </Col>

                  <Col span={24}>
                    <div className="d-flex justify-content-between">
                      <Button 
                        size="large"
                        style={{ 
                          borderRadius: '8px',
                          height: '48px',
                          minWidth: '120px'
                        }}
                      >
                        Save Draft
                      </Button>
                      <Button 
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ 
                          background: 'linear-gradient(45deg, #8b5cf6, #6366f1)',
                          border: 'none',
                          borderRadius: '8px',
                          height: '48px',
                          minWidth: '120px',
                          fontWeight: 600
                        }}
                      >
                        Submit Agent
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SubmitAgentPage;