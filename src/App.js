import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NpsParksByState from './NpsParksByState';
import ParkDetail from './ParkDetail';
import global from './global';
import { registerUser, signInUser, signOutUser, checkAuthState } from "./auth";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = checkAuthState((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div>
        <button onClick={() => signInUser("user@example.com", "password")}>
          Sign In
        </button>
        <button onClick={() => registerUser("newuser@example.com", "newpassword")}>
          Register
        </button>
      </div>
    );
  }

  return (
    <Router>
      <global>
        <Routes>
          <Route path="/" element={<NpsParksByState />} />
          <Route path="/park/:fullName" element={<ParkDetail />} />
        </Routes>
      </global>
    </Router>
  );
}

export default App;
