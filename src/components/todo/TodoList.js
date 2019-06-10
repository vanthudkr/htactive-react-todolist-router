import React from "react";
import TodoForm from "./TodoForm";
import { withRouter, Link } from "react-router-dom";
import Todo from "./Todo";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorBoundary from "../ErrorBoundary";
import queryString from "query-string";

const TodoList = props => {
  let all = "active";
  let active = "active";
  let complete = "active";
  let numAll = props.todos.filter(todo => todo).length;
  let numActive = props.todos.filter(todo => !todo.complete).length;
  let numComplete = props.todos.filter(todo => todo.complete).length;

  let todos = [];
  const parsed = queryString.parse(props.location.search);
  console.log(props.location);
  if (
    !Object.keys(parsed).length ||
    !parsed.filter ||
    parsed.filter === "all"
  ) {
    todos = props.todos;
    active = "";
    complete = "";
  } else if (parsed.filter === "active") {
    todos = props.todos.filter(todo => !todo.complete);
    all = "";
    complete = "";
  } else if (parsed.filter === "complete") {
    todos = props.todos.filter(todo => todo.complete);
    active = "";  
    all = "";
  }
  return (
    <div className="content-container">
      <div className="content">
        {props.loading && <ClipLoader />}
        <TodoForm onSubmit={props.addTodo} />

        <ul className="task-filters">
          <li onClick={() => props.updateTodoToShow("all")}>
            <Link
              className={all}
              to={{
                search: "?filter=all"
              }}
            >
              View All
            </Link>
          </li>
          <li onClick={() => props.updateTodoToShow("active")}>
            <Link
              className={active}
              to={{
                search: "?filter=active"
              }}
            >
              Active
            </Link>
          </li>
          <li onClick={() => props.updateTodoToShow("complete")}>
            <Link
              className={complete}
              to={{
                search: "?filter=complete"
              }}
            >
              Completed
            </Link>
          </li>
        </ul>

        {todos.map(todo => (
          <ErrorBoundary key={todo.id}>
            <Todo
              toggleComplete={() =>
                props.toggleComplete(todo.id, todo.complete)
              }
              onDelete={() => props.handleDeleteTodo(todo.id)}
              editTodo={() => props.editTodo(todo.id)}
              todo={todo}
              updateTodo={props.updateTodo}
              closeTodo={() => props.closeTodo(todo.id)}
            />
          </ErrorBoundary>
        ))}
        <div className="divide">
          <span>All: {numAll}</span>
          <span>
            Active:
            {numActive ? Math.round((numActive * 100) / numAll) + "%" : "0%"}
          </span>
          <span>
            Completed:
            {numComplete
              ? Math.round((numComplete * 100) / numAll) + "%"
              : "0%"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TodoList);
