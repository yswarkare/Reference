import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div>
                <ul className="header-list">
                    <Link to="/"><li className="header-list-items">Home</li></Link>
                    <Link to="/sell"><li className="header-list-items">Sell</li></Link>
                    <Link to="/buy"><li className="header-list-items">Buy</li></Link>
                </ul>
            </div>
            
        );
    }
}

export default Header;