import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
        <h2>Your Profile</h2>
      <h4>{user.name}</h4>
      
    </div>
  );
};

export default ProfileCard;
