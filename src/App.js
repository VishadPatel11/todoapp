import React, { Component } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TodoAdd from './TodoAdd'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="todo-app container">
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/todo' component={TodoAdd} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
