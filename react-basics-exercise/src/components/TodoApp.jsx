import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

let nextId = 3;

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do app", completed: false },
  ]);

  function addTodo(text) {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
