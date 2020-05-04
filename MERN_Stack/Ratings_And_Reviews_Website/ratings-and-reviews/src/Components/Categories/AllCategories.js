import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addCategory, setCategory, getAllCategories } from "../../Redux/Actions/categoriesActions";
import { addSubCategory, setSubCategory, getAllSubCategories } from "../../Redux/Actions/subCategoriesActions";
import { addSubSubCategory, setSubSubCategory, getAllSubSubCategories } from "../../Redux/Actions/subSubCategoriesActions";
import CategoriesList from "./CategoriesList";


class AllCategories extends Component {

    componentDidMount = () => {
        let admin = {
            emailId: this.props.loginStatus.emailId,
            headers: this.props.headers
        }
        this.props.getAllCategories(admin);
        this.props.getAllSubCategories(admin);
        this.props.getAllSubSubCategories(admin)
    }

    onChangeSetCategory = (categoryName) => {
        this.props.setCategory(categoryName);
    }

    onClickAddCategory = () => {
        let category = {
            category: this.props.categories.category,
            user: this.props.user,
            headers: this.props.headers
        }
        this.props.addCategory(category)
    }

    onChangeSetSubCategory =(subCategoryName) => {
        this.props.setSubCategory(subCategoryName)
    }

    onClickAddSubCategory =() => {
        let subCategory = {
            subCategory: this.props.subCategories.subCategory,
            user: this.props.user,
            headers: this.props.headers
        }
        this.props.addSubCategory(subCategory)
    }

    onChangeSetSubSubCategory =(subSubCategoryName) => {
        this.props.setSubSubCategory(subSubCategoryName)
    }

    onClickAddSubSubCategory =() => {
        let subSubCategory = {
            subSubCategory: this.props.subSubCategories.subSubCategory,
            user: this.props.user,
            headers: this.props.headers
        }
        this.props.addSubSubCategory(subSubCategory)
    }


    render() {
        // console.log("Props in add categories => " + JSON.stringify(this.props) )
        return (
            <div className="add-categories-container">
                <div className="add-categories-input">
                    <div className="add-categories">
                        <TextField onChange={(e)=>{this.onChangeSetCategory(e.target.value)}} type="text" label="Category Name" variant="outlined" />
                        <Button onClick={()=>{this.onClickAddCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </div>
                    <div className="sub-categories">
                        <TextField onChange={(e)=>{this.onChangeSetSubCategory(e.target.value)}} type="text" label="Sub-Category Name" variant="outlined" />
                        <Button onClick={()=>{this.onClickAddSubCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </div>
                    <div className="sub-sub-categories">
                        <TextField onChange={(e)=>{this.onChangeSetSubSubCategory(e.target.value)}} type="text" label="Sub-Sub-Category Name" variant="outlined" />
                        <Button onClick={()=>{this.onClickAddSubSubCategory()}} variant="contained" color="primary">
                            Add
                        </Button>
                    </div>
                </div>
                <div className="categories-list-component" >
                    
                    <CategoriesList ></CategoriesList>
                    
                </div>
            </div>
        )
    }
}

AllCategories.propTypes = {
    loginStatus: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    subCategories: PropTypes.object.isRequired,
    subSubCategories: PropTypes.object.isRequired,
    headers: PropTypes.object.isRequired,
    getUserId: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    setSubCategory: PropTypes.func.isRequired,
    addSubCategory: PropTypes.func.isRequired,
    getAllSubCategories: PropTypes.func.isRequired,
    setSubSubCategory: PropTypes.func.isRequired,
    addSubSubCategory: PropTypes.func.isRequired,
    getAllSubSubCategories: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus,
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories,
        getUserId: state.users.getUserId,
        headers: state.users.headers
    };
}

export default connect(mapStateToProps,{ 
    setCategory, 
    addCategory,
    getAllCategories,
    setSubCategory, 
    addSubCategory,
    getAllSubCategories,
    setSubSubCategory,
    addSubSubCategory,
    getAllSubSubCategories })(AllCategories);