import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/imports.scss';

import MainButtons from './components/MainButtons';
import Notification from './components/Notification';
import StationsWrapper from './components/StationsWrapper';
import VolumeSlider from './components/VolumeSlider';
import MusicBars from './components/MusicBars';
import Cassette from './components/Cassette';

import StationManager from './services/StationManager';

class App extends React.Component {
  constructor() {
    super();


    this.state = {
      currentStation: null,
      isPlaying: false,
      isLoading: false,
      volume: 0.5,
    };

    this.stationManager = new StationManager(() => {
      this.setState({ isLoading: false, isPlaying: true });
    });
    this.stationManager.volume = 0.5;

    this.play = this.play.bind(this);
    this.continue = this.continue.bind(this);
    this.stop = this.stop.bind(this);
  }

  onVolumeChange(volume) {
    this.setState({ volume });
    this.stationManager.volumeValue = volume;
  }

  play(station) {
    this.setState({ isLoading: true, isPlaying: false, currentStation: station });
    this.stop();
    this.stationManager.play(station);
  }

  continue() {
    const { currentStation } = this.state;
    this.setState({ isLoading: true, isPlaying: false });
    this.stationManager.play(currentStation);
  }

  stop() {
    this.setState({ isPlaying: false });
    this.stationManager.stop();
  }

  render() {
    const {
      currentStation, isPlaying, isLoading, volume,
    } = this.state;
    return (
      <div className="App">
        <Notification isLoading={isLoading} />
        <StationsWrapper
          onPlay={this.play}
          onStop={this.stop}
          isPlaying={isPlaying}
          isLoading={isLoading}
          currentStation={currentStation}
        />
        <MainButtons
          onPlay={this.continue}
          onStop={this.stop}
          isPlaying={isPlaying}
          isLoading={isLoading}
          currentStation={currentStation}
        />
        <VolumeSlider
          currentVolume={volume}
          setVolume={(volumeValue) => { this.onVolumeChange(volumeValue); }}
        />
        <Cassette nowPlaying={currentStation} isPlaying={isPlaying} />
        {/* <MusicBars isPlaying={isPlaying} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
