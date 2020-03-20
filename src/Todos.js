import React from 'react'

const Todos = ({ todo, deleteTodo }) => {
    const todolist = todo.length ? (
        todo.map(todo => {
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
        <div>
            <div className="container">
                <h1 className="center blue-text">Todos</h1>
            </div>
            <div className='todos collection'>
                {todolist}
            </div>
        </div>
    )
}
export default Todos