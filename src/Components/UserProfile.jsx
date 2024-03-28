// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  console.log("userid== ",userId)
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
      
    </div>
  );
}

export default UserProfile;
