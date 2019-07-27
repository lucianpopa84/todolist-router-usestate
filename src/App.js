import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import useTodos from "./useTodos.js";
import { ALL } from "./filters";

import "./App.css";

function App({ match }) {
  const {
    todos,
    setTodos,
    todoId,
    setTodoId,
    toggleTodo,
    removeTodo,
    filterTodos
 } = useTodos();

   let initialFilter = ALL;
   if (match.params.filter) {
    initialFilter = match.params.filter.toUpperCase(); // set initial filter the router filter param
   }

   const [activeFilter, setActiveFilter] = useState(initialFilter);
   const todosToDisplay = filterTodos(activeFilter);

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
         {todos[0] ? <p>Showing: {todosToDisplay.length}</p> : null}
         <TodoList
            todosToDisplay={todosToDisplay}
            setTodos={setTodos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
         />
      </div>
   );
}

export default App;
