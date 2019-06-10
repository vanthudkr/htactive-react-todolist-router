import React from "react";
import ColorContext from "../contexts/ColorContext";

const ButtonColor = () => {
  return (
    <li>
      <ColorContext.Consumer>
        {({ changeColor }) => (
          <button onClick={changeColor}>
            <i className="fas fa-palette" />
          </button>
        )}
      </ColorContext.Consumer>
    </li>
  );
};

export default ButtonColor;
