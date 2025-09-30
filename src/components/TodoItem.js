import React from "react";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button type="button" onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button type="button" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
