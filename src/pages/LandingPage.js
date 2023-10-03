import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="landing-header">Piano</h1>
        <p className="landing-par">Log in and start exploring.</p>
      </div>
      <div className="landing-right">
        <p className="landing-phrase">TURNS OUT YOU DON'T NEED ALL THAT STUFF YOU INSISTED YOU DID</p>
      </div>
    </div>
 );
};

export default LandingPage;
