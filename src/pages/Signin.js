import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import './Signin.css';

export function SignInButton({ redirectTo }) {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(redirectTo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h1>Piano</h1>
        <p>hike.</p>
        <button onClick={handleSignInWithGoogle} className="SignInButton">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
