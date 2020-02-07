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
    this.isPlaying = null;
    this.volume = 0.5;
  }

  play(stationName) {
    this.stop();
    this.isPlaying = this.stations.get(stationName);
    this.isPlaying.load();
    this.isPlaying.volume(this.volume);
    this.isPlaying.play();
  }

  stop() {
    if (this.isPlaying) {
      this.isPlaying.stop();
      this.isPlaying.unload();
    }
  }

  set volumeValue(volume) {
    this.volume = volume;
    if (this.isPlaying) this.isPlaying.volume(volume);
  }

  get volumeValue() {
    return this.volume;
  }
}
