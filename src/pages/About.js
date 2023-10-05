import React from 'react';
import './About.css';
import AnimatedRoad from './AnimatedRoad';

export default function AboutUs() {
  return (
    <div className="about-container">
      <AnimatedRoad /> 
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p className="about-description">
          We are <strong>PIANO</strong>, a group of passionate individuals who reject the norms of conventional design.
        </p>
        <p className="about-description">
          We don't follow traditional aesthetics. Our philosophy is raw, unconventional, and unapologetically bold.
        </p>
        <p className="about-description">
          At Piano, we embrace the brutalist style to break free from the ordinary and redefine design.
        </p>
              <p className="meInfo">pierknows@gmail.com</p>
      </div>
    </div>
  );
}
