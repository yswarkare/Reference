import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Input extends Component {

    componentDidMount = ()=>{
        axios.get("http://localhost:3010/todo")
        .then((res)=>{this.props.dispatch({
            type: "GET_TODOS",
            payload: res.data
        })}).catch((err=>console.log(err)))
    }

    handleInputChange = (title) => {
        this.props.dispatch({
            type: "setTitle",
            payload: title
        });
    }

    handleDateChange = (date) => {
        this.props.dispatch({
            type: "setDate",
            payload: date
        });
    }

    timeChangeHandler(time){
        this.props.dispatch({
            type: "setTime",
            payload: time
        });
    }

    handleStatus(status){
        this.props.dispatch({
            type: "setStatus",
            payload: status
        });
    }

    addTodoToTodos =()=> {
        let todo = this.props.todo;
        let id = this.props.id;
        console.log("todo in add todo ",todo);
        if(this.props.edit === true){
            axios.put(`http://localhost:3010/todo/${id}`, todo).then((res)=>console.log(res)).catch((err)=> console.log(err));
        }else {
            axios.post("http://localhost:3010/todo", todo)
            .then(res=> console.log(res.data))
        }
        this.props.dispatch({
            type: "addTodos",          
        });
    }

    render() {
      return (
        <div className="input">
          <input id="dark" onChange={(e) => this.handleInputChange(e.target.value)} 
          value={this.props.todo.title} type="text" className="form-control" /> 

          <input id="dark" onChange={(e) => this.handleDateChange(e.target.value)} 
          value={this.props.todo.date} type="date" className="form-control"/>

          <input id="dark" onChange={(e) => this.timeChangeHandler(e.target.value)} type="time" className="form-control" value={this.props.todo.time}></input>
          
          <select id="dark" onChange={(e)=>{this.handleStatus(e.target.value)}} value={this.props.todo.status} className="form-control">
          <option>Completed</option>
          <option>Active</option>
          </select>

          {this.props.edit === false && <button onClick={() => this.addTodoToTodos()} className="btn btn-primary">Save</button>}
          {this.props.edit === true && <button onClick={() => this.addTodoToTodos()} className="btn btn-primary">Update</button>}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
        todo: state.todos.todo,
        edit: state.todos.edit,
        id: state.todos.editID
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Input);