import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getUserBlogPosts, setPostText, editUserBlogPost, updateUserBlogPost, deleteUserBlogPost } from "../../Redux/Actions/blogPostActions";


const withUserBlogPostHOC = (WrappedUserBlogPost) => {
    
    class withUserBlogPostHOC extends Component {

        componentDidMount = () => {
            console.log("withUserBlogPostHOC Component Did Mount")
            this.props.getUserBlogPosts()
        }

        render() {
            // console.log(this.props.match.params.id)
            
            return (
                <div>
                {this.props.blogPosts.userBlogPosts.map((blogPost, index) => {
                        return (
                            <WrappedUserBlogPost 
                            blogPosts={this.props.blogPosts} 
                            blogPost={blogPost} 
                            index={index} 
                            users={this.props.users} 
                            getUserBlogPosts={this.props.getUserBlogPosts}
                            setPostText={this.props.setPostText} 
                            editUserBlogPost={this.props.editUserBlogPost}
                            updateUserBlogPost={this.props.updateUserBlogPost}
                            deleteUserBlogPost={this.props.deleteUserBlogPost}
                            key={index}>
                            </WrappedUserBlogPost>
                        )
                    })
                }
                </div>
            );
        }
    }

    withUserBlogPostHOC.propTypes = {
        blogPosts: PropTypes.object.isRequired,
        users: PropTypes.object.isRequired,
        comments: PropTypes.object.isRequired,
        loginStatus: PropTypes.object.isRequired,
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
            comments: state.comments,
            loginStatus: state.users.loginStatus,
        }
    }
    
    return connect(mapStateToProps, { getUserBlogPosts, setPostText, editUserBlogPost, updateUserBlogPost, deleteUserBlogPost })(withUserBlogPostHOC);
}

export default withUserBlogPostHOC;