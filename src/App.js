import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";



function App() {
   // HEROKU URL for your backend
   const URL = "https://mangomusic-backend.herokuapp.com/";

    const [songs, setSongs] = useState([])
    const [playing, setPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState([])

  return (
    <div className="App">
        <div className="ContentContainer">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/music" element={<Music URL={URL}/>} />
            <Route path="/about" element={<About URL={URL} />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
