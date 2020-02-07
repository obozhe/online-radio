import React from 'react';
import Station from './Station';

import _stations from '../data/stations';

export default class StationsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: _stations,
      isShowing: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchValue = event.target.value;
    const filteredStations = _stations.filter(({ name }) => {
      const [lowName, lowSearch] = [name.toLowerCase(), searchValue.toLowerCase()];
      return lowName.includes(lowSearch);
    });
    this.setState({ stations: filteredStations });
  }

  render() {
    const {
      onPlay, onStop, isPlaying, isLoading, currentStation,
    } = this.props;
    const { searchValue, stations, isShowing } = this.state;
    return (
      <div className={`stations-wrapper ${isShowing ? 'show' : ''}`} id="stations-wrapper">
        <button
          className="toogler"
          type="button"
          onClick={() => {
            this.setState({ isShowing: !isShowing });
          }}
        >
          <span>
            <i id="arrow-1" className={`icon-left-big ${isShowing ? 'rotate' : ''}`} />
            &nbsp;
            <b>STATIONS</b>
            &nbsp;
            <i id="arrow-2" className={`icon-left-big ${isShowing ? 'rotate' : ''}`} />
          </span>
        </button>
        <div className="stations">
          <div className="search">
            <i className="icon-search-1" />
            <input type="text" onChange={this.handleSearch} value={searchValue} />
          </div>
          <div className="stations-items-wrapper">
            <div className="stations-items">
              {stations.map(({ name, logo }, i) => (
                <Station
                  key={String(i)}
                  isPlaying={isPlaying}
                  isLoading={isLoading}
                  thisIsCurrent={currentStation === name}
                  name={name}
                  logo={logo}
                  onPlay={onPlay}
                  onStop={onStop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
