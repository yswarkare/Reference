import React, { Component, Fragment } from 'react';
import { TextField } from "@material-ui/core";

class TextInput extends Component {
    constructor(props) {
        super()
        this.state = {
            defaultValue: "Default Value",
            inputType: "Input Label",
            helperText: "Helper Text"
        }
    }
        
    componentDidMount = () => {
        this.setState({
            defaultValue: this.props.defaultValue,
            inputType: this.props.inputType,
            helperText: this.props.helperText
        })
    }

    sendTextValue = (text) => {
        this.setState({
            defaultValue: text
        }, this.props.setInputValue(text))
    }

    render() {
        return (
            <Fragment>
                <TextField
                    className="text-input"
                    id="outlined-helperText"
                    label={this.state.inputType}
                    defaultValue={this.props.defaultValue}
                    helperText={this.props.helperText}
                    onChange={(e)=>{this.sendTextValue(e.target.value)}}
                    variant="outlined"/>
            </Fragment>
        );
    }
}

export default TextInput;