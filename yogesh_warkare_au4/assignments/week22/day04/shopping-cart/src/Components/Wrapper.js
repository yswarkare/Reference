import React, {Component, Fragment} from "react";
import Cart from "./Cart";
import Products from "./Products"

class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                name: "Grapes",
                quantity: "1 kg",
                price: "60"
                },{
                name: "Mangos",
                quantity: "1 kg",
                price: "70"
                },{
                name: "Oranges",
                quantity: "1 kg",
                price: "40"
                },{
                name: "Kiwi",
                quantity: "1 kg",
                price: "140"
                },{
                name: "Apples",
                quantity: "1 kg",
                price: "100"
                },{
                name: "Strawberries",
                quantity: "1 kg",
                price: "120"
                },{
                name: "Water Melon",
                quantity: "1 kg",
                price: "20"
                },
            ],
            cart: []
        }
    }

    addCartToWrapper = (cartCopy) => {
        this.setState({
            cart: cartCopy
        })
    }

    render () {
        return (
            <Fragment>
                <Products products={this.state.products} cart={this.state.cart} getCartFromProducts={(cartCopy)=>{this.addCartToWrapper(cartCopy)}} />
                <Cart products={this.state.products} cart={this.state.cart}/>
            </Fragment>
        )
    }
}

export default Wrapper;

// cart={this.state.cart} sendCartToWrapper={(cartCopy)=>{this.addCartToWrapper(cartCopy)}}