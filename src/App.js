import React from 'react';
import logo from './logo.svg';
import BaseInput from './widgets/BasicInput';
import DateInput from './widgets/DateInput';
import TimeInput from './widgets/TimeInput';
import Button from './widgets/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We know if are allowed to drive.</p>
      </header>
      <div className="App-body">
        <div className="dataContainer">
          <BaseInput placeholder="Plate number"/>
          <DateInput placeholder="Date"/>
          <TimeInput placeholder="Time"/>
          <Button label="Predict"/>
        </div>
      </div>
    </div>
  );
}

export default App;
