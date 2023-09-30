import React, { useState } from 'react';
import './Account.css';

export default function Account() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="account-container">
      <h1 className="account-title">Your Account</h1>
      <div className={`account-details ${isEditing ? 'editing' : ''}`}>
        <div className="account-info">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="account-info">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="account-info">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
}
