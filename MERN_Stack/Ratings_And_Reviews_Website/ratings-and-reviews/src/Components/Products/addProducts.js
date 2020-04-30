import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, TextField, TextareaAutosize, Select, InputLabel, FormControl, Tooltip, IconButton } from '@material-ui/core/';
import { Container, Row, Col, Table } from "reactstrap";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import { setProductName,
    setBrandName,
    setProductImage,
    setProductDescription,
    setProductCategory,
    setProductSubCategory,
    setProductSubSubCategory,
    addProduct,
    editProduct,
    deleteProduct,
    updateProduct } from "../../Redux/Actions/productActions";

class AddProducts extends Component {


    onChangeSetProductName = (productName) => {
        this.props.setProductName(productName)
    }

    onChangeSetBrandName = (brandName) => {
        this.props.setBrandName(brandName)
    }

    onChangeSetProductImage = (image) => {
        this.props.setProductImage(image)
    }

    onChangeSetProductDescription = (productDescription) => {
        this.props.setProductDescription(productDescription)
    }

    onChangeSetProductCategory = (category) => {
        this.props.setProductCategory(category)
    }

    onChangeSetProductSubCategory = (subCategory) => {
        this.props.setProductSubCategory(subCategory)
    }

    onChangeSetProductSubSubCategory = (subSubCategory) => {
        this.props.setProductSubSubCategory(subSubCategory)
    }

    onClickAddProduct = () => {
        let product = {
            product: this.props.products.product,
        }
        if (this.props.products.editProduct === true){
            this.props.updateProduct(product);
        } else {
            this.props.addProduct(product)
        }
    }

    onClickEditProduct = (index) => {
        this.props.editProduct(index);
    }

    onClickDeleteProduct = (index, product) => {
        let uProduct = {
            product: product,
            index: index
        }
        this.props.deleteProduct(uProduct)
    }

    render(){
        return(
            <div className="add-products-container">
                <Container className="add-product">
                    <Row>
                    <Col>
                    <TextField onChange={(e)=>{this.onChangeSetProductName(e.target.value)}} value={this.props.products.product.productName} type="text" label="Product Name" variant="outlined" />
                    </Col>
                    <Col>
                    <TextField onChange={(e)=>{this.onChangeSetBrandName(e.target.value)}} value={this.props.products.product.brandName} type="text" label="Brand Name" variant="outlined" />
                    </Col>
                    <Col>
                    <TextField onChange={(e)=>{this.onChangeSetProductImage(e.target.value)}} value={this.props.products.product.image} type="text" label="Image URL" variant="outlined" />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <TextareaAutosize onChange={(e)=>{this.onChangeSetProductDescription(e.target.value)}} value={this.props.products.product.productDescription} rowsMin={3} aria-label="Product Description" className="add-description" placeholder="  Product Description" />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <FormControl>
                        <InputLabel>&nbsp;&nbsp;Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.onChangeSetProductCategory(e.target.value)}} value={this.props.products.product.category} variant="outlined" >
                            <option></option>
                        {this.props.categories.categories.map((category, index)=>{
                            return (
                                <option key={index} value={category._id}>{category.categoryName}</option>
                            )
                        })}
                        </Select>
                    </FormControl>
                    </Col>
                    <Col>
                    <FormControl>
                        <InputLabel>&nbsp;&nbsp;Sub-Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.onChangeSetProductSubCategory(e.target.value)}} value={this.props.products.product.subCategory} variant="outlined" >
                        <option aria-label="Sub Category" value="" />
                        {this.props.subCategories.subCategories.map((subCategory, index)=>{
                            return (
                                <option key={index} value={subCategory._id}>{subCategory.subCategoryName}</option>
                            )
                        })}
                        </Select>
                    </FormControl>
                    </Col>
                    <Col>
                    <FormControl>
                        <InputLabel>&nbsp;&nbsp;Sub-Sub-Category</InputLabel>
                        <Select type="text" native onChange={(e)=>{this.onChangeSetProductSubSubCategory(e.target.value)}} value={this.props.products.product.subSubCategory} variant="outlined" >
                        <option aria-label="Sub Sub Category" value="" />
                        {this.props.subSubCategories.subSubCategories.map((subSubCategory, index)=>{
                            return (
                                <option key={index} value={subSubCategory._id}>{subSubCategory.subSubCategoryName}</option>
                            )
                        })}
                        </Select>
                    </FormControl>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                this.props.products.editProduct === false &&
                                <Button onClick={()=>{this.onClickAddProduct()}} variant="contained" color="primary">
                                    Add Product
                                </Button>
                            }
                            {
                                this.props.products.editProduct === true &&
                                <Button onClick={()=>{this.onClickAddProduct()}} variant="contained" color="primary">
                                    Save Product
                                </Button>
                            }
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Brand Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Sub-Category</th>
                                <th>Sub-Sub-Category</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.products.products.map((product, index)=>{
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td><img href={product.image} className="product-image-in-list" alt=""/></td>
                                        <td>{product.productName}</td>
                                        <td>{product.brandName}</td>
                                        <td>{product.productDescription}</td>
                                        <td>{product.category}</td>
                                        <td>{product.subCategory}</td>
                                        <td>{product.subSubCategory}</td>
                                        <td>
                                        <Tooltip title="Edit">
                                            <IconButton onClick={()=>{this.onClickEditProduct(index)}}>
                                                <EditIcon></EditIcon>
                                            </IconButton>
                                        </Tooltip>
                                        </td>
                                        <td>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={()=>{this.onClickDeleteProduct(index, product)}}>
                                                <DeleteIcon></DeleteIcon>
                                            </IconButton>
                                        </Tooltip>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

AddProducts.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    loginStatus: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    subCategories: PropTypes.object.isRequired,
    subSubCategories: PropTypes.object.isRequired,
    setProductName: PropTypes.func.isRequired,
    setBrandName: PropTypes.func.isRequired,
    setProductImage: PropTypes.func.isRequired,
    setProductDescription: PropTypes.func.isRequired,
    setProductCategory: PropTypes.func.isRequired,
    setProductSubCategory: PropTypes.func.isRequired,
    setProductSubSubCategory: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus,
        products: state.products,
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories
    };
}

export default connect(mapStateToProps, { setProductName,
    setBrandName,
    setProductImage,
    setProductDescription,
    setProductCategory,
    setProductSubCategory,
    setProductSubSubCategory,
    addProduct,
    editProduct,
    deleteProduct,
    updateProduct })(AddProducts);