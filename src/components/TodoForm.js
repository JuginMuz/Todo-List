import React, { useState } from "react";
import "./App.css";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();               // stop full page reload
    if (!input.trim()) return;
    addTodo(input);                   // CALL THE PARENT
    setInput("");                     // clear the field
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        className="todo-input"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* type=submit so the form's onSubmit runs */}
      <button className="todo-button" type="submit">Add Task</button>
    </form>
  );
}
