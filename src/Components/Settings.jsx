// Settings.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/history');
  }
  return (
    <div>
      <h2>Settings</h2>
      <p>Manage your settings here.</p>
      <button onClick={handleClick}>History Object</button>
    </div>
  );
}

export default Settings;
