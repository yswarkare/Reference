import React, { Component } from "react";
import { connect } from "react-redux";
import Cities from "./Cities"
import Categories from "./Categories"

class List extends Component{      

    citiesChange = () => {
        this.props.dispatch({
            type: "Filter_Cities"
        })
    }

    render () {
       console.log("output props => ", this.props.productList)
        return (
            <div class="output">
                <div class="filters">
                    <Cities class="o-cities" onChange={() => this.citiesChange()}/>
                    <Categories class="o-categories" />
                    <input class="o-price" type="number" />
                </div>
                <ul>
                    {this.props.productList && this.props.productList.map((product, index)=>{
                        return(
                            <li key = {index}>{product.name}, {product.category}, {product.sellingPrice}, {product.condition}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product.productList,
        cities: state.cities,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);