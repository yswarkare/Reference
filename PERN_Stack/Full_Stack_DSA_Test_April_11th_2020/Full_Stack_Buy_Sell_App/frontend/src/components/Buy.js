import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Buy extends Component {

    componentDidMount = () => {
        axios.get("http://localhost:3010/product")
        .then((res)=>{this.props.dispatch({
            type: "Set_Products_Array",
            payload: res.data
        })}).catch((err=>console.log(err)));
        
        axios.get("http://localhost:3010/category")
        .then((res)=>{this.props.dispatch({
            type: "Set_Categories_Array",
            payload: res.data
        })}).catch((err=>console.log(err)));

        axios.get("http://localhost:3010/city")
        .then((res)=>{this.props.dispatch({
            type: "Set_Cities_Array",
            payload: res.data
        })}).catch((err=>console.log(err)));
    }

    filterProductCategory = (filterCategory) => {
        this.props.dispatch({
            type: "Filter_Category",
            payload: filterCategory
        })
    };

    filterMaximumPrice = (filterMaxPrice) => {
        this.props.dispatch({
            type: "Filter_Max_Price",
            payload: filterMaxPrice
        })
    };

    filterProductCity = (filterCity) => {
        this.props.dispatch({
            type: "Filter_City",
            payload: filterCity
        })
    };

    render () {
        return (
            <div className="buy-component">
                <div className="filters">
                    <select onChange={(e)=>{this.filterProductCategory(e.target.value)}} type="text" placeholder={this.props.product.productCategory} >
                        <option >All</option>
                        {this.props.categories.map((category, index)=>{
                            return(
                                <option key={index}>{category.category}</option>
                            )
                        })}
                    </select>
                    <input onChange={(e)=>{this.filterMaximumPrice(e.target.value)}} type="number" placeholder={this.props.product.sellingPrice} />
                    <select onChange={(e)=>{this.filterProductCity(e.target.value)}} type="text" placeholder={this.props.product.city} >
                        <option >All</option>
                        {this.props.cities.map((city, index)=>{
                            return(
                                <option key={index}>{city.city}</option>
                            )
                        })}
                    </select>
                </div>
                <table className="products-table">
                    <tr className="products-table-head">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Negotiability</th>
                        <th>Category</th>
                        <th>Seller</th>
                        <th>Contact Number</th>
                        <th>City</th>
                        <th>Cart</th>
                    </tr>                
                    {this.props.products.map((product,index)=>{
                        return(
                            <tr className="products-table-body" kay={index}>
                                <td>{product.productName}</td>
                                <td>{product.sellingPrice}</td>
                                <td>{product.negotiable}</td>
                                <td>{product.productCategory}</td>
                                <td>{product.sellerName}</td>
                                <td>{product.sellerContactNumber}</td>
                                <td>{product.city}</td>
                                <td><button className="buy-button" onClick={()=>{this.addProductToCart(index)}}>Add</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        product: state.products.product,
        categories: state.products.categories,
        cities: state.products.cities,
        editProduct: state.products.editProduct,
        id: state.products.editID,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);