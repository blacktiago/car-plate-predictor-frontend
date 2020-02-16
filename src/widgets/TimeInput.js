import React, { Component } from 'react';
import '../widgets/Common.css';

class TimeInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = { requiredError: false };
    }

    handleChange(event) {
        this.setState({ requiredError: false });
        this.value = event.target.value;
        this.props.parent.onChangeField(this.props.id, this.value );
    }

    handleFocus(event) {
        this.setState({ requiredError: false, formatError: false });
    }

    render() {
        let boxClass = "baseInput";
        let requiredMessage;
        if (this.state.requiredError) {
            boxClass = boxClass.concat(" requiredLine");
            requiredMessage = <div className="errorMessage"><label>Requerido</label></div>;
        }
        return (
            <div className="controlContainer">
                <input className={boxClass} type="time"
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus} />
                    {requiredMessage}
            </div>
        )
    }

    validate() {
        if (this.props.required && !this.value) {
            this.setState({ requiredError: true });
            return false;
        }
        return true;
    }
}

export default TimeInput;