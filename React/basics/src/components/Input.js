import React from 'react';
//import React, { Component } from 'react'

class Input extends React.Component {
    state = {
      title: "",
      time: "",
      deadline: "",
      isCompleted: false
    }

    componentDidUpdate = (prevProps) => {
      if(prevProps.editTodo !== this.props.editTodo){
        this.setState({
          title: this.props.editTodo.title,
          time: this.props.editTodo.time,
          deadline: this.props.editTodo.deadline,
          isCompleted: this.props.editTodo.isCompleted
        })
      }
    }

    handleInputChange = (event) => {
      this.setState({
        title: event.target.value
      }, () => {
        console.log("state here =>", this.state);
      });
    }

    handleDeadlineChange = (event) => {
      this.setState({
        deadline: event.target.value
      }, () => {
        console.log("state here =>", this.state);
      });
    }

    timeChangeHandler(time){
      this.setState({
        time: time
      }, () => {
        console.log("time here =>", this.state)})
    }

    sendTodoToWrapper = () => { 
      this.props.sendTodoFromInput(this.state);
      // sendTodoFromInput={(todo) => this.addTodoToList(todo)}
    }

    handleIsCompleted(isComplete){
      this.setState({
        isCompleted: isComplete
      })
    }

    render() {
      console.log("input edit => ", this.props.isEdit,this.props.editTodo)
      console.log("input state => ", this.state)
      return (
        <div class="input">
          <input onChange={(event) => this.handleInputChange(event)} 
          value={this.state.title} type="text" class="form-control" />
          
          <input onChange={(event) => this.handleDeadlineChange(event)} 
          value={this.state.deadline} type="date" class="form-control"/>

          <input onChange={(e) => this.timeChangeHandler(e.target.value)} value={this.state.time} type="time" class="form-control"></input>
          
          <select onChange={(e)=>{this.handleIsCompleted(e.target.value)}} value={this.state.isCompleted} class="custom-select">
            <option>Completed</option>
            <option>Incomplete</option>
          </select>

          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
            <label class="custom-control-label" for="customSwitch1"></label>
          </div>

          {this.props.isEdit === false && <button onClick={() => this.sendTodoToWrapper()} class="btn btn-info">Save</button>}
          {this.props.isEdit === true && <button onClick={() => this.sendTodoToWrapper()} class="btn btn-info">Edit</button>}
        </div>
      );
    }
}

export default Input;