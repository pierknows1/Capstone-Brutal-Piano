import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NpsParksByState from './NpsParksByState';
import ParkDetail from './ParkDetail';
import Layout from './global'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<NpsParksByState />} />
          <Route path="/park/:fullName" element={<ParkDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
