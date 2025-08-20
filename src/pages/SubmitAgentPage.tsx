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
  Card,
  message,
  Radio
} from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const SubmitAgentPage: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  const categories = [
    { value: 'accessibility', label: 'Accessibility' },
    { value: 'audioProcessing', label: 'Audio Processing' },
    { value: 'businessIntelligence', label: 'Business Intelligence' },
    { value: 'communication', label: 'Communication' },
    { value: 'contentGeneration', label: 'Content Generation' },
    { value: 'creative', label: 'Creative' },
    { value: 'customerService', label: 'Customer Service' },
    { value: 'dataAnalytics', label: 'Data & Analytics' },
    { value: 'development', label: 'Development' },
    { value: 'environment', label: 'Environment' },
    { value: 'finance', label: 'Finance' },
    { value: 'imageProcessing', label: 'Image Processing' },
    { value: 'language', label: 'Language' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'other', label: 'Other' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'research', label: 'Research' },
    { value: 'socialMedia', label: 'Social Media' }
  ];
  
  const handleAddSkill = () => {
    const skillValue = form.getFieldValue('skillsCapabilities');
    if (skillValue && skillValue.trim()) {
      setSkills([...skills, skillValue.trim()]);
      form.setFieldValue('skillsCapabilities', ''); // Clear the input after adding
    }
  };

  const onFinish = (values: any) => {
    const payload = {
      "name": values.agentName,
      "description": values.description,
      "provider": values.providerOrganization,
      "endpoint": values.endpointUrl,
      "tags": selectedCategories,
      "skills": skills,
      "auth_type": values.documentationType,
      "documentation": values.documentationURL,
      "user_id": "ee59ab6e-796e-4912-9288-87c5e3cd6b03",
      "is_public": values.agentType === 'public'
    }
    console.log('Form values:', payload);
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
                  <Col span={12}>
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
                  <Col span={12}>
                    <Form.Item
                      name="providerOrganization"
                      label={<Text strong>Provider/Organization</Text>}
                      rules={[{ required: true, message: 'Please enter provider/organization' }]}
                    >
                      <Input 
                        placeholder="Enter provider/organization"
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
                      name="agentType"
                      rules={[
                        { required: true, message: 'Please select a visibility' },
                      ]}
                    >
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <label style={{ fontWeight: '600', fontSize: '14px' }}>Agent Type</label>
                      <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                      </Radio.Group>
                      </div>

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
                        <Row gutter={[0, 12]}>
                          {categories.map((category) => (
                            <Col xs={24} sm={8} md={8} key={category.value}>
                              <Checkbox
                                value={category.value}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  fontSize: '14px',
                                  fontWeight: 400,
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


                  <Col xs={24} md={21}>
                    <Form.Item
                      name="skillsCapabilities"
                      label={<Text strong>Skills/Capabilities</Text>}
                      rules={[{ required: !skills.length, message: 'Please enter skills/capabilities' }]}
                    >
                      <Input 
                        placeholder="Enter skills/capabilities"
                        style={{ borderRadius: '8px', height: '48px' }}
                        onKeyUp={(e) => {
                          if (e.key === 'Enter') {
                            handleAddSkill();
                          }
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={3}>
                  <Form.Item
                      name="Skills/Capabilities"
                      label={<Text strong></Text>}
                    >
                      <Button type="primary" onClick={() => handleAddSkill()} style={{ background: 'black', borderRadius: '8px', height: '48px' }}>
                        +
                      </Button>
                    </Form.Item>
                  </Col>
                  {!!skills.length && <Col xs={24} md={24}>
                    <Form.Item
                      name="Skills/Capabilities"
                    >
                     <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}> {skills.map((skill) => (
                        <div style={{ padding: '10px', borderRadius: '20px', backgroundColor: '#f8fafc', width: 'auto, minWidth: 30px' }} key={skill}>{skill}</div>
                      ))}
                      </div>
                    </Form.Item>
                  </Col>}
                  <Col span={24}>
                    <Form.Item
                      name="documentationType"
                      label={<Text strong>Authentication Type</Text>}
                    >
                      <Select 
                        placeholder="Select documentation type"
                        style={{ borderRadius: '8px' }}
                      >
                        <Option value="API Key">API Key</Option>
                        <Option value="OAuth 2.0">OAuth 2.0</Option>
                        <Option value="beaBearer Tokenrertoken">Bearer Token</Option>
                        <Option value="Basic Auth">Basic Auth</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="documentationURL"
                      label={<Text strong>Documentation URL</Text>}
                      rules={[
                        { required: true, message: 'Please enter documentation URL' },
                        { type: 'url', message: 'Please enter a valid URL' }
                      ]}
                    >
                      <Input 
                        placeholder="https://your-documentation-url.com"
                        style={{ borderRadius: '8px', height: '48px' }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <div className="d-flex justify-content-end">
                      <Button 
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ 
                          background: 'linear-gradient(45deg, #212529, #6366f1)',
                          border: 'none',
                          borderRadius: '8px',
                          height: '48px',
                          minWidth: '120px',
                          fontWeight: 600,
                          alignSelf: 'right'
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