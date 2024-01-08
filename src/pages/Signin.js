import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import './Signin.css';
import './LandingPage.css';

const SignInButton = ({ redirectTo }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInWithEmailPassword = async () => {
  };
  const handleForgotPassword = () => {
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(redirectTo);
    } catch (error) {
    }
  };

  return (
    <div className="signin-container">
  <div className="card">
    <div className="card-content">
      <h1 className="logo">Piano</h1>
      <p className="slogan">Welcome back, explore.</p>
      <form className="signin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignInWithEmailPassword}>Log In</button>
        </form>
        <p>
        <a onClick={handleForgotPassword}> Forgot your password?</a>
          </p>
      <   div className="continue-with">
        <button onClick={handleSignInWithGoogle} className="google-button">
          Sign in with Google.
        </button>
          </div>
          <p>
          Don't have an account?{' '} Sign Up
        </p>
        </div>
        </div>
  </div>

  );
};

export default SignInButton;
