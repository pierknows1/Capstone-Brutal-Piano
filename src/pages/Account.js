import React, { useState } from 'react';
import './Account.css';
import { FaPlus } from 'react-icons/fa'; 

export default function Account() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isEditing, setIsEditing] = useState(true); 
  const [hike, setHike] = useState('');
  const [hikeList, setHikeList] = useState([]);
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const newImageUpload = () => {
    setIsEditing(false);
  };

  const addHike = () => {
    if (hike.trim() !== '') {
      setHikeList([...hikeList, hike]);
      setHike('');
    }
  };

  const setImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="personal-container">
      <div className="personal-info-card">
        <div className="profile">
          <div className="profile-info">
            <div className="user-details">
              {isEditing ? (
                <div className="edit-profile">
                  <div className="image-upload">
                    <input
                      type="file"
                      id="profile-image"
                      accept="image/*"
                      onChange={(e) => setImageUpload(e)}
                    />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="input-field"
                  />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="input-field"
                  />
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className="input-field"
                  />
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio"
                    className="input-field"
                  />
                  <button onClick={newImageUpload}>Save</button>
                </div>
              ) : (
                <div className="view-profile">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="profile-image" />
                  ) : (
                    <div className="empty-profile-image"></div>
                  )}
                  <p>Name: {name}</p>
                  <p>Location: {location}</p>
                  <p>Age: {age}</p>
                  <p>Bio: {bio}</p>
                  <button className="edit-button" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hikes-card">
      <div className="hike-list">
  <h2>My Hikes</h2>
  <input
    type="text"
    value={hike}
    onChange={(e) => setHike(e.target.value)}
    placeholder="Add a new hike"
  />
 <button onClick={addHike}>
  <FaPlus /> 
</button>
  <ul>
    {hikeList.map((hike, index) => (
      <li key={index}>{hike}</li>
    ))}
  </ul>
</div>

        <div className="stats">
          <h2>Statistics</h2>
          
        </div>
      </div>
    </div>
  );
}
