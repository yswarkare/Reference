import React, { Component } from "react";
import {Link} from "react-router-dom";

class Orders extends Component{
    render () {
        return (
            <div>
                <p>Orders Page</p>
                <ol className="order-list">
                    <Link to="/orders/order1"><li><p>Order 1</p></li></Link>
                    <Link to="/orders/order2"><li><p>Order 2</p></li></Link>
                    <Link to="/orders/order3"><li><p>Order 3</p></li></Link>
                    <Link to="/orders/order4"><li><p>Order 4</p></li></Link>                    
                </ol>
            </div>
        )
    }
}

export default Orders
;