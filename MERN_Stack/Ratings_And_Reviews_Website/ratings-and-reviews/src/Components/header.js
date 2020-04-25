import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";
import UserIcon from "./userIcon"

class Header extends Component {
    render(){
        return(
            <div className="header">
                <Link to="/"><h1>Ratings and Reviews</h1></Link>
                <ul className="header-list">
                    <Link to="/search-products" ><li><SearchBox></SearchBox></li></Link>
                    <li><UserIcon></UserIcon></li>
                </ul>
            </div>
        )
    }
}

export default Header;