//import React from 'react';
import React, { Component } from 'react'
import Input from '../components/Input';
import Output from '../components/Output';

class Wrapper extends Component {
  state = {
    todos: [
      {
        title: "First",
        time: "12:20",
        deadline: "2020-03-08",
        isCompleted: "Incomplete"
      },
      {
        title: "Second",
        time: "12:21",
        deadline: "2020-03-09",
        isCompleted: "Incomplete"
      },
      {
        title: "Third",
        time: "12:22",
        deadline: "2020-03-10",
        isCompleted: "Incomplete"
      }
    ],
    isEdit: false,
    editIndex: "",
    editTodo: {}
  }
  
  editTodo(index){
    this.setState({
      isEdit: true,
      editIndex: index,
      editTodo: this.state.todos[index]
    })
  }

  addTodoToList = (todo) => {
    //console.log("todo here =>",  todo);
    let newTodos = this.state.todos.slice();
    newTodos[this.state.editIndex] = todo;
    if (this.state.isEdit === true){
      this.setState(() => ({
        todos: newTodos,
        isEdit: false
      }))
      
    } else if (this.state.isEdit === false){
      this.setState({
        todos: [...this.state.todos, todo]
      })
    }
  }

  deleteTodo(index){
    let newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <Input isEdit={this.state.isEdit} editTodo={this.state.editTodo} sendTodoFromInput={(todo) => this.addTodoToList(todo)} />
        <Output todosArray = {this.state.todos} deleteTodo={(index)=>{this.deleteTodo(index)}} editTodo={(index) => {this.editTodo(index)}} />
      </div>
    )
  }
}

export default Wrapper;
