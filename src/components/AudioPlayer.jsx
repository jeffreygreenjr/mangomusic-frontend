import React, { useState, useEffect, useRef } from 'react';
import '../styles/AudioPlayer.css'

import AudioControls from './AudioControls';

function AudioPlayer(props) {

    // STATE
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [tracks, setTracks] = useState(props.tracks);
    // console.log(props.tracks)

    const { trackName, artistName, artworkUrl100, previewUrl } = props.tracks[trackIndex] || {};
    // console.log(trackIndex)
    // console.log(trackName)
    // console.log(previewUrl)
    

    // REFS
    const audioRef = useRef(new Audio(previewUrl));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1)
        }
    }

    const toNextTrack = () => {
        if (trackIndex < tracks.length -1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0)
        }
    }

    const startTimer = () => {
        // CLEAR ANY TIMERS ALREADY RUNNING
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime)
            }
        }, [1000])
    }

    const onScrub = (value) => {
        // CLEAR ANY TIMERS ALREADY RUNNING
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime)
    }

    const onScrubEnd = () => {
        if(!playing) {
            setPlaying(true);
        }
        startTimer();
    }

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;


    useEffect(() => {
        if (playing) {
            audioRef.current.play();
            startTimer()
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause()
        }
    }, [playing])

    useEffect(() => {
        // PAUSE AND CLEAN UP ON UNMOUNT
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current)
        }
    }, [])

    // HANDLE SETUP WHEN CHANGING TRACKS
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(previewUrl);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setPlaying(true);
            startTimer();
        } else {
            // SET THE ISREADY REF AS TRUE FOR THE NEXT PASS
            isReady.current = true;
        }
    }, [trackIndex])


  return (
    <div className="audio-player">
        <div className="audio-player-content">
            <div className="track-artwork">
                <img 
                    className="artwork"
                    src={artworkUrl100}
                    alt={`track artwork for ${trackName} by ${artistName}`}
                />
                <div className="track-info">
                    <AudioControls
                        playing={playing}
                        onPrevClick={toPrevTrack}
                        onNextClick={toNextTrack}
                        onPlayPauseClick={setPlaying}
                    />
                    <input
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="progress"
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        style={{ background: trackStyling }}
                    />
                    <h2 className="songtitle">{trackName}</h2>
                    <h3 className="artist">{artistName}</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AudioPlayer