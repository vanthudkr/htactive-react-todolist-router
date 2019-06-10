import React, { useState, useEffect } from "react";

const TodoForm = props => {
  const [text, setText] = useState("");
  const textInput = React.createRef();

  useEffect(() => {
    textInput.current.focus();
  });

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={textInput}
        className="task-form__input"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoForm;
