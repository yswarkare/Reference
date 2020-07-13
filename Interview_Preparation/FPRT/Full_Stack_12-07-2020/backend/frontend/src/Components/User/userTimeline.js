import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import WriteBlogPost from "../BlogPosts/WriteBlogPost";
import UserNavbar from "../Navbars/userNavbar";

class UserTimeline extends Component {
    render() {
        return (
            <div>
            { this.props.loginStatus.loggedIn === true && <UserNavbar></UserNavbar>}
                <WriteBlogPost></WriteBlogPost>
            </div>
        );
    }
}

UserTimeline.propTypes = {
    blogPosts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts,
        users: state.users,
        loginStatus: state.users.loginStatus,
        comments: state.comments
    }
}

export default connect(mapStateToProps, {})(UserTimeline)