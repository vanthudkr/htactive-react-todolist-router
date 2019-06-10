import React, { useState } from "react";
import ColorContext from "../contexts/ColorContext";

const ColorProvider = props => {
  const [color, setColor] = useState([34, 34, 34]);

  const formatColor = ary => {
    return "rgb(" + ary.join(", ") + ")";
  };

  const chooseColor = () => {
    for (var i = 0, random = []; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  };

  const changeColor = () => {
    setColor(chooseColor());
  };

  return (
    <ColorContext.Provider
      value={{
        color: formatColor(color),
        changeColor: changeColor
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
