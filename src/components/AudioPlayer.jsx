import React, { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';


function AudioPlayer() {

    const tracks = [
        {
            trackName: 'Upside Down',
            artistName: 'Jack Johnson',
            artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5e/5b/3d/5e5b3df4-deb5-da78-5d64-fe51d8404d5c/mzaf_13341178261601361485.plus.aac.p.m4a'
        }
    ]

    // STATE
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [playing, setPlaying] = useState(false);

    const { trackName, artistName, artworkUrl100, previewUrl } = tracks[trackIndex];

    // REFS
    const audioRef = useRef(new Audio(previewUrl));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const toPrevTrack = () => {
        console.log('TODO go to prev');
    }

    const toNextTrack = () => {
        console.log('TODO go to next');
    }

  return (
    <div className="audio-player">
        <h5>Mango Music Player</h5>
        <div className="track-info">
            <img 
                className="artwork"
                src={artworkUrl100}
                alt={`track artwork for ${trackName} by ${artistName}`}
            />
            <h2 className="songtitle">{trackName}</h2>
            <h3 className="artist">{artistName}</h3>
            <AudioControls
                playing={playing}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setPlaying}
            />
        </div>

    </div>
  )
}

export default AudioPlayer