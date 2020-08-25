import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories"
import Condition from "./Condition"
import Cities from "./Cities"

class Input extends Component {

    handleProductName = (productName) => {
        this.props.dispatch({
            type: "Set_Name",
            payload: productName
        });
    }

    handleSellingPrice = (price) => {
        this.props.dispatch({
            type: "Set_Selling_Price",
            payload: price
        });
    }

    handleSwitch(status){
        console.log("Switch " , status)
        this.props.dispatch({
            type: "Set_Bargain_Status",
            payload: status
        });
    }

    handleStatus(status){
        this.props.dispatch({
            type: "setStatus",
            payload: status
        });
    }

    addProductsToList = (productList)=> {
        this.props.dispatch({
            type: "Add_Products_To_List",
        });
    }

    render() {
        return (
            <div class="input">
                <input class="name" onChange={(e) => this.handleProductName(e.target.value)} 
                value={this.props.product.name} type="text" />

                <Categories class="categories"/>

                <Condition class="condition" />

                <input class="price" onChange={(e) => this.handleSellingPrice(e.target.value)} value={this.props.product.sellingPrice} type="number"/>
            
                <label class="switch">
                    <input class="switch-input" type="checkbox" onChange={(e) => this.handleSwitch(e.target.value)}/>
                    <span class="switch-label" data-on="On" data-off="Off"></span> 
	                <span class="switch-handle"></span> 
                </label>

                <Cities class="cities" />

                <button onClick={() => this.addProductsToList()}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);