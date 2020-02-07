import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const VolumeSlider = ({ currentVolume, setVolume }) => (
  <div className="volume-slider-wrapper">
    <i className="icon-volume-off" />
    <InputRange
      maxValue={1}
      minValue={0}
      step={0.01}
      value={currentVolume}
      onChange={(value) => setVolume(value)}
    />
    <i className="icon-volume-up" />
  </div>
);

export default VolumeSlider;
