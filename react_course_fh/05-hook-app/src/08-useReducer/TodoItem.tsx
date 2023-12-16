import React from "react";
import { TodoItemPropTypes} from "./Todo.types";



export const TodoItem: React.FC<TodoItemPropTypes> = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
}) => {
  const component = (
    <li
      className="list-group-item d-flex"
      style={{ backgroundColor: "#1c272a", color: "white" }}
    >
      <span
        className={`align-self-center me-auto ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {" "}
        {todo.description}{" "}
      </span>

      <button
        className={`btn btn-${todo.done ? "success" : "secondary"}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        <i
          className={`align-self-center bi ${
            todo.done ? "bi-check-square" : "bi-square"
          }`}
        ></i>
      </button>

      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );

  return component;
};
