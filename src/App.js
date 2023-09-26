import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NpsParksByState from './NpsParksByState';
import ParkDetail from './ParkDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NpsParksByState />} />
          <Route path="/park/:fullName" element={<ParkDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
