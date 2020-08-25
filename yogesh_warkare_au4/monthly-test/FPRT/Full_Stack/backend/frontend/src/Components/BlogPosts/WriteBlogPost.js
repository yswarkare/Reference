import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { setPostText, makeBlogPost } from "../../Redux/Actions/blogPostActions"

class WriteBlogPost extends Component {

    onChangeSetPostText = (postText) => {
        let blogPost = {
            blogPostText: postText,
            user: this.props.users.user._id
        }
        this.props.setPostText(blogPost)
    }

    onClickSendBlogPost = () => {
        let blogPost = {
            blogPost: this.props.blogPosts.blogPost
        }
        this.props.makeBlogPost(blogPost)
    }

    render() {
        return (
            <div className="write-blog-post">
                <div className="post-text">
                    <TextareaAutosize onChange={(e)=>{this.onChangeSetPostText(e.target.value)}} aria-label="minimum height" rowsMin={3} placeholder="Write your blog post" />
                </div>
                <div className="post-buttons">
                    <Button onClick={()=>{this.onClickSendBlogPost()}} variant="contained" color="primary">
                        Post
                    </Button>
                </div>
            </div>
        );
    }
}

WriteBlogPost.propTypes = {
    blogPosts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    setPostText: PropTypes.func.isRequired,
    makeBlogPost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts,
        users: state.users,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { setPostText, makeBlogPost })(WriteBlogPost)