import React, { Component, Fragment } from 'react';

class TextInput2 extends Component {

    render() {
        return (
            <Fragment>
                <div className="text-input">
                    <label>{this.props.label}</label>
                    <input 
                    type={this.props.type} 
                    value={this.props.value}
                    className=""
                    placeholder={this.props.placeholder} />
                </div>
            </Fragment>
        );
    }
}

export default TextInput2;