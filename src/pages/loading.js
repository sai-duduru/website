import React, { useEffect, useState } from 'react';
import '../styles/loading.css';

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the welcome message after 1 second
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Start fading out the loading screen after 3 seconds
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Clean up the timers
    return () => {
      clearTimeout(messageTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''} ${showMessage ? 'show-message' : ''}`}>
      <div className="loading-message">Welcome to my Personal Website</div>
      <div className="loading-spinner"></div>
      <div className="name-animation">Sai Duduru</div>
    </div>
  );
};

export default Loading;
