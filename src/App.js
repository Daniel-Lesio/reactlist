import React, { Component } from 'react'
import Todos from  './components/Todos'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import './App.css'
export default class App extends Component {
  state={
    todos : [
      { id : 1, content : 'Zrób coś' },
      { id : 2, content : 'Zrób coś jeszcze'}
    ]
  }
  deleteTodo = (id) =>{
      const todos = this.state.todos.filter(todo=>{
        return todo.id !== id
    })
    this.setState({
      todos : todos
    })
  }
  addTodo = (todo) =>{
    todo.id = this.state.todos[this.state.todos.length-1].id + 1
    let todos = [ ...this.state.todos , todo  ]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
      <div className='app container ' >
      <h1 className='center deep-purple-text ' > Lista </h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } ></Todos>        
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
      </div>
    )
  }
}