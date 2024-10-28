// src/components/TodaysPromise.js
import React from 'react';
import './Promise.css';

const TodaysPromise = () => {
  const promise = "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11";

  return (
    <div className="promise-container">
      <h2>Today's Promise Word</h2>
      <p>{promise}</p>
    </div>
  );
};

export default TodaysPromise;