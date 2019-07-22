import React from "react";

function TodoListItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li data-ischecked = {todo.done}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button type="submit" onClick={() => removeTodo(todo.id)}>
        x
      </button>
    </li>
  );
}

function TodoList({ todos, toggleTodo, removeTodo }) {

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
