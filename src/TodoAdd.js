import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoAdd extends Component {
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
            <div className="container">
                <Todos todo={this.state.todo} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}
export default TodoAdd