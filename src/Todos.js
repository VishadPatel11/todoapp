import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const todolist = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span onClick={() => {
                        deleteTodo(todo.id)
                    }}>
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
            <p className="center"> you have no todo's left, yay!</p>
        )
    return (
        <div className='todos collection'>
            <div className="container">
                <h1 className="center blue-text">Todos</h1>
            </div>
            {todolist}
        </div>
    )
}
export default Todos