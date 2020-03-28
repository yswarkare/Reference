import React, {Component} from "react";
import ProductsTable from "./Products_Table"

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            className: "products",
            products: []
        }
    }

    componentWillMount = () => {
        this.setState({
            products: this.props.products,
        })
    }

    render () {
        console.log("State in Products => " + this.props)
        console.log("State in Products => " + this.state)
        return (
            <div className="products">
                <ProductsTable products={this.state.products} className={this.state.className} />
            </div>
        )
    }
}

export default Products;