import React, {Component} from "react";
import List from "./List";

class Output extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            cities: []
        }
    }

    componentWillMount = ()=>{
        this.setState({
            users: this.props.users,
            cities: this.props.cities
        })
    }

    render () {
        console.log("Output State => "+ this.state.users)
        return (
            <div className="output">
                <div className="user-details">
                    <List className="users-list" users={this.state.users} cities={this.state.cities}/>
                </div>
                <div className="cities">
                    <List className="cities-list" users={this.state.users} cities={this.state.cities}/>
                </div>
            </div>
        )
    }
}

export default Output;

