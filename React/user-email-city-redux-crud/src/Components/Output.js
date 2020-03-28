import React, {Component} from "react";
import List from "./List"
class Output extends Component{

    render(){
        return(
            <div className="output">
                <div className="user-details">
                    <List className="users-list"/>
                </div>
                <div className="cities">
                    <List className="cities-list"/>
                </div>
            </div>
        )
    }
}

export default Output;