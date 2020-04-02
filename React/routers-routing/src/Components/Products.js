import React, { Component } from "react";
import {Link} from "react-router-dom";

class Products extends Component{
    render () {
        return (
            <div>
                <p>Products Page</p>
                <ol className="product-list">
                    <Link to="/products/product1"><li className="product-list-item"><p>Product 1</p></li></Link>
                    <Link to="/products/product2"><li className="product-list-item"><p>Product 2</p></li></Link>
                    <Link to="/products/product3"><li className="product-list-item"><p>Product 3</p></li></Link>
                    <Link to="/products/product4"><li className="product-list-item"><p>Product 4</p></li></Link>                    
                </ol>
            </div>
        )
    }
}

export default Products;