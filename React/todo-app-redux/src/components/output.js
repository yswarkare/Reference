import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";

class Output extends Component{      
    
    deleteTodo(index){
        this.props.dispatch({
            type: "deleteTodo",
            payload: index
        })
    }

    editTodo(index){
        this.props.dispatch({
            type: "editTodo",
            payload: index
        })
    }

    handleFilter(filter){
        this.props.dispatch({
            type: "Filter",
            payload: filter
        })
    }

    render () {
        console.log("output props => ", this.props.todos)
        return (
            <div class="output">
                <div class="filter">
                    <select class="filter-status form-control" onChange={(e)=>{this.handleFilter(e.target.value)}} value={this.props.selectStatus}>
                        <option>Completed</option>
                        <option>Incomplete</option>
                        <option>All</option>
                    </select>
                </div>
                <ul class="list">
                    {this.props.todos && this.props.todos.map((todo, index)=>{
                        return(
                            <li class="list-item" key = {index} >
                            <div class="todo-title list-group-item">{todo.title}</div>
                            <div class="list-group-item">{todo.date}</div>
                            <div class="list-group-item">{todo.time}</div>
                            <div class="list-group-item">{todo.status}</div>
                            <button onClick={() => {this.editTodo(index)}} class="btn btn-dark">Edit</button>
                            <button onClick={() => {this.deleteTodo(index)}} class="btn btn-dark">Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos.todos,
      todosCopy: state.todos.todosCopy,
      selectStatus: state.todos.selectStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Output);