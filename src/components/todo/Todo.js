import React, { useState } from "react";
import { Prompt, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEdit: PropTypes.boolean,
    complete: PropTypes.boolean
  }).isRequired, // product nhan vao phai la array .isRequied la yeu cau phai co
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  editTodo: PropTypes.func,
  toggleComplete: PropTypes.func,
  updateTodo: PropTypes.func,
  addTodo: PropTypes.func
};

const defaultProps = {
  onDelete: () => {},
  editTodo: () => {},
  toggleComplete: () => {},
  updateTodo: () => {},
  addTodo: () => {},
  onClick: () => {}
};

const Todo = props => {
  const [text, setText] = useState(props.todo.text);
  const [isBlocking, setIsBlocking] = useState(false);

  console.log(isBlocking);

  const handleChange = event => {
    setText(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    if (text) {
      props.updateTodo(text, props.todo.id);
    }
  };

  const handleClose = event => {
    event.preventDefault();
    setText(props.todo.text);
    props.closeTodo(props.todo.id);
  };

  if (props.todo.isEdit === true) {
    return (
      <div className="task-edit">
        <div className="task-item task-item--completed item-input" tabIndex="0">
          <form className="style-form" onSubmit={handleSubmit}>
            <Prompt
              when={isBlocking}
              message={location =>
                `Are you sure you want to go to ${location.search.filter}`
              }
            />
            <input
              name="text"
              className="task-form__input__edit"
              type="text"
              placeholder="To do"
              value={text}
              onChange={handleChange}
            />
          </form>
          <div className="cell padding-left-cell-edit">
            <button
              className="btn btn--icon task-item__button"
              type="button"
              onClick={handleClose}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="task-list">
        <div
          className={
            "task-item " + (props.todo.complete ? "task-item--completed" : "")
          }
          onClick={props.toggleComplete}
          tabIndex="0"
        >
          <div className="cell">
            <button
              className={
                "btn btn--icon " +
                (props.todo.complete
                  ? "task-item__button-completed"
                  : "task-item__button")
              }
              type="button"
            >
              <i className="fas fa-check" />
            </button>
          </div>
          <div className="cell task-name">
            <div
              className="task-item__title"
              style={{ paddingLeft: 20 }}
              tabIndex="0"
            >
              {props.todo.text}
            </div>
          </div>
        </div>
        <div className="task-item">
          <div className="cell padding-cell">
            <button
              className="btn btn--icon task-item__button"
              type="button"
              onClick={props.editTodo}
            >
              <i className="fas fa-pencil-alt" />
            </button>
            <button
              className="btn btn--icon task-item__button"
              type="button"
              onClick={() =>
                window.confirm("Are you sure?") && props.onDelete()
              }
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default withRouter(Todo);
