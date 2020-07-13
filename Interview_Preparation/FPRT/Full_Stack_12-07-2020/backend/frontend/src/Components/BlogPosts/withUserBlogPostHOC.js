import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getUserBlogPost, sendUserBlogPostId } from "../../Redux/Actions/blogPostActions";


const withUserBlogPostHOC = (WrappedUserBlogPost) => {
    
    class withUserBlogPostHOC extends Component {

        componentWillMount = () => {
            this.props.sendUserBlogPostId(this.props.match.params.id)
            let userBlogPost = {
                _id: this.props.blogPost._id
            }
            this.props.getUserBlogPost(userBlogPost)
        }

        render() {
            console.log(this.props.match.params.id)
            
            return (
                <div>
                    <WrappedUserBlogPost blogPost={this.props.blogPost}></WrappedUserBlogPost>
                </div>
            );
        }
    }
    
    
    withProductPageHOC.propTypes = {
        user: PropTypes.object.isRequired,
        loginStatus: PropTypes.object.isRequired,
        blogPost: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        sendUserBlogPostId: PropTypes.func.isRequired,
        getUserBlogPost: PropTypes.func.isRequired,
    };
    
    const mapStateToProps = (state) => {
        return {
            user: state.users.user,
            loginStatus: state.users.loginStatus,
            blogPost: state.blogPosts.blogPost
        }
    }
    
    return connect(mapStateToProps, { getUserBlogPost, sendUserBlogPostId })(withUserBlogPostHOC);
}

export default withUserBlogPostHOC;