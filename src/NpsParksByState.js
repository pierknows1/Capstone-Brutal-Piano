import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NpsParksByState.css';

const NpsParksByState = () => {
  const [stateCode, setStateCode] = useState('');
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(false);

  const parkSearchAPI = () => {
    if (stateCode.trim() === '') {
      return;
    }

    setLoading(true);
    const apiKey = 'QDzPwbDBoLdn0Sy95L6Rfl59LXnt4BmefytYHaBu';
    const apiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setParks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const backButton = () => {
    setStateCode('');
    setParks([]);
  };

  return (
    <div class="container">
      <h1 class="header">Search National Parks by State</h1>
      <div class="input-container">
        <label class="label">Enter State Code:</label>
        <input
          type="text"
          placeholder="State Abbreviations"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          class="input"
        />
        <button onClick={parkSearchAPI} class="search-button">
          Search
        </button>
      </div>
      {loading ? (
        <div class="loading">Loading...</div>
      ) : (
        <div>
          <h2 class="sub-header">National Parks in {stateCode}</h2>
          <ul class="list">
            {parks.map((park) => (
              <li key={park.id} class="list-item">
                <Link to={`/park/${park.id}`} class="link">
                  {park.fullName}
                </Link>
              </li>
            ))}
          </ul>
          {parks.length > 0 && ( 
            <button onClick={backButton} class="back-button">
              Back
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NpsParksByState;
