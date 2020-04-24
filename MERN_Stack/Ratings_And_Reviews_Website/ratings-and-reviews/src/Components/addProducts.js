import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from "react-router-dom";

class AddProducts extends Component {


    setProductName = (productName) => {
        this.dispatch({
            type: "Set_Product_Name",
            payload: productName
        })
    }

    setBrandName = (brandName) => {
        this.dispatch({
            type: "Set_Brand_Name",
            payload: brandName
        })
    }

    setProductDescription = (productDescription) => {
        this.props.dispatch({
            type: "Set_Product_Description",
            payload: productDescription
        })
    }

    setProductCategory = (category) => {
        this.props.dispatch({
            type: "Set_Product_Category",
            payload: category
        })
    }

    setProductSubCategory = (subCategory) => {
        this.props.dispatch({
            type: "Set_Product_Sub_Category",
            payload: subCategory
        })
    }

    setProductSubSubCategory = (subSubCategory) => {
        this.props.dispatch({
            type: "Set_Product_Sub_Category",
            payload: subSubCategory
        })
    }

    addProduct = () => {
        this.dispatch({
            type: "Add_Product"
        })
    }

    render(){
        return(
            <div className="add-products-container">
                <div className="add-product">
                    <TextField onChange={(e)=>{this.setProductName(e.target.value)}} type="text" label="Product Name" variant="outlined" />
                    <TextField onChange={(e)=>{this.setBrandName(e.target.value)}} type="text" label="Brand Name" variant="outlined" />
                    <TextareaAutosize onChange={(e)=>{this.setProductDescription(e.target.value)}} rowsMin={3} aria-label="Product Description" placeholder="Product Description" />
                    <FormControl>
                        <InputLabel>Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.setProductCategory(e.currentTarget.value)}} variant="outlined" >
                        <option aria-label="Category" value="" />
                        <option>Category</option>
                        <option>Ten</option>
                        <option>Twenty</option>
                        <option>Thirty</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Sub-Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.setProductSubCategory(e.currentTarget.value)}} variant="outlined" >
                        <option aria-label="Category" value="" />
                        <option>Category</option>
                        <option>Ten</option>
                        <option>Twenty</option>
                        <option>Thirty</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Sub-Sub-Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.setProductSubSubCategory(e.currentTarget.value)}} variant="outlined" >
                        <option aria-label="Category" value="" />
                        <option>Category</option>
                        <option>Ten</option>
                        <option>Twenty</option>
                        <option>Thirty</option>
                        </Select>
                    </FormControl>
                    
                    <Link to={this.props.loginStatus.loginRedirect}>
                        <Button onClick={()=>{this.addProduct()}} variant="contained" color="primary">
                            Add Product
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
        products: state.products,
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);