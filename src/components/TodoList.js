import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, id }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
