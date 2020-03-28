import React, {Component} from "react";

class Input extends Component{

    render(){
        return(
            <div className="input">
                <input  value="" placeholder="User Name" />
                <input value="" placeholder="Email ID" />
            </div>
        )
    }
}

export default Input;