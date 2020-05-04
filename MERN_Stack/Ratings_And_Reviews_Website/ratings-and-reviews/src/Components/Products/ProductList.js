import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class ProductList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


ProductList.propTypes = {
    products: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {})(ProductList);