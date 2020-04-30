import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import SearchBox from "../searchBox";
import { Navbar, Nav, NavItem, Row, Col } from "reactstrap";
import UserNavbar from "./userNavbar";
import AdminNavbar from "./adminNavbar";
import { isUserLoggedIn, setUserLogout } from "../../Redux/Actions/userActions";
// import UserIcon from "../User/userIcon";

class Header extends Component {

    componentDidMount = () => {
        let user = {
            user: this.props.user,
            userIsAdmin: this.props.loginStatus.userIsAdmin,
        }
        this.props.isUserLoggedIn(user);
        if (this.props.loginStatus.loggedIn === true){
            this.props.setTokenInUser(user)
        }
    }

    onClickSetUserLogout = () => {
        let user = {
            user: this.props.user,
            userIsAdmin: this.props.loginStatus.userIsAdmin,
            headers: this.props.headers
        }
        this.props.setUserLogout(user)
    }

    render(){
        // console.log("Props in header =>" + JSON.stringify(this.props))
        return(
            <div className="header">
                <Link to="/"><h1>Ratings and Reviews</h1></Link>
                <Navbar>
                    <Nav>
                    <Row className="header-navbar">
                    <Col>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <Link to="/search-box">
                                <SearchBox></SearchBox>
                            </Link>
                        </NavItem>
                    </Col>
                    <Col className="user-login-logout-container">
                    <div className="user-login-logout">
                        {this.props.loginStatus.loggedIn === false && 
                            <Col className="login-link">
                            <NavItem>
                            <Link to="/user-login">Login</Link>
                            </NavItem>
                            </Col>}
                        {this.props.loginStatus.loggedIn === false && 
                            <Col className="register-link">
                            <NavItem>
                            <Link to="/user-registration">Register</Link>
                            </NavItem>
                            </Col>}
                        {this.props.loginStatus.loggedIn === true && 
                            <Col className="logout-link">
                            <NavItem>
                            <Link onClick={()=>{this.onClickSetUserLogout()}} to="/">Logout</Link>
                            </NavItem>
                            </Col>}
                        </div>
                        </Col>
                    </Row>
                    </Nav>
                </Navbar>
                {this.props.loginStatus.userIsAdmin === false && this.props.loginStatus.loggedIn === true && <UserNavbar></UserNavbar>}
                {this.props.loginStatus.userIsAdmin === true && <AdminNavbar></AdminNavbar>}
            </div>
        )
    }
}

Header.propTypes = {
    loginStatus: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    subCategories: PropTypes.object.isRequired,
    headers: PropTypes.object.isRequired,
    subSubCategories: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    setUserLogout:  PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus,
        categories: state.categories,
        subCategories: state.subCategories,
        subSubCategories: state.subSubCategories,
        headers: state.users.headers
    };
}

export default connect(mapStateToProps,{ isUserLoggedIn, setUserLogout })(Header);