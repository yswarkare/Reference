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
import { updateSubSubCategoryName, deleteSubSubCategory } from "../../Redux/Actions/subSubCategoriesActions";


class Category extends Component {

    state = {
        edit: false,
        subSubCategoryName: ""
    }

    onChangeSetSubSubCategoryName = (subSubCategoryName) => {
        this.setState({
            subSubCategoryName: subSubCategoryName
        })
    }

    onClickEditSubSubCategoryName = () => {
        this.setState({
            edit: true,
            subSubCategoryName: this.props.subSubCategory.subSubCategoryName
        })
    }

    onClickUpdateSubSubCategoryName = () => {
        let subSubCategory = {
            _id: this.props.subSubCategory._id,
            subSubCategoryName: this.state.subSubCategoryName,
            index: this.props.index
        }
        
        this.props.updateSubSubCategoryName(subSubCategory);
        this.setState({
            edit: false
        })
    }

    onClickDeleteSubSubCategory = () => {
        let subSubCategory = {
            _id: this.props.subSubCategory._id,
            subSubCategoryName: this.state.subSubCategoryName,
            index: this.props.index
        }
        this.props.deleteSubSubCategory(subSubCategory);
    }

    render() {
        return (
            <Fragment>
                <Row id="categories-table-body">
                    <Col scope="row">{this.props.index}</Col>
                    {
                        this.state.edit === false && 
                        <Col>{this.props.subSubCategory.subSubCategoryName}</Col>
                    }
                    {
                        this.state.edit === true &&
                        <Input onChange={(e)=>{this.onChangeSetSubSubCategoryName(e.target.value)}} value={this.state.subSubCategoryName} type="text"/>
                    }
                    <Col>
                    {
                        this.state.edit === false && 
                        <Tooltip title="Edit">
                            <IconButton onClick={()=>{this.onClickEditSubSubCategoryName()}}>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        this.state.edit === true &&
                        <Tooltip title="Update">
                            <IconButton onClick={()=>{this.onClickUpdateSubSubCategoryName()}}>
                                <UpdateIcon></UpdateIcon>
                            </IconButton>
                        </Tooltip>
                    }
                    </Col>
                    <Col>
                    <Tooltip title="Delete">
                        <IconButton onClick={()=>{this.onClickDeleteSubSubCategory()}}>
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
    updateSubSubCategoryName: PropTypes.func.isRequired,
    deleteSubSubCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { updateSubSubCategoryName, deleteSubSubCategory })(Category);