import React from 'react';
import './About.css';

export default function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p className="about-description">
          We are a team of passionate individuals dedicated to providing you with the best experience.
        </p>
        <p className="about-description">
          Our mission is to deliver top-notch products and services that meet your needs.
        </p>
        <p className="about-description">
          Thank you for choosing us!
        </p>
      </div>
    </div>
  );
}
