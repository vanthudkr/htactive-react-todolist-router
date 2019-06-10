import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoListContext from "../contexts/TodoListContext";

const api = "https://5ce4ac09c1ee360014725c9c.mockapi.io/todoList";

export default props => {
  const [todos, setTodo] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      const res = await axios.get(api);
      const todos = res.data;
      todos.sort((a, b) => (+b.id > +a.id ? 1 : -1));
      setTodo(todos);
      setLoading(false);
    };
    fetchTodo();
  }, []);

  const addTodo = async todo => {
    const res = await axios.post(api, {
      text: todo
    });
    setTodo([res.data, ...todos]);
  };

  const updateTodo = async (text, id) => {
    const todo = {
      text: text,
      isEdit: false
    };

    await axios.put(`${api}/${id}`, todo);
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            text: text,
            isEdit: false,
            complete: false
          };
        } else {
          return todo;
        }
      })
    );
  };

  const toggleComplete = async (id, complete) => {
    const res = await axios.put(`${api}/${id}`, {
      complete: !complete
    });
    setTodo(
      todos.map(todo => {
        if (todo.id === res.data.id) {
          return res.data;
        }
        return todo;
      })
    );
  };

  const closeTodo = id => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit: false
          };
        } else {
          return todo;
        }
      })
    );
  };

  const updateTodoToShow = s => {
    setTodoToShow(s);
  };

  const handleDeleteTodo = async id => {
    const res = await axios.delete(`${api}/${id}`);
    setTodo(todos.filter(todo => todo.id !== res.data.id));
  };

  const editTodo = id => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          //supose to update
          return {
            ...todo,
            isEdit: true
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <TodoListContext.Provider
      value={{
        todos: todos,
        todoToShow: todoToShow,
        addTodo: addTodo,
        editTodo: editTodo,
        updateTodo: updateTodo,
        handleDeleteTodo: handleDeleteTodo,
        updateTodoToShow: updateTodoToShow,
        closeTodo: closeTodo,
        toggleComplete: toggleComplete,
        loading: loading
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};
