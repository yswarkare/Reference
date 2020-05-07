import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { sendProductId } from "../../Redux/Actions/productActions";


const withProductPageHOC = (WrappedProductPage) => {
    
    class withProductPageHOC extends Component {

        componentDidMount = () => {
            this.props.sendProductId(this.props.match.params.id)
        }

        render() {
            console.log(this.props.match.params.id)
            
            return (
                <div>
                    <WrappedProductPage product={this.props.product} user={this.props.user} loginStatus={this.props.loginStatus}></WrappedProductPage>
                </div>
            );
        }
    }
    
    
    withProductPageHOC.propTypes = {
        products: PropTypes.object.isRequired,
        product: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        loginStatus:  PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        sendProductId: PropTypes.func.isRequired,
    };
    
    const mapStateToProps = (state) => {
        return {
            product: state.products.productObject,
            products: state.products.products,
            user: state.users.user,
            loginStatus: state.users.loginStatus
        }
    }
    
    return connect(mapStateToProps, { sendProductId })(withProductPageHOC);
}

export default withProductPageHOC;