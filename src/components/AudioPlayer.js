import React, { useState } from 'react';
import { AudioPlayer } from 'react-audio-player-component';

export const Player = () => {
  return (
    <AudioPlayer 
      src="https://www.dropbox.com/scl/fi/jjisw8w4x9mtp19tjjojf/Can-We-Go-Back-Feat.-T3-PROD-MIX.wav?rlkey=w4ahrg0h3e15aun76kwg6sfc3&dl=0"
      minimal={false}
      width={350}
      trackHeight={75}
      barWidth={1}
      gap={1}

      visualise={true}
      backgroundColor="#FFF8DE"
      barColor="#C1D0B5"
      barPlayedColor="#99A98F"

      skipDuration={2}
      showLoopOption={true}
      showVolumeControl={true}

      // seekBarColor="purple"
      // volumeControlColor="blue"
      // hideSeekBar={true}
      // hideTrackKnobWhenPlaying={true}
    />
  )
}