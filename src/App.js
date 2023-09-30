// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './pages/LandingPage';
import Signin from './pages/Signin';
import SearchPark from './pages/SearchPark';
import Account from './pages/Account';
import About from './pages/About';
import { checkAuthStatus } from './firebase';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus((authenticated) => {
      setIsAuthenticated(authenticated);
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="About" element={<About />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Searchpark" element={<Outlet />}>
            {isAuthenticated ? <Route index element={<SearchPark />} /> : null}
          </Route>
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
