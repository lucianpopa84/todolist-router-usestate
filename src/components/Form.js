import React, { useState } from "react";

function Form({ setTodos, todos, todoId, setTodoId }) {
  const [todoText, setTodoText] = useState("");
  // debugger;
  function addTodo(e) {
    e.preventDefault();
    if (todoText) {
      setTodos([
        ...todos,
        {
          text: todoText,
          done: false,
          id: todoId.toString()
        }
      ]);
      setTodoId(todoId + 1); // increment todo id
      setTodoText(""); // empty todo name input form
    }
  }
  return (
    <>
      <div> Todo Form </div>
      <form className = "todoForm">
        <label>
          Task:
          <input
            value={todoText}
            type="text"
            placeholder="add todo..."
            onChange={e => setTodoText(e.target.value)}
          />
        </label>
        <button onClick={addTodo} type="submit">
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
