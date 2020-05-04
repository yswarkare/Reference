import React, { Component } from 'react'
import { Fragment } from "react"
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Tooltip, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete"
import UpdateIcon from "@material-ui/icons/Update"
import { Row, Col, Input } from 'reactstrap';
import { updateCategoryName, deleteCategory, editCategory } from "../../Redux/Actions/categoriesActions";


class Category extends Component {

    state = {
        edit: false,
        categoryName: ""
    }

    onChangeSetCategoryName = (categoryName) => {
        this.setState({
            categoryName: categoryName
        })
    }

    onClickEditCategoryName = () => {
        let index = this.props.index;
        this.props.editCategory(index);
        this.setState({
            edit: true,
            categoryName: this.props.category.categoryName
        })
    }

    onClickUpdateCategoryName = () => {
        let category = {
            _id: this.props.category._id,
            categoryName: this.state.categoryName,
            index: this.props.index
        }
        this.props.updateCategoryName(category);
        this.setState({
            edit: false
        })
    }

    onClickDeleteCategory = () => {
        let category = {
            _id: this.props.category._id,
            categoryName: this.state.categoryName,
            index: this.props.index
        }
        this.props.deleteCategory(category);
    }

    render() {
        return (
            <Fragment>
                <Row id="categories-table-body">
                    <Col scope="row">{this.props.index}</Col>
                    {
                        this.state.edit === false && 
                        <Col>{this.props.category.categoryName}</Col>
                    }
                    {
                        this.state.edit === true &&
                        <Input onChange={(e)=>{this.onChangeSetCategoryName(e.target.value)}} value={this.state.categoryName} type="text"/>
                    }
                    <Col>
                    {
                        this.state.edit === false && 
                        <Tooltip title="Edit">
                            <IconButton onClick={()=>{this.onClickEditCategoryName()}}>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        this.state.edit === true &&
                        <Tooltip title="Update">
                            <IconButton onClick={()=>{this.onClickUpdateCategoryName()}}>
                                <UpdateIcon></UpdateIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    </Col>
                    <Col>
                        <Tooltip title="Delete">
                            <IconButton onClick={()=>{this.onClickDeleteCategory()}}>
                                <DeleteIcon></DeleteIcon>
                            </IconButton>
                        </Tooltip>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

Category.propTypes = {
    updateCategoryName: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { updateCategoryName, deleteCategory, editCategory })(Category);