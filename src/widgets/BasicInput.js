import React, { Component } from 'react';
import '../widgets/Common.css';

class BasicInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = { requiredError: false, formatError: false };
    }

    handleChange(event) {
        this.setState({ requiredError: false, formatError: false });
        this.value = event.target.value;
        this.props.parent.onChangeField(this.props.id, this.value);
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
        } else if (this.state.formatError) {
            boxClass = boxClass.concat(" requiredLine");
            requiredMessage = <div className="errorMessage"><label>Invalid format ej: PKL 2245</label></div>;
        }
        return (
            <div className="controlContainer">
                <input className={boxClass} type="text"
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus} />
                {requiredMessage}
            </div>
        )
    }

    validate() {
        if (this.value) {
            if (this.value && this.props.pattern) {
                let regExpPattern = new RegExp("^" + this.props.pattern)
                if (!regExpPattern.test(this.value)) {
                    this.setState({ formatError: true });
                    return false;
                }
            }
        } else if (this.props.required) {
            this.setState({ requiredError: true });
            return false;
        }
        return true;
    }
}

export default BasicInput;