import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from '../components/AudioPlayer';

function Music(props) {

    // CREATE STATE TO HOLD MUSIC
    const [music, setMusic] = useState([]);

    // FUNCTION TO MAKE API CALL
    const getMusicData = async () => {
        const res = await fetch(props.URL + "music")
        const data = await res.json()
        setMusic(data[0].results)
        console.log(data[0].results[0].trackName)
    }

    // MAKE INITIAL CALL FOR DATA INSIDE A USEEFFECT, SO IT ONLY RUNS ONCE ON COMPONENT LOAD
    useEffect(() => {
        getMusicData()
     }, [props.URL]); 

    // // PLAY MEDIA   
    // useState = {
    //     play: false,
    //     pause: true
    // };

    // audio = new Audio(this.props.url)

    // togglePlay = () => {
    //     this.setState({ play: !this.state.play }, () => {
    //         this.state.play ? this.audio.play() : this.audio.pause();
    //     })
    // }



    // CREATE A FUNCTION TO THAT WILL RETURN JSX
    const loaded = () => {
        return music.map((musicsong, idx) => (
            <div className="MusicList" key={idx}>
                <h1>{musicsong.artistName}</h1>
                <h2>{musicsong.trackName}</h2>
                <img src={musicsong.artworkUrl100} alt={musicsong.trackName} />
                <div>
                    {/* <button onClick={this.togglePlay}>
                        <a href="{musicsong.previewUrl}">Preview Song</a> 
                    </button> */}
                    <a href={musicsong.previewUrl}>Preview Song</a>
                    
                    <ReactAudioPlayer src={musicsong.previewUrl} />                    
                </div>
            </div>
        ))
    }
    return music ? loaded() : <h1>Loading Music...</h1>
}

export default Music