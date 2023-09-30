import React from 'react';
import './LandingPage.css';
import { SignInButton } from './Signin';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-header">Piano</h1>
      <p className="landing-par">Log in and start exploring.</p>
      <SignInButton redirectTo="/Account" />
    </div>
  );
};

export default LandingPage;
