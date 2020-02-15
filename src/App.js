import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We know if are allowed to drive.
        </p>
      </header>
      <div className="App-body">
        <div className="dataContainer">
          <input className="baseInput" type="text"
            placeholder="Plate number"
            aria-label="Full-Width Text Field" />
          <input className="baseInput" type="date"
            placeholder="Date"
            aria-label="Full-Width Text Field" />
          <input className="baseInput" type="time"
            placeholder="Time"
            aria-label="Full-Width Text Field" />

          <button className="app-button">Predict</button>
        </div>
      </div>
    </div>
  );
}

export default App;
