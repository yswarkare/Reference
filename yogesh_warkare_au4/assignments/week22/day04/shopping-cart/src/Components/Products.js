import React, {Component} from "react";
import ProductsTable from "./Products_Table"

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            className: "products",
            products: [],
            cart: []
        }
    }

    componentWillMount = () => {
        let productsCopy = this.props.products
        this.setState({
            products: productsCopy,
            cart: this.props.cart
        })
    }

    addCartToProducts(cartCopy){
        this.setState({
            cart: cartCopy
        }, (()=>{this.props.getCartFromProducts(this.state.cart)}))
    }

    render () {
        console.log("State in Products => " + this.props)
        console.log("State in Products => " + this.state)
        return (
            <div className="products">
                <ProductsTable products={this.state.products} cart={this.state.cart} className={this.state.className} getCartArray={(cartCopy)=>{this.addCartToProducts(cartCopy)}} />
            </div>
        )
    }
}

export default Products;