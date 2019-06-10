import React, { Component } from "react";
import axios from "axios";
import TodoListContext from "../contexts/TodoListContext";

const api = "http://5ce4ac09c1ee360014725c9c.mockapi.io/todoList";
export default class TodoListProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoToshow: "all"
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(api);
    const todos = res.data;
    todos.sort((a, b) => (+b.id > +a.id ? 1 : -1));
    this.setState({
      todos,
      loading: false
    });
  }

  addTodo = todo => {
    axios
      .post(api, {
        text: todo
      })
      .then(res => {
        this.setState({
          todos: [res.data, ...this.state.todos]
        });
      });
  };

  updateTodo = (text, id) => {
    console.log("object");
    const todo = {
      text: text,
      isEdit: false
    };

    axios.put(`${api}/${id}`, todo).then(res => {
      console.log(res);
      console.log(res.data);
    });
    this.setState({
      todos: this.state.todos.map(todo => {
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
    });
  };

  toggleComplete = (id, complete) => {
    axios
      .put(`${api}/${id}`, {
        complete: !complete
      })
      .then(res => {
        const data = res.data;

        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === data.id) {
              return data;
            }
            return todo;
          })
        });
      });
  };

  closeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit: false
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToshow = s => {
    this.setState({
      todoToshow: s
    });
  };

  handleDeleteTodo = async id => {
    await axios.delete(`${api}/${id}`).then(res => {
      console.log(res);
      console.log(res.data);
      const data = res.data;
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== data.id)
      });
    });
  };

  editTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
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
    });
  };

  render() {
    return (
      <TodoListContext.Provider
        value={{
          todos: this.state.todos,
          todoToshow: this.state.todoToshow,
          addTodo: this.addTodo,
          editTodo: this.editTodo,
          updateTodo: this.updateTodo,
          handleDeleteTodo: this.handleDeleteTodo,
          updateTodoToshow: this.updateTodoToshow,
          closeTodo: this.closeTodo,
          toggleComplete: this.toggleComplete,
          loading: this.state.loading
        }}
      >
        {this.props.children}
      </TodoListContext.Provider>
    );
  }
}
