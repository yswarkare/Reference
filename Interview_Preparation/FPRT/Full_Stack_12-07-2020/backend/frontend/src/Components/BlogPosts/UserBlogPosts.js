import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { getUserBlogPosts, setPostText, editUserBlogPost, updateUserBlogPost, deleteUserBlogPost } from "../../Redux/Actions/blogPostActions"

class UserBlogPosts extends Component {

    componentDidMount = () => {
        this.props.getUserBlogPosts()
    }

    onChangeSetPostText = (postText) => {
        let blogPost = {
            blogPostText: postText,
            user: this.props.users.user._id
        }
        this.props.setPostText(blogPost)
    }

    onClickEditBlogPost = (blogPost, index) => {
        this.props.editUserBlogPost(blogPost, index)
    }

    onClickUpdateBlogPost = (blogPost, index) => {
        this.props.updateUserBlogPost(blogPost, index)
    }

    onClickDeleteBlogPost = (blogPost, index) => {
        this.props.deleteUserBlogPost(blogPost, index)
    }

    render() {
        return (
            <div>
                { this.props.blogPosts.userBlogPosts.map((blogPost, index) => {
                    return (
                    <div className="user-blog-posts" key={index}>
                        <div className="user-blog-post-header">
                            <div>{blogPost.user.username}</div>
                            <div>{blogPost.createdAt}</div>
                            <div>{blogPost.updatedAt}</div>
                        </div>
                        <div className="user-post-text">
                            {
                                this.props.blogPosts.editUserBlogPost === false &&
                                <p>{blogPost.blogPostText}</p>
                            }
                            {
                                this.props.blogPosts.editUserBlogPost === true &&
                                <TextareaAutosize onChange={(e)=>{this.onChangeSetPostText(e.target.value)}} aria-label="minimum height" rowsMin={3} placeholder="Write your blog post" />
                            }
                        </div>
                        <div>
                        {
                            this.props.blogPosts.editUserBlogPost === false &&
                            <div className="user-post-buttons">
                                <div><span>Comments</span></div>
                                <Button onClick={()=>{this.onClickEditBlogPost(blogPost, index)}} variant="contained" color="primary">
                                    Edit
                                </Button>
                                <Button onClick={()=>{this.onClickDeleteBlogPost(blogPost, index)}} variant="contained" color="primary">
                                    Delete
                                </Button>
                            </div>
                        }
                        {
                            this.props.blogPosts.editUserBlogPost === true &&
                            <Button onClick={()=>{this.onClickUpdateBlogPost(blogPost, index)}} variant="contained" color="primary">
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
    setPostText: PropTypes.func.isRequired,
    editUserBlogPost: PropTypes.func.isRequired,
    updateUserBlogPost: PropTypes.func.isRequired,
    deleteUserBlogPost: PropTypes.func.isRequired

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
    setPostText,
    editUserBlogPost,
    updateUserBlogPost,
    deleteUserBlogPost })(UserBlogPosts)