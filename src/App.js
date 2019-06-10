import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import ColorProvider from "./components/ColorProvider";
import RouterURL from "./components/RouterURL/RouterURL";
import IsHomeProvider from "./components/IsHomeProvider";

const App = props => {
  const history = createBrowserHistory();
  console.log(history);
  return (
    <ColorProvider>
      <IsHomeProvider>
        <Router history={history}>
          <div>
            <div className="container">
              <Header onChangeColor={props.changeColor} />
            </div>
            <RouterURL />
          </div>
        </Router>
      </IsHomeProvider>
    </ColorProvider>
  );
};
export default App;
