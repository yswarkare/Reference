import React, { Component } from "react";
// import { connect } from "react-redux";


const withProductWrapper = WrappedProduct => {

    class withProductWrapper extends Component {

        render () {
            return (
                <div className="product-container">
                    {this.props.products.map((product, index)=>{
                        return(<WrappedProduct product={product} key={index}></WrappedProduct>)
                    })}
                </div>
            )
        }
    }

    return withProductWrapper;

}

export default withProductWrapper;