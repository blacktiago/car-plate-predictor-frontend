import React, { Component } from 'react';
import '../widgets/Common.css';

class DateInput extends Component {

    render() {
        return (
            <input className="baseInput" type="date"
                placeholder={this.props.placeholder}/>
        )
    }
}

export default DateInput;
