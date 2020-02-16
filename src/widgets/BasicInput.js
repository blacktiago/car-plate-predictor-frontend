import React, { Component } from 'react';
import '../widgets/Common.css';

class BasicInput extends Component {

    render() {
        return (
            <input className="baseInput" type="text"
                placeholder={this.props.placeholder} />
        )
    }
}

export default BasicInput;