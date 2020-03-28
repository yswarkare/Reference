import React, {Component} from "react";
import Input from "./Input";
import City from "./City"

class Wrapper extends Component{

    render(){
        return(
            <div className="wrapper">
                <Input userName="" emailID="" />
                <City/>
                <div className="save-button">
                    <button >Save</button>
                </div>
            </div>
        )
    }
}

export default Wrapper;