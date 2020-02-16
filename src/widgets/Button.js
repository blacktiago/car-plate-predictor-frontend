import React, { Component } from 'react';
import '../widgets/Button.css';

class Button extends Component {

    render() {
        return (
        <button className="app-button">{this.props.label}</button>
        )
    }
}

export default Button;