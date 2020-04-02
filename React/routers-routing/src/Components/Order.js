import React, { Component } from "react";

class Order extends Component {
    render () {
        return (
            <div><p>Order Page with Order ID : { this.props.match.params.orderID }</p></div>
        )
    }
}

export default Order;