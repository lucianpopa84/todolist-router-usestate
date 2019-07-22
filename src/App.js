import React, { useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import useTodos from "./useTodos.js";

import "./App.css";

function App() {
  const {
    todos,
    setTodos,
    todoId,
    setTodoId,
    toggleTodo,
    removeTodo,
    todosToDisplay,
    setActiveFilter
  } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-app">
      <Form
        setTodos={setTodos}
        todos={todos}
        todoId={todoId}
        setTodoId={setTodoId}
      />
      <Filter setActiveFilter={setActiveFilter} />
      {todos[0] ? (
        <p>
          Showing: {todosToDisplay.length}
        </p>
      ) : null}
      <TodoList
        todos={todosToDisplay}
        setTodos={setTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
