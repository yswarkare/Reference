import React, {Component} from "react";


class List extends Component {
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
        console.log("List State => "+ JSON.stringify(this.state.users))
        return (
            <div className="list-container">
                <ul className="list">
                    {this.props.className === "users-list" && this.state.users.map((user, index)=>{
                        return(
                            <li className="user-details-list" kay={index}>
                                <div>{user.userName}</div>
                                <div>{user.emailID}</div>
                                <div>{user.city}</div>
                            </li>
                        )
                    })}
                    {this.props.className === "cities-list" && this.state.cities.map((city, index)=>{
                        return(
                            <li kay={index}>
                                <div>{city}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List;

