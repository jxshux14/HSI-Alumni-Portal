import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../../context/ChatContext.jsx';

// Helper function to get status badge colors
const getStatusBadgeStyles = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return {
        color: '#199a08',
        borderColor: '#199a08',
        backgroundColor: '#f0fdf0'
      };
    case 'inactive':
      return {
        color: '#dc2626',
        borderColor: '#dc2626',
        backgroundColor: '#fef2f2'
      };
    case 'on-leave':
      return {
        color: '#d97706',
        borderColor: '#d97706',
        backgroundColor: '#fffbeb'
      };
    case 'remote':
      return {
        color: '#2563eb',
        borderColor: '#2563eb',
        backgroundColor: '#eff6ff'
      };
    default:
      return {
        color: '#6b7280',
        borderColor: '#6b7280',
        backgroundColor: '#f9fafb'
      };
  }
};

export default function EmployeeCard({ employee }) {
  const navigate = useNavigate();
  const { openChat } = useChat();
  const statusStyles = getStatusBadgeStyles(employee.status);

  return (
    <div className="employee-card">
      {/* Position with Status Badge on the RIGHT */}
      <div className="employee-position-container">
        <div className="position-status-wrapper">
          <h2 className="employee-position">
            {employee.position}
          </h2>
          <span 
            className="status-badge-right"
            style={{
              color: statusStyles.color,
              borderColor: statusStyles.borderColor,
              backgroundColor: statusStyles.backgroundColor
            }}
          >
            {employee.status.toUpperCase()}
          </span>
        </div>
      </div>
      
      {/* Employee Header with Photo */}
      <div className="employee-header">
        <div className="employee-photo-wrapper">
          <div className="employee-photo">
            <img 
              src={employee.photo} 
              alt={employee.name}
            />
          </div>
        </div>
        <div className="employee-info">
          <h3 className="employee-name">
            {employee.name}
          </h3>
          <p className="employee-department">
            {employee.department}
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div className="credentials-section">
        <ul className="credentials-list">
          {employee.credentials.map((credential, index) => (
            <li key={index} className="credential-item">
              <svg 
                className="credential-icon" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="credential-text">{credential}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <div className="skills-container">
          {employee.skills.map((skill, index) => (
            <span 
              key={index}
              className="skill-badge"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons-container">
        <div className="action-buttons">
          <button 
            className="view-profile-btn" 
            onClick={() => navigate("/directory/view-profile", { state: { employee } })}
          >
            View Profile
          </button>
          <button 
            className="connect-btn"
            onClick={() => openChat(employee)}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
