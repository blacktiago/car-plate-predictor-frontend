import React, { Component } from 'react';
import '../widgets/Button.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const text = event.target.value;
        this.props.parent.executeAction(this.props.id, text);
    }

    render() {
        return (
        <button className="app-button" onClick={this.handleChange}>{this.props.label}</button>
        )
    }
}

export default Button;