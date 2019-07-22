import { useState } from "react";
import { ALL, DONE, TODO } from "./filters";

function useTodosWithFilter() {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const lastTodoId = Math.max(...todos.map(todo => todo.id), 0); // compute greatest id
  const [todoId, setTodoId] = useState(lastTodoId + 1); // set next todo id
  const [activeFilter, setActiveFilter] = useState(ALL);

  function toggleTodo(todoId) {
    const newTodos = [...todos];
    console.log("newTodos: ", newTodos);
    const index = newTodos.findIndex(todo => todo.id === todoId);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function removeTodo(todoId) {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === todoId);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function filterTodos(filter) {
    switch (filter) {
      case DONE: {
        return todos.filter(todo => todo.done === true);
      }
      case TODO: {
        return todos.filter(todo => todo.done === false);
      }
      default: {
        return todos;
      }
    }
  }
  const todosToDisplay = filterTodos(activeFilter);

  return {
    todos,
    setTodos,
    todoId,
    setTodoId,
    toggleTodo,
    removeTodo,
    todosToDisplay,
    setActiveFilter
  };
}

export default useTodosWithFilter;
