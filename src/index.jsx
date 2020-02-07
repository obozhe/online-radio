import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/imports.scss';

import StationsWrapper from './components/StationsWrapper';
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
    };

    this.stationManager = new StationManager(() => {
      this.setState({ isLoading: false, isPlaying: true });
    });

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  play(station = null) {
    const { currentStation } = this.state;

    const playFromMain = () => {
      this.setState({ isLoading: true, isPlaying: false });
      this.stationManager.play(currentStation);
    };

    const playFromStationBlock = () => {
      this.setState({ isLoading: true, isPlaying: false, currentStation: station });
      this.stop();
      this.stationManager.play(station);
    };

    if (station) playFromStationBlock();
    else playFromMain();
  }

  stop() {
    this.setState({ isPlaying: false });
    this.stationManager.stop();
  }

  render() {
    const { currentStation, isPlaying, isLoading } = this.state;
    return (
      <div className="App">
        <div className={`loading ${isLoading ? 'show' : ''}`}>
          bufferizing...&nbsp;
          <i className="icon-spin5 rotating" />
        </div>
        <StationsWrapper
          onPlay={this.play}
          onStop={this.stop}
          isPlaying={isPlaying}
          isLoading={isLoading}
          currentStation={currentStation}
        />
        <div className="main-buts">
          <button
            type="button"
            disabled={isPlaying || isLoading || !currentStation}
            className="play-but inactive"
            onClick={this.play}
          >
            <i className="icon-play" />
          </button>
          <button
            type="button"
            disabled={!isPlaying || isLoading}
            className="stop-but inactive"
            onClick={this.stop}
          >
            <i className="icon-pause" />
          </button>
        </div>
        <Cassette nowPlaying={currentStation} isPlaying={isPlaying} />
        {/* <MusicBars /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
