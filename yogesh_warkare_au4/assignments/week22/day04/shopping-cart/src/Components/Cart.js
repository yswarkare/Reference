import React, {Component} from "react";
import ProductsTable from "./Products_Table"

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            className: "cart",
            products: [],
            cart: []
        }
    }

    componentWillMount = () => {
        this.setState({
            products: this.props.products,
            cart: this.props.cart
        })
    }
    
    // addCartToCart = (cartChange)=> {
    //     this.setState({
    //         cart: cartChange
    //     }, ()=> this.props.sendCartToWrapper(this.state.cart))
    // }

    render () {
        console.log("State in Cart => " + this.props)
        console.log("State in Cart => " + this.state)
        return (
            <div className="cart">
                <ProductsTable products={this.state.products} className={this.state.className} cart={this.state.cart} />
            </div>
        )
    }
}

export default Cart;


//cart={this.state.cart} sendCartToCart={(cartChange)=>{this.addCartToCart(cartChange)}} 