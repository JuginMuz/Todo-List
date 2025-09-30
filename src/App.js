import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

// (optional) simple persistence so you can see items after reloads
function loadTodos() {
  try {
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveTodos(todos) {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch {}
}

export default function App() {
  const [todos, setTodos] = useState(() => loadTodos());

  useEffect(() => { saveTodos(todos); }, [todos]);

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    const newTodo = { id: nextId, text: trimmed, completed: false };
    // IMPORTANT: never mutate; don’t use push
    setTodos(prev => [newTodo, ...prev]);
  };

  const removeTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id));

  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  return (
    <div className="app">
      <h1>Your Todo List!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todos">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}
