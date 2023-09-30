import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import './Signin.css';

export default function Signin() {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/Account'); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h1>Piano</h1>
        <p>hike.</p>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}
