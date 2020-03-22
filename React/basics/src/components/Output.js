import React, { Component } from 'react'

class Output extends Component{      
    
    render () {
        console.log("output props => ", this.props.todosArray)
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        console.log(dateTime + " " +today);
        // console.log("output state => ", this.state.todos1);
        return (
            <div>
                <ul>
                    {this.props.todosArray.map((todo, index)=>{
                        return(
                            <li class="list-items" key = {index}>
                                <div class="list-group-item">{todo.title}</div>
                                <div class="list-group-item">{todo.deadline}</div>
                                <div class="list-group-item">{todo.time}</div>
                                <div class="list-group-item">{todo.isCompleted}</div>
                                <button onClick={() => {this.props.editTodo(index)}} class="btn btn-dark">Edit</button>
                                <button onClick={() => {this.props.deleteTodo(index)}} class="btn btn-dark">Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Output;