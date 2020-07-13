import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
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

export default connect(mapStateToProps, {})(BlogPost)