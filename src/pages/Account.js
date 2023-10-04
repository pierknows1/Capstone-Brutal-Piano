import React, { useState } from 'react';
import './Account.css';
import './LandingPage.css';

export default function Account() {
  const [name, setName] = useState('Your Name');
  const [location, setLocation] = useState('Your Location');
  const [followers, setFollowers] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="background-set1">
    <div className="card">
      <div className="profile">
        <div className="profile-picture">
          {/* Space for profile picture goes here */}
        </div>
        <div className="profile-info">
          <div className="user-details">
            <h1>{name}</h1>
            <p>Location: {location}</p>
            <p>Followers: {followers}</p>
          </div>
        </div>

        {isEditing ? (
          <div className="edit-profile">
            <h2>Edit Profile</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your Location"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

      <div className="hike-list">
        <h2>My Hikes</h2>
        <ul>
          <li>Hike 1</li>
          <li>Hike 2</li>
        </ul>
      </div>

      <div className="stats">
        <h2>Statistics</h2>
        {/* Display user's hiking statistics */}
      </div>
    </div>
    </div>
  );
}






// import React, { useState } from 'react';
// import './Account.css';

// export default function Account() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [isEditing, setIsEditing] = useState(true);

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   return (
//   <div className="oneTime">
//   <p>Hello</p>
// </div>
// );
// }

  //   <div className="account-container">
  //     <h1 className="account-title">Your Account</h1>
  //     <div className={`account-details ${isEditing ? 'editing' : ''}`}>
  //       <div className="account-info">
  //         <label>Name:</label>
  //         <input
  //           type="text"
  //           placeholder="Enter your name"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </div>
  //       <div className="account-info">
  //         <label>Email:</label>
  //         <input
  //           type="email"
  //           placeholder="Enter your email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </div>
  //       <div className="account-info">
  //         <label>Username:</label>
  //         <input
  //           type="text"
  //           placeholder="Choose a username"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </div>
  //       {isEditing ? (
  //         <button className="save-button" onClick={handleSave}>
  //           Save
  //         </button>
  //       ) : null}
  //     </div>
  //   </div>
  // );
