import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {

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

    addTodoToTodos = ()=> {
        this.props.dispatch({
            type: "addTodos",          
        });
    }

    render() {
      return (
        <div class="input">
          <input onChange={(e) => this.handleInputChange(e.target.value)} 
          value={this.props.todo.title} type="text" class="form-control" /> 

          <input onChange={(e) => this.handleDateChange(e.target.value)} 
          value={this.props.todo.date} type="date" class="form-control"/>

          <input onChange={(e) => this.timeChangeHandler(e.target.value)} type="time" class="form-control" value={this.props.todo.time}></input>
          
          <select onChange={(e)=>{this.handleStatus(e.target.value)}} value={this.props.todo.status} class="form-control">
          <option>Completed</option>
          <option>Incomplete</option>
          </select>

          {this.props.edit === false && <button onClick={() => this.addTodoToTodos()} class="btn btn-primary">Save</button>}
          {this.props.edit === true && <button onClick={() => this.addTodoToTodos()} class="btn btn-primary">Update</button>}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
        todo: state.todos.todo,
        edit: state.todos.edit
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Input);