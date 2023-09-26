import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NpsParksByState = () => {
  const [stateCode, setStateCode] = useState(''); 
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
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

  return (
    <div>
      <h1>Search National Parks by State</h1>
      <div>
        <label>Enter State Code: </label>
        <input
          type="text"
          placeholder="STATE ABBREVIATIONS"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>National Parks in {stateCode}</h2>
          <ul>
            {parks.map((park) => (
                <li key={park.id}>
                <Link to={`/park/${park.id}`}>{park.fullName}</Link>
            </li>
  ))}
</ul>
        </div>
      )}
    </div>
  );
};

export default NpsParksByState;
