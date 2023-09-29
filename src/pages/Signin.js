import React from 'react';
import { signInWithGoogle } from '../firebase';

export default function Signin() {
    return (
      <div>
        <h1>Piano</h1>
        <p>hike.</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    );
  }
  