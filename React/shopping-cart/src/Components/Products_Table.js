import React, {Component} from "react";

class ProductsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            className: "",
            products: [],
            cart: []
        }
    }

    componentWillMount = () => {
        this.setState({
            className: this.props.className,
            products: this.props.products,
            //cart: this.props.cart
        })
    }

    addProductToCart = (index) => {
        let cartCopy = this.state.cart;
        cartCopy.push(this.state.products[index]);
        this.setState({
            cart: cartCopy
        })
    }

    removeProductFromCart = (index) => {
        let cartCopy = this.state.cart;
        cartCopy.splice(index, 1);
        this.setState({
            cart: cartCopy
        })
    }

    render () {
        console.log("Props in Products Table => " + JSON.stringify(this.props))
        console.log("State in Products Table => " + JSON.stringify(this.state))
        return (
            <table className="products-table">
                <tr className="products-table-head">
                    <th>Fruit</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>                
                {this.state.className === "products" && this.state.products.map((product,index)=>{
                    return(
                        <tr className="products-table-body" kay={index}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td><button className="button" onClick={()=>{this.addProductToCart(index)}}>Add</button></td>
                        </tr>
                    )
                })}
                {this.state.className === "cart" && this.state.cart.map((product, index)=>{
                    return(
                        <tr className="products-table-body" kay={index}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td><button className="button" onClick={()=>{this.removeProductFromCart(index)}}>Remove</button></td>
                        </tr>
                    )
                })}
            </table>
        )
    }
}

export default ProductsTable;


//, ()=> {this.props.sendCartTOCart(this.state.cart)}