import React from 'react';

const Casette = ({ nowPlaying, isPlaying }) => (
  <>
    <div className="cassetteOuter">
      <span className="screw screw1">
        <span className="screwInner" />
      </span>
      <span className="screw screw2">
        <span className="screwInner" />
      </span>
      <span className="screw screw3">
        <span className="screwInner" />
      </span>
      <span className="screw screw4">
        <span className="screwInner" />
      </span>

      <div className="stickerOuter">
        <div className="sticker">
          <span className="a-side">A</span>
          <p className="cursive">{nowPlaying || 'My Best Mixtape!'}</p>
          <span className="stripe" />
          <span className="c90">D-C90</span>
          <span className="logo">T.F.H.®</span>
          <div className="middle clearfix">
            <span className="circle one">
              <span className={`teethBox ${isPlaying ? 'rotating' : ''}`}>
                <span className="teeth" />
                <span className="teeth" />
                <span className="teeth" />
              </span>
            </span>
            <div className="window">
              <span className="reelOne" />
              <span className="reelTwo" />
            </div>
            <span className="circle two">
              <span className={`teethBox ${isPlaying ? 'rotating' : ''}`}>
                <span className="teeth" />
                <span className="teeth" />
                <span className="teeth" />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="cassetteBottom">
        <span className="screw screw5">
          <span className="screwInner" />
        </span>
        <span className="bottomShadow">
          <span className="bottomHoles one" />
          <span className="bottomHoles two" />
          <span className="bottomHoles three" />
        </span>
        <span className="holes one" />
        <span className="holes two" />
      </div>
    </div>
  </>
);

export default Casette;
