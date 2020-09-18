import React, { Component, Fragment } from "react";
import UsersListItem from "./Users_List_Items";

class UsersList extends Component {
    constructor () {
        super();
        this.state = {
            itemClass: "card list-group-item-action m-1 p-2",
            activeClass: "card list-group-item-action m-1 p-2 list-group-item-info",
            inactiveClass: "card list-group-item-action m-1 p-2",
            activeIndex: sessionStorage.getItem("activeIndex")
        }
    }

    componentDidMount = () => {
        let activeIndex_01 = sessionStorage.getItem("activeIndex");
        console.log(activeIndex_01);
        if (activeIndex_01 !== null){
            this.setState({
                activeIndex: activeIndex_01
            });
        }
        if (this.props.index === activeIndex_01) {
            this.setState({
                itemClass: this.state.activeClass
            })
        } else {
            this.setState({
                itemClass: this.state.inactiveClass
            })
        }
    }

    onClick = (index, item) => {
        this.setState({
            activeIndex: index
        })
        this.props.onClick(item);
    }

    setItemClass = (index) => {
        if (index === this.state.activeIndex) {
            return this.state.activeClass;
        } else {
            return this.state.inactiveClass;
        }
    }

    render () {
        return (
            <Fragment>
                <ul className="list-group mr-1 ml-1">
                    {
                        this.props.list.map((item, index)=>{
                            return (
                                <UsersListItem onClick={()=>{this.onClick(index, item)}} item={item} key={index} index={index} itemClass={this.setItemClass(index)}></UsersListItem>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default UsersList;