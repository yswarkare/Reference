import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import withUserBlogPostHOC from "./withUserBlogPostHOC";


class UserBlogPost extends Component {

    state = {
        _id: this.props.blogPost._id,
        blogPostText: this.props.blogPost.blogPostText,
        user: this.props.blogPost.user,
        comments: this.props.blogPost.comments,
        commentedUsers: this.props.blogPost.commentedUsers,
        likes: this.props.blogPost.likes,
        usersWhoLikedIt: this.props.blogPost.usersWhoLikedIt,
        updatedAt: this.props.blogPost.updatedAt,
        createdAt: this.props.blogPost.createdAt,
        editUserBlogPost: false
    }

    componentDidMount = () => {
        console.log("UserBlogPost Component Did Mount")
        this.props.getUserBlogPosts()
        this.setState({
            _id: this.props.blogPost._id,
            blogPostText: this.props.blogPost.blogPostText,
            user: this.props.blogPost.user,
            comments: this.props.blogPost.comments,
            commentedUsers: this.props.blogPost.commentedUsers,
            likes: this.props.blogPost.likes,
            usersWhoLikedIt: this.props.blogPost.usersWhoLikedIt,
            updatedAt: this.props.blogPost.updatedAt,
            createdAt: this.props.blogPost.createdAt,
        })
    }

    onChangeSetPostText = (postText) => {
        let blogPost = {
            blogPostText: postText,
            user: this.props.users.user._id,
        }
        this.setState({
            blogPostText: postText
        })
        this.props.setPostText(blogPost)
    }

    onClickEditBlogPost = (blogPost, index) => {
        this.props.editUserBlogPost(blogPost, index);
        this.setState({
            _id: this.props.blogPost._id,
            blogPostText: this.props.blogPost.blogPostText,
            user: this.props.blogPost.user,
            comments: this.props.blogPost.comments,
            commentedUsers: this.props.blogPost.commentedUsers,
            likes: this.props.blogPost.likes,
            usersWhoLikedIt: this.props.blogPost.usersWhoLikedIt,
            updatedAt: this.props.blogPost.updatedAt,
            createdAt: this.props.blogPost.createdAt,
            editUserBlogPost: true
        })
    }

    onClickUpdateBlogPost = (blogPost, index) => {
        console.log("Update this")
        console.log(blogPost)
        this.props.updateUserBlogPost(blogPost, index)
        this.setState({
            editUserBlogPost: false,

        })
    }

    onClickDeleteBlogPost = (blogPost, index) => {
        this.props.deleteUserBlogPost(blogPost, index)
    }

    render () {
        
        return (
            <div className="user-blog-posts">
                <div className="user-blog-post-header">
                    <div>{this.state.user.username}</div>
                    <div>{this.state.createdAt}</div>
                    <div>{this.state.updatedAt}</div>
                </div>
                <div className="user-post-text">
                    {
                        this.state.editUserBlogPost === false &&
                        <p>{this.state.blogPostText}</p>
                    }
                    {
                        this.state.editUserBlogPost === true &&
                        <TextareaAutosize onChange={(e)=>{this.onChangeSetPostText(e.target.value)}} aria-label="minimum height" rowsMin={3} value={this.state.blogPostText} placeholder="Write your blog post" />
                    }
                </div>
                <div>
                {
                    this.state.editUserBlogPost === false &&
                    <div className="user-post-buttons">
                        <div><span>Comments</span></div>
                        <Button onClick={()=>{this.onClickEditBlogPost(this.state, this.props.index)}} variant="contained" color="primary">
                            Edit
                        </Button>
                        <Button onClick={()=>{this.onClickDeleteBlogPost(this.state, this.props.index)}} variant="contained" color="primary">
                            Delete
                        </Button>
                    </div>
                }
                {
                    this.state.editUserBlogPost === true &&
                    <Button onClick={()=>{this.onClickUpdateBlogPost(this.state, this.props.index)}} variant="contained" color="primary">
                        Update
                    </Button>
                }
                </div>
            </div>
        )
    }
}

const WrappedUserBlogPost = withUserBlogPostHOC(UserBlogPost);

export default WrappedUserBlogPost;