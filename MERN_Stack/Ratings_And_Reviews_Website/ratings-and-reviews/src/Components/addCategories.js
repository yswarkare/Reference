import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

class AddCategories extends Component {

    setCategory =(categoryName) => {
        this.props.dispatch({
            type: "Set_Category_Name",
            payload: categoryName
        })
    }

    addCategory =() => {
        this.props.dispatch({
            type: "Add_Category_Name"
        })
    }

    setSubCategory =(subCategoryName) => {
        this.props.dispatch({
            type: "Set_Sub_Category_Name",
            payload: subCategoryName
        })
    }

    addSubCategory =() => {
        this.props.dispatch({
            type: "Add_Sub_Category_Name"
        })
    }

    setSubSubCategory =(subSubCategoryName) => {
        this.props.dispatch({
            type: "Set_Sub_Sub_Category_Name",
            payload: subSubCategoryName
        })
    }

    addSubSubCategory =() => {
        this.props.dispatch({
            type: "Add_Sub_Sub_Category_Name"
        })
    }


    render() {
        return (
            <div className="add-categories-container">
                <div className="add-categories">
                    <TextField onChange={(e)=>{this.setCategory(e.target.value)}} type="text" label="Category Name" variant="outlined" />
                    <Link to={this.props.loginStatus.loginRedirect}>
                        <Button onClick={()=>{this.addCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </Link>
                </div>
                <div className="sub-categories">
                    <TextField onChange={(e)=>{this.setSubCategory(e.target.value)}} type="text" label="Sub-Category Name" variant="outlined" />
                    <Link to={this.props.loginStatus.loginRedirect}>
                        <Button onClick={()=>{this.addSubCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </Link>
                </div>
                <div className="sub-sub-categories">
                    <TextField onChange={(e)=>{this.setSubSubCategory(e.target.value)}} type="text" label="Sub-Sub-Category Name" variant="outlined" />
                    <Link to={this.props.loginStatus.loginRedirect}>
                        <Button onClick={()=>{this.addSubSubCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus.registrationRedirect,
        categories: state.categories
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategories);