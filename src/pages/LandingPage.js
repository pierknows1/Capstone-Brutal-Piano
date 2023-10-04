import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleNavigateToSignIn = () => {
    navigate('/Signin'); 
  };

  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="landing-header">Piano</h1>
        <div onClick={handleNavigateToSignIn} className="landing-link">
          Log in and start exploring
        </div>
      </div>
      <div className="landing-right">
        <p className="landing-phrase">
          TURNS OUT YOU DON'T NEED ALL 
          THAT STUFF YOU INSISTED YOU DID.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
