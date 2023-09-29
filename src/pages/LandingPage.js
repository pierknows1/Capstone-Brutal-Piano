import React from 'react';
import { signInWithGoogle } from '../firebase'; 
// import landingimage from './landingimage.jpg'; 

const LandingPage = () => {
  const handleSignInWithGoogle = () => {
    signInWithGoogle(); // Call the signInWithGoogle function when the button is clicked
  };

  return (
    <div>
      <h1>Welcome to Piano</h1>
      <p>hike.</p>
      <button onClick={handleSignInWithGoogle}>Explore?</button>
    </div>
  );
};

export default LandingPage;