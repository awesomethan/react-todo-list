import React from 'react';

function Todo ({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.key !== todo.key));
    };
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;