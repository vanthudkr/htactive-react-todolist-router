import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import ColorContext from "../contexts/ColorContext";
import IsHomeContext from "../contexts/IsHomeContext";

export default props => {
  const homes = useContext(IsHomeContext);

  const [isRedirect, setIsRedirect] = useState(false);
  const [isHome, setIsHome] = useState(homes.isHome);

  const { color } = useContext(ColorContext);

  const handleOnclick = () => {
    setIsRedirect(true);
    setIsHome(false);
  };

  if (isRedirect) {
    return <Redirect push to="/home" />;
  }
  return (
    <button
      style={{ backgroundColor: color, border: "1px solid #555" }}
      className="btn signin-button"
      type="button"
      onClick={() => handleOnclick()}
    >
      {props.text}
    </button>
  );
};
