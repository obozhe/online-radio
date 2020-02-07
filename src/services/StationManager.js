import { Howl, Howler } from 'howler';

import stationsArray from '../data/stations';


export default class StationManager {
  constructor(onload) {
    const stations = new Map();

    stationsArray.forEach(({ name, src }) => {
      stations.set(name,
        new Howl({
          src,
          format: ['mp3', 'aac'],
          html5: true,
          preload: false,
          onload,
        }));
    });

    this.stations = stations;

    // Howler.volume(0.5);
  }

  play(stationName) {
    this.stop();
    this.stations.get(stationName).load();
    this.stations.get(stationName).play();
  }

  stop() {
    this.stations.forEach((station) => {
      station.stop();
      station.unload();
    });
  }
}
