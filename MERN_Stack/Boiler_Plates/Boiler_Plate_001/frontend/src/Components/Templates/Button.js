import React, { Component, Fragment } from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class CustomButton extends Component {
    constructor(props) {
        super()
        this.state = {
            buttonName: "Button Name"
        }
    }

    componentDidMount = () => {
        this.setState({
            buttonName: this.props.buttonName
        })
    }

    buttonClick = () => {
        this.props.onClick()
    }
    
    render() {
        return (
            <Fragment>
                <Link to={this.props.redirect}>
                <Button 
                onClick={()=>{this.buttonClick()}}
                variant="contained" 
                color="primary">
                {this.state.buttonName}
                </Button>
                </Link>
            </Fragment>
        );
    }
}

export default CustomButton;  