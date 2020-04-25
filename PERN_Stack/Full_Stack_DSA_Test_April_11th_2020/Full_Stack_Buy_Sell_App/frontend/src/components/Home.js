import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render () {
        return (
            <div className="home-page">
                <Link to="/buy">
                    <div className="home-page-items">
                        <h2>Buy</h2> 
                    </div>
                </Link>
                <Link to="/sell">
                    <div className="home-page-items">
                        <h2>Sell</h2>
                    </div>
                </Link>
            </div>
            
        );
    }
}

export default Home;