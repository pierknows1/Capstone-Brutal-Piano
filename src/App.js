import NavBar from './NavBar';
// import About from './pages/About';
import LandingPage from './pages/LandingPage';
import SearchPark from './pages/SearchPark';
import Signin from './pages/Signin';
import Account from './pages/Account';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Searchpark" element={<SearchPark />} />
          <Route path="/Account" element={<Account />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Searchpark" element={<SearchPark />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
