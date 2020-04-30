import React, { Component } from 'react'
import { Fragment } from "react"
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { Row, Col, Input } from 'reactstrap';
import { updateSubCategoryName, deleteSubCategory } from "../../Redux/Actions/subCategoriesActions";


class Category extends Component {

    state = {
        edit: false,
        subCategoryName: ""
    }

    onChangeSetSubCategoryName = (subCategoryName) => {
        this.setState({
            subCategoryName: subCategoryName
        })
    }

    onClickEditSubCategoryName = () => {
        this.setState({
            edit: true,
            subCategoryName: this.props.subCategory.subCategoryName
        })
    }

    onClickUpdateSubCategoryName = () => {
        let subCategory = {
            _id: this.props.subCategory._id,
            subCategoryName: this.state.subCategoryName,
            index: this.props.index
        }
        
        this.props.updateSubCategoryName(subCategory);
        this.setState({
            edit: false
        })
    }

    onClickDeleteSubCategory = () => {
        let subCategory = {
            _id: this.props.subCategory._id,
            subCategoryName: this.state.subCategoryName,
            index: this.props.index
        }

        this.props.deleteSubCategory(subCategory)
    }

    render() {
        return (
            <Fragment>
                <Row id="categories-table-body">
                    <Col scope="row">{this.props.index}</Col>
                    {
                        this.state.edit === false && 
                        <Col>{this.props.subCategory.subCategoryName}</Col>
                    }
                    {
                        this.state.edit === true &&
                        <Input onChange={(e)=>{this.onChangeSetSubCategoryName(e.target.value)}} value={this.state.subCategoryName} type="text"/>
                    }
                    <Col>
                    {
                        this.state.edit === false && 
                        <Tooltip title="Edit">
                            <IconButton onClick={()=>{this.onClickEditSubCategoryName()}}>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        this.state.edit === true &&
                        <Tooltip title="Update">
                            <IconButton onClick={()=>{this.onClickUpdateSubCategoryName()}}>
                                <UpdateIcon></UpdateIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    </Col>
                    <Col>
                    <Tooltip title="Delete">
                        <IconButton onClick={()=>{this.onClickDeleteSubCategory()}}>
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
    updateSubCategoryName: PropTypes.func.isRequired,
    deleteSubCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { updateSubCategoryName, deleteSubCategory })(Category);