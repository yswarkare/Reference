import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { robHouses } from "../Redux/Actions/Actions_001";


class Wrapper extends Component {

    componentDidMount = () => {
        this.props.robHouses()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


Wrapper.propTypes = {
    robHouses: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { robHouses })(Wrapper);
