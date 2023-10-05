import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ParkDetail.css';

const ParkDetail = () => {
  const { id } = useParams();
  const [park, setPark] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'QDzPwbDBoLdn0Sy95L6Rfl59LXnt4BmefytYHaBu';
    const apiUrl = `https://developer.nps.gov/api/v1/parks?id=${id}&api_key=${apiKey}`;

    axios
      .get(apiUrl)
        .then((response) => {
          const parkData = response.data.data[0];
          setPark(parkData);
          console.log(parkData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        }); }, [id]);

    return (
      <div className="background-container">
        <div className="card-container">
        <div className="park-card">
            {loading ? (
              <div></div>
            ) : park.fullName ? (
              <div>
                <h1>{park.fullName}</h1>
                  <p className="description">{park.description}</p>
                  <p>
                    <a href={park.url} target="_blank" rel="noopener noreferrer">
                      {park.url}
                    </a>
                    </p>
                    <p className="weather-info">{park.weatherInfo}</p>
                    </div>
                  ) : (
                    <div>No data available for this park.</div>
                  )}
            </div>
                <div className="park-card-images">
                  {park.images && park.images.length > 0 ? (
                  park.images.map((image, index) => (
                  <div key={index} className="image-container">
                  <img src={image.url} alt={image.altText} />
                  </div>
                  ))
                ) : (
                  <div>No images available for this park.</div>
              )}
          </div>
        </div>
      </div>
    );
  };

  export default ParkDetail;