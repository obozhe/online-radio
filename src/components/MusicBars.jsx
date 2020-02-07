import React from 'react';

const musicBars = () => (
  <div className="music-bars">
    {Array(Math.round(window.innerWidth / 210))
      .fill(0)
      .map(() => (
        <>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
          <div className="bar4" />
          <div className="bar5" />
          <div className="bar6" />
          <div className="bar7" />
        </>
      ))}
  </div>
);

export default musicBars;
