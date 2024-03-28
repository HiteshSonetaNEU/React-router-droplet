// History.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to a new route programmatically
    navigate(-1);
  }
  return (
    <div>
      <h2>History page</h2>
      
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default History;
