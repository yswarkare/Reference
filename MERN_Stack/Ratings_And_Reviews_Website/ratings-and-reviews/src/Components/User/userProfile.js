import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Container, Row, Col } from 'reactstrap';
import { Grid, TextField } from "@material-ui/core";
import { getUserInfo } from "../../Redux/Actions/userProfileActions";

class UserProfile extends Component {

    componentDidMount = () => {
        this.props.getUserInfo()
    }   

    render(){
        return(
            <div className="user-profile">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <span>Welcome {this.props.user.username}! This is your profile</span>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <span>Name</span>
                        </Grid>
                        <Grid container direction="column" justify="space-around" alignItems="center">
                            <Grid container direction="row" justify="space-around" alignItems="center">
                                <Grid item><span>First Name</span></Grid>
                                <Grid item><span>{this.props.user.firstName}</span></Grid>
                            </Grid>
                            <Grid container direction="row" justify="space-around" alignItems="center">
                                <span>Middle Name</span>
                                <span>{this.props.user.middleName}</span>
                            </Grid>
                            <Grid container direction="row" justify="space-around" alignItems="center">
                                <span>Last Name</span>
                                <span>{this.props.user.lastName}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

UserProfile.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    userCopy: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        userCopy: state.users.userCopy
    }
}

export default connect(mapStateToProps, { getUserInfo })(UserProfile);