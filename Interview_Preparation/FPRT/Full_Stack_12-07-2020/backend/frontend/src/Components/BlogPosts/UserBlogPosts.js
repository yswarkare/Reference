import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { getUserBlogPosts, editUserBlogPost, updateUserBlogPost, deleteBlogPost } from "../../Redux/Actions/blogPostActions"

class UserBlogPosts extends Component {

    componentDidMount = () => {
        this.props.getUserBlogPosts()
    }

    onClickEditBlogPost = () => {
        this.props.deleteBlogPost()
    }

    onClickUpdateBlogPost = () => {
        this.props.deleteBlogPost()
    }

    onClickDeleteBlogPost = () => {
        this.props.deleteBlogPost()
    }

    render() {
        return (
            <div>
                { this.props.blogPosts.userBlogPosts.map((blogPost, index) => {
                    console.log(blogPost)
                    return (
                    <div className="user-blog-posts" key={index}>
                        <div className="user-blog-post-header">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="post-text">
                            <p>{blogPost.blogPostText}</p>
                        </div>
                        <div className="post-buttons">
                        {
                            this.props.blogPosts.editBlogPost === false &&
                            <div>
                                <Button onClick={()=>{this.onClickEditBlogPost(index, blogPost)}} variant="contained" color="primary">
                                    Edit
                                </Button>
                                <Button onClick={()=>{this.onClickDeleteBlogPost(index, blogPost)}} variant="contained" color="primary">
                                    Delete
                                </Button>
                            </div>
                        }
                        {
                            this.props.blogPosts.editBlogPost === true &&
                            <Button onClick={()=>{this.onClickUpdateBlogPost(index, blogPost)}} variant="contained" color="primary">
                                Update
                            </Button>
                        }
                        </div>
                    </div>)
                }) }
            </div>
        );
    }
}

UserBlogPosts.propTypes = {
    blogPosts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    getUserBlogPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts,
        users: state.users,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { 
    getUserBlogPosts,
    editUserBlogPost,
    updateUserBlogPost,
    deleteBlogPost })(UserBlogPosts)