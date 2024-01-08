import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './pages/LandingPage';
import SignInButton from './pages/Signin';
import SearchPark from './pages/SearchPark'; 
import Account from './pages/Account';
import About from './pages/About';
import { checkAuthStatus } from './firebase';
import FootBar from './FootBar';
import ParkDetail from './pages/ParkDetail';

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
          <Route path="/Signin" element={<SignInButton redirectTo="/Account" /> } />
          <Route path="/SearchPark" element={<Outlet />}>
            {isAuthenticated ? <Route index element={<SearchPark />} /> : null}
          </Route>
          <Route path="/Account" element={<Account />} />
          <Route path="/park/:id" element={<ParkDetail />} />
          
        </Routes>
      </div>
      <FootBar />
    </Router>
  );
}

export default App;
