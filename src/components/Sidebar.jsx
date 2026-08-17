import React from 'react';
import { FaStethoscope, FaUserMd, FaMedkit, FaCalendarAlt } from 'react-icons/fa';

/**
 * Sidebar Component
 * Renders the left sidebar containing the brand logo
 * and dynamic navigation menu with active item state.
 */
const Sidebar = ({ activePage, setActivePage }) => {
  // Definition of navigation items with icons and unique labels
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaUserMd /> },
    { id: 'specialties', label: 'Specialties', icon: <FaMedkit /> },
    { id: 'appointments', label: 'Appointments', icon: <FaCalendarAlt /> },
  ];

  return (
    <aside className="sidebar">
      {/* 1. Top Brand Logo & App Name */}
      <div className="sidebar-header">
        <div className="logo-box">
          <FaStethoscope />
        </div>
        <span className="brand-name">BookEase</span>
      </div>

      {/* 2. Navigation Menu */}
      <nav>
        <ul className="nav-menu">
          {navItems.map((item) => {
            const isActive = activePage === item.label;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePage(item.label)}
                >
                  <span className="nav-item-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
