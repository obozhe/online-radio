import React from 'react';

const MainButtons = ({
  onPlay, onStop, isPlaying, isLoading, currentStation,
}) => (
  <div className="main-buts">
    <button
      type="button"
      disabled={isPlaying || isLoading || !currentStation}
      className="play-but inactive"
      onClick={() => onPlay()}
    >
      <i className="icon-play" />
    </button>
    <button
      type="button"
      disabled={!isPlaying || isLoading}
      className="stop-but inactive"
      onClick={onStop}
    >
      <i className="icon-pause" />
    </button>
  </div>
);

export default MainButtons;
