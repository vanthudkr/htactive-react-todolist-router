import React, { useContext } from "react";
import TodoList from "../components/todo/TodoList";
import TodoListProvider from "../components/TodoListProvider";
import TodoListContext from "../contexts/TodoListContext";
import IsHomeContext from "../contexts/IsHomeContext";

import "./Home.css";

const Home = props => {
  const homes = useContext(IsHomeContext);
  console.log("sss", homes);

  if (homes.isHome === true) {
    return (
      <TodoListProvider>
        <TodoListContext.Consumer>
          {rest => <TodoList {...rest} />}
        </TodoListContext.Consumer>
      </TodoListProvider>
    );
  }
  return;
};

export default Home;
