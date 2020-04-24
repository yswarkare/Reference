import React, { Component } from "react";
import { connect } from "react-redux";
import AddCategories from "./addCategories";
import AddProducts from "./addProducts";

class AdminDashboard extends Component {
    render(){
        return(
            <div className="admin-dashboard">
                <AddCategories></AddCategories>
                <AddProducts></AddProducts>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus.registrationRedirect,
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories,
        products: state.products
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);