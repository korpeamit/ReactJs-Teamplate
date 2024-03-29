import React from 'react';

const Todo = ({todos,deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You don't have todo's left, Yey!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todo;