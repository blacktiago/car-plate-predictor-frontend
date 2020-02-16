import React, { Component } from 'react';
import logo from './logo.svg';
import BaseInput from './widgets/BasicInput';
import DateInput from './widgets/DateInput';
import TimeInput from './widgets/TimeInput';
import Button from './widgets/Button';
import Prediction from './widgets/Prediction';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plate: "",
      date: "",
      time: ""
    };
    this.dataHolders = {};
  }

  render() {
    this.dataHolders = [];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>We know if are allowed to drive.</p>
        </header>
        <div className="App-result">
          <Prediction ref={c => (this.outcomeBox = c)}/>
        </div>
        <div className="App-body">
          <div className="dataContainer">
            <BaseInput placeholder="Plate number" parent={this} value={this.state.plate} id="plate"
              pattern="[A-Za-z]{3} [0-9]{3,4}" required="true" ref={c => (this.dataHolders["plate"] = c)} />
            <DateInput parent={this} value={this.state.date} id="date" required="true" ref={c => (this.dataHolders["date"] = c)} />
            <TimeInput parent={this} value={this.state.time} id="time" required="true" ref={c => (this.dataHolders["time"] = c)} />
            <Button label="Predict" parent={this} />
          </div>
        </div>
      </div>
    );
  }

  onChangeField(fieldId, value) {
    let incomeData = {};
    incomeData[fieldId] = value;
    this.setState(incomeData);
  }

  executeAction() {
    var isValid = true;
    for (var property in this.dataHolders) {
      if (this.dataHolders.hasOwnProperty(property)) {
        if (isValid) {
          isValid = this.dataHolders[property].validate();
        } else {
          break;
        }
      }
    }
    if (isValid) {
      this.loadPrediction();
    }
  }

  loadPrediction() {

    var appInvoker = this;
    fetch(encodeURI('/predict?plate=' + this.state.plate
      + '&date=' + this.state.date
      + '&time=' + this.state.time))
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        appInvoker.outcomeBox.updateResult(jsonData);
      });
  }
}

export default App;
