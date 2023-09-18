// FadeInAnimation.js
import React from 'react';
import "./units.css"

const FadeInAnimation = ({ isVisible }) => {
  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      Your content here
    </div>
  );
};

export default FadeInAnimation;

