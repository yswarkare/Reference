import React, { Component } from 'react'
import ListItem01 from './List_Item_01'

class List01 extends Component {

    componentDidMount = () => {
        console.log("list data => " + this.props.listData);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.listData.map((item, index) => {
                            return (
                                <ListItem01 itemData={item} key={index}></ListItem01>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List01;