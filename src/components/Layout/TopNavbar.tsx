import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';

const TopNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/tools', label: 'Tools' },
    { key: '/agents', label: 'Agents' },
    { key: '/workflows', label: 'Workflows' },
    { key: '/about', label: 'About' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid px-4">
        <button 
          className="navbar-brand btn btn-link p-0"
          onClick={() => navigate('/')}
          style={{ textDecoration: 'none' }}
        >
          OI Starship
        </button>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {menuItems.map((item) => (
              <li key={item.key} className="nav-item">
                <button
                  className={`nav-link btn btn-link ${location.pathname === item.key ? 'active' : ''}`}
                  onClick={() => navigate(item.key)}
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => navigate('/submit')}
              className="submit-agent-btn"
            >
              Submit Agent
            </Button>
            
            <div className="d-flex align-items-center gap-2">
              <UserOutlined style={{ fontSize: '16px', color: '#64748b' }} />
              <span style={{ color: '#64748b', fontSize: '14px' }}>MARIYON SUNIL LARSEN J</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;