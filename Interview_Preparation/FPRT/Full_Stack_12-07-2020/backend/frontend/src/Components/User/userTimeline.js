import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import WriteBlogPost from "../BlogPosts/WriteBlogPost";
import UserNavbar from "../Navbars/userNavbar";
import WrappedUserBlogPost from "../BlogPosts/UserBlogPost";
import { getUserBlogPosts } from "../../Redux/Actions/blogPostActions";

class UserTimeline extends Component {
    
    componentDidMount = () => {
        console.log("Timeline Component Did Mount")
        this.props.getUserBlogPosts()
    }
    
    render() {
        return (
            <div>
            { this.props.loginStatus.loggedIn === true && <UserNavbar></UserNavbar>}
                <WriteBlogPost></WriteBlogPost>
                <div className="p-3"><p>My BlogPosts</p></div>
            {
                this.props.blogPosts.userBlogPosts[0].blogPostText !== "Dummy text" &&
                <WrappedUserBlogPost></WrappedUserBlogPost>
            }
            </div>
        );
    }
}

UserTimeline.propTypes = {
    blogPosts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    getUserBlogPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts,
        users: state.users,
        loginStatus: state.users.loginStatus,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { getUserBlogPosts })(UserTimeline)