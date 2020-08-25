import React, { Component } from "react";

class Product extends Component {
    render () {
        return (
            <div><p>Product Page with Product ID : { this.props.match.params.productID }</p></div>
        )
    }
}

export default Product;