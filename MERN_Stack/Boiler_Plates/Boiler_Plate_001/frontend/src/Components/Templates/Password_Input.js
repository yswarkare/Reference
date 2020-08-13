import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


class PasswordInput extends Component {
    constructor(props) {
        super()
        this.state = {
            defaultValue: "password",
            showPassword: false,
            helperText: "Helper Text",
            error: null,
            helperClass: "MuiFormHelperText-root MuiFormHelperText-contained MuiFormHelperText-filled"
        }
    }

    componentDidMount = () => {
        this.setState({
            helperText: this.props.helperText,
            error: this.props.error
        })
    }
    
    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    handleChange = (password) => {
        this.setState({
            defaultValue: password
        }, this.props.onChange(password))
        if (this.props.error === true) {
            let helperClass = this.state.helperClass;
            
            helperClass = (helperClass, " error")
            this.setState({
                helperClass: helperClass
            })
        }
    }

    render() {
        return (
            <Fragment>
                <FormControl className="password" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.defaultValue}
                        onChange={(e) => {this.handleChange(e.target.value)}}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {this.handleClickShowPassword()}}
                            onMouseDown={(e) => {this.handleMouseDownPassword(e)}}
                            edge="end"
                            >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <p className={this.state.helperClass}>{this.props.helperText}</p>
                </FormControl>
            </Fragment>
        );
    }
}

export default PasswordInput;