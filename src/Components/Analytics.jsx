// Analytics.jsx
import React from 'react';
import { Outlet,NavLink} from 'react-router-dom';

const Analytics = () => {
  return (
    <div>
      <h2>Analytics</h2>
      <div>
        <ul>
       <li> <NavLink to="">Overview</NavLink></li>
        <li><NavLink to="statistics">Statistics</NavLink></li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
}

export default Analytics;
