import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    render () {
        return (
            <div>
                <ul className="header">
                    <Link to="/"><li className="header-list-item">Home</li></Link>
                    <Link to="/users"><li className="header-list-item">Users</li></Link>
                    <Link to="/products"><li className="header-list-item">Products</li></Link>
                    <Link to="/orders"><li className="header-list-item">Orders</li></Link>
                </ul>
            </div>
        )
    }
}

export default Header;