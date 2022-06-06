import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";

// WRAP APP INSIDE ROUTER TO ENABLE USING ROUTE
const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
