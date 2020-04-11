import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Output extends Component{      
    
    deleteTodo(id){
        axios.delete(`http://localhost:3010/todo/${id}`).then((res)=>console.log(res)).catch((err)=> console.log(err));
        this.props.dispatch({
            type: "deleteTodo",
            payload: id
        });
    }

    editTodo(id){
        this.props.dispatch({
            type: "editTodo",
            payload: id
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
            <div className="output">
                <div className="filter">
                    <select id="dark" className="filter-status form-control" onChange={(e)=>{this.handleFilter(e.target.value)}} value={this.props.selectStatus}>
                        <option>Completed</option>
                        <option>Active</option>
                        <option>All</option>
                    </select>
                </div>
                <ul className="list">
                    {this.props.todos && this.props.todos.map((todo)=>{
                        return(
                            <li className="list-item" id={todo.status} key = {todo.id} >
                                <div className="todo-title list-group-item">{todo.title}</div>
                                <div className="list-group-item">{todo.date}</div>
                                <div className="list-group-item">{todo.time}</div>
                                <div className="list-group-item">{todo.status}</div>
                                <button onClick={() => {this.editTodo(todo.id)}} className="btn btn-dark">Edit</button>
                                <button onClick={() => {this.deleteTodo(todo.id)}} className="btn btn-dark">Delete</button>
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
      selectStatus: state.todos.selectStatus,
      todo: state.todos.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Output);