// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/user/123">User Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
