import React from 'react';

const Station = ({
  name, logo, onPlay, onStop, isPlaying, isLoading, thisIsCurrent,
}) => {
  const tooglePlaying = () => (thisIsCurrent && isPlaying ? onStop() : onPlay(name));
  const path = './logos/';
  return (
    <div className="station">
      <div className="station-info">
        <img src={path + logo} alt="" className="logo" />
        <div className="title">{name}</div>
      </div>
      {thisIsCurrent && isPlaying && (
        <div className="isplaying-wrapper">
          <div className="isplaying">
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      <button className="play-button" type="button" onClick={tooglePlaying}>
        {thisIsCurrent && isPlaying ? <i className="icon-pause" /> : <i className="icon-play" />}
      </button>
      {isLoading && thisIsCurrent && (
        <div className="loading-station">
          <i className="icon-spin5 rotating" />
        </div>
      )}
    </div>
  );
};

export default Station;
