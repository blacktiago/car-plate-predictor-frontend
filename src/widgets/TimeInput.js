import React, { Component } from 'react';
import '../widgets/Common.css';

class TimeInput extends Component {

    render() {
        return (
            <input className="baseInput" type="time"
                placeholder={this.props.placeholder}/>
        )
    }
}

export default TimeInput;