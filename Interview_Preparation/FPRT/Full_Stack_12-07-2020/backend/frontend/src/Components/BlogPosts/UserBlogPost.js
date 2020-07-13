import React, { Component } from "react";
import PropTypes from "prop-types";
import withUserBlogPostHOC from "./withUserBlogPostHOC";


class UserBlogPost extends Component {

    componentDidMount = () => {
        // this.props.getAllProducts()
    }

    render () {
        
        return (
            <div className="user-blog-post">
                
            </div>
        )
    }
}

BlogPost.propTypes = {
    blogPosts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts,
        users: state.users,
        comments: state.comments
    }
}

connect(mapStateToProps, {})(BlogPost)

const WrappedUserBlogPost = withUserBlogPostHOC(UserBlogPost);

export default WrappedUserBlogPost;