import React, { Component, Fragment } from "react";

class ListItem01 extends Component {
    
    constructor () {
        super()
        this.state = {
            switch: false
        }
    }
    
    onClickChangeState = () => {
        let toggleSwitch = !this.state.switch;
        this.setState((state)=>{
            return state.switch = toggleSwitch
        });
        console.log("clicked");
    } 

    render () {
        return (
            <Fragment>
                <li className="list-group-item m-1" onClick={()=>{this.onClickChangeState()}}>{`${this.props.itemData}`}</li>
            </Fragment>
        )
    }
}

export default ListItem01;