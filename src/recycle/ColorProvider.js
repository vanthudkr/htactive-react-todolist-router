import React, { useState } from "react";
import ColorContext from "../contexts/ColorContext";

const ColorProvider = props => {
  const [color, setColor] = useState(true);

  const formatColor = color => {
    let colorCurrent = color === true ? [34, 34, 34] : [0, 0, 0];

    return "rgb(" + colorCurrent.join(", ") + ")";
  };

  const chooseColor = () => {
    return !color;
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
