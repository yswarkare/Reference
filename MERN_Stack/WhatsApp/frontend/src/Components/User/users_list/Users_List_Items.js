import React, { Component, Fragment } from "react";

class UsersListItem extends Component {


    onItemClick = () => {
        sessionStorage.removeItem("activeIndex");
        let activeIndex_01 = JSON.stringify(this.props.index);
        sessionStorage.setItem("activeIndex", activeIndex_01);
        this.props.onClick()
    }

    render () {
        return (
            <Fragment>
                <li className={this.props.itemClass} onClick={()=>{this.onItemClick()}} >{`${this.props.item.username}`} </li>
            </Fragment>
        )
    }
}

export default UsersListItem;