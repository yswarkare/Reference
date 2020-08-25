import React, {Component} from "react";

class City extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: ""
        }
    }

    componentWillMount = ()=>{
        this.setState({
            city: this.props.city
        })
    }

    handleCityChange = (city)=>{
        this.setState({
            city: city
        }, ()=>{this.props.getCity(this.state.city)});
    }

    render(){
        
        console.log("State in City => "+this.state.city)
        return(
            <div className="city">
                <input onChange={(e)=>{this.handleCityChange(e.target.value)}} value={this.state.city} placeholder="City"/>
            </div>
        )
    }
}

export default City;