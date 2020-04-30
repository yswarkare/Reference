import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import Category from "./Category"
import SubCategory from "./SubCategory"
import SubSubCategory from "./SubSubCategory"


class CategoriesList extends Component {

    render() {
        return (
            <Fragment>
                <Container className="categories-table">
                    <Row id="categories-table">
                        <Col>#</Col>
                        <Col>Category Name</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {
                        this.props.categories.categories.map((category, index)=>{
                            return(
                                <Category category={category} index={index} key={index}></Category>
                            )
                        })
                    }
                </Container>
                <Divider></Divider>
                <Container className="categories-table">
                    <Row id="categories-table">
                        <Col>#</Col>
                        <Col>Sub-Category Name</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {
                        this.props.subCategories.subCategories.map((category, index)=>{
                            return(
                                <SubCategory subCategory={category} index={index} key={index}></SubCategory>
                            )
                        })
                    }
                </Container>
                <Divider></Divider>
                <Container className="categories-table">
                        <Row id="categories-table">
                            <Col>#</Col>
                            <Col>Sub-Sub-Category Name</Col>
                            <Col>Edit</Col>
                            <Col>Delete</Col>
                        </Row>
                    {
                        this.props.subSubCategories.subSubCategories.map((category, index)=>{
                            return(
                                <SubSubCategory subSubCategory={category} index={index} key={index}></SubSubCategory>
                            )
                        })
                    }
                </Container>
                

            </Fragment>
        )
    }
}

CategoriesList.propTypes = {
    categories: PropTypes.object.isRequired,
    subCategories: PropTypes.object.isRequired,
    subSubCategories: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories,
    }
}

// const WrappedCategoriesList = CategoriesListHOC(CategoriesList);

export default connect(mapStateToProps, {})(CategoriesList);