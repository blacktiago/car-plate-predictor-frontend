import React, { Component } from 'react';
import sucessImg from './success.svg';
import failImg from './fail.svg';
import '../widgets/Prediction.css';

class Prediction extends Component {

    render() {
        var message;
        var imageSrc;
        var boxClass;
        if (this.state && this.state.prediction) {
            boxClass = 'visible-result';
            if (this.state.prediction.allowed) {
                imageSrc = sucessImg;
                message = 'Congrats, let\'s drive';
            } else {
                imageSrc = failImg;
                message = 'Sorry, take a buss';
            }
            //message = this.state.prediction.message;
        } else {
            boxClass = 'hidden-result';
        }
        return (
            <div className={boxClass}>
                <div class="item-container">
                    <img src={imageSrc} alt="resultado" className="image-result" />
                </div>
                <div>
                    <label className="label-result">{message}</label>
                </div>
            </div>
        )
    }

    updateResult(data) {
        this.setState({ prediction: data });
    }
}

export default Prediction;