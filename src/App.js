import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Projects";

function App() {
   // HEROKU URL for your backend
   const URL = "http://localhost:4000/";

  return (
    <div className="App">
      
      <Header />
      
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/music">
          <Music URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
