import React, { Component } from "react";
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  state = {
    todo: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'play mario cart' }
    ]
  }
  deleteTodo = (id) => {
    const todo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todo: todo
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    todo = [...this.state.todo, todo]
    this.setState({
      todo: todo
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar />
          <Route exact path='/' components={Home} />
          <Route path='/about' components={About} />
          <Route path='/contact' components={Contact} />
          <Route path='/Todos' components={Todos} />
          <h1 className="center blue-text">Todos</h1>
          <Todos todos={this.state.todo} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
