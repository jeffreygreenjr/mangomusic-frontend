import React from 'react';
import { GiPlayButton, GiPauseButton, GiPreviousButton, GiNextButton } from 'react-icons/gi'

function AudioControls({ playing, onPlayPauseClick, onPrevClick, onNextClick }) {
  return (
    <div className="audio-controls">
        <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
        >
        <GiPreviousButton />
        </button>
        {playing ? (
        <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
        >
            <GiPauseButton />
        </button>
        ) : (
        <button
            type="button"
            className="play"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
        >
            <GiPlayButton />
        </button>
        )}
        <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
        >
        <GiNextButton />
        </button>
    </div>
  )
}

export default AudioControls