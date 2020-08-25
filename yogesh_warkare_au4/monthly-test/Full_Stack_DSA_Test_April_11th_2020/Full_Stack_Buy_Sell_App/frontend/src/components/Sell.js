import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class Sell extends Component {

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

    changeProductName = (productName) => {
        this.props.dispatch({
            type: "Set_Product_Name",
            payload: productName
        })
    }

    changeSellingPrice = (sellingPrice) => {
        this.props.dispatch({
            type: "Set_Selling_Price",
            payload: sellingPrice
        })
    }

    changeNegotiable = (negotiable) => {
        this.props.dispatch({
            type: "Set_Negotiable",
            payload: negotiable
        })
    }

    changeProductCategory = (productCategory) => {
        this.props.dispatch({
            type: "Set_Product_Category",
            payload: productCategory
        })
    }

    changeSellerName = (sellerName) => {
        this.props.dispatch({
            type: "Set_Seller_Name",
            payload: sellerName
        })
    }

    changeSellerContactNumber = (sellerContactNumber) => {
        this.props.dispatch({
            type: "Set_Seller_Contact_Number",
            payload: sellerContactNumber
        })
    }

    changeProductCity = (city) => {
        this.props.dispatch({
            type: "Set_City",
            payload: city
        })
    }

    addProduct = () => {
        let product = this.props.product;
        console.log("sending product to backend",product)
        axios.post("http://localhost:3010/product", product)
        .then((res)=>{
            console.log(res.data);
        }).catch((err=>console.log(err)));
        this.props.dispatch({
            type: "Add_Product"
        })
    }

    render () {
        return (
            <div className="sell-component">
                <div className="add-product">
                    <input onChange={(e)=>{this.changeProductName(e.target.value)}} type="text" placeholder={this.props.product.productName} />
                    <input onChange={(e)=>{this.changeSellingPrice(e.target.value)}} type="number" placeholder={this.props.product.sellingPrice} />
                    <select onChange={(e)=>{this.changeNegotiable(e.target.value)}} type="number" placeholder={this.props.product.negotiable}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select onChange={(e)=>{this.changeProductCategory(e.target.value)}} type="text" placeholder={this.props.product.productCategory} >
                        {this.props.categories.map((category, index)=>{
                            return(
                                <option key={index}>{category.category}</option>
                            )
                        })}
                    </select>
                    <input onChange={(e)=>{this.changeSellerName(e.target.value)}} type="text" placeholder={this.props.product.sellerName} />
                    <input onChange={(e)=>{this.changeSellerContactNumber(e.target.value)}} type="number" placeholder={this.props.product.sellerContactNumber} />
                    <select onChange={(e)=>{this.changeProductCity(e.target.value)}} type="text" placeholder={this.props.product.city} >
                        {this.props.cities.map((city, index)=>{
                            return(
                                <option key={index}>{city.city}</option>
                            )
                        })}
                    </select>
                    <Link to="/buy"><button onClick={()=>this.addProduct()} >Submit</button></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        product: state.products.product,
        editProduct: state.products.editProduct,
        id: state.products.editID,
        categories: state.products.categories,
        cities: state.products.cities
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);