import './App.css';
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";

function App() {
   // HEROKU URL for your backend
   const URL = "https://mangomusic-backend.herokuapp.com/";

  return (
    <div className="App">
      
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/music" element={<Music URL={URL}/>} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
