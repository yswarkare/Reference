import React, { Component } from "react";
import {Link} from "react-router-dom";

class Users extends Component{
    render () {
        return (
            <div>
                <p>Users Page</p>
                <ol className="user-list">
                    <Link to="/users/user1"><li className="user-list-item"><p>User 1</p></li></Link>
                    <Link to="/users/user2"><li className="user-list-item"><p>User 2</p></li></Link>
                    <Link to="/users/user3"><li className="user-list-item"><p>User 3</p></li></Link>
                    <Link to="/users/user4"><li className="user-list-item"><p>User 4</p></li></Link>                    
                </ol>
            </div>
        )
    }
}

export default Users;