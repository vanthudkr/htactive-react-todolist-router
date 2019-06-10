import React, { useState } from "react";
import IsHomeContext from "../contexts/IsHomeContext";

const IsHomeProvider = props => {
  const [isHome] = useState(true);
  return (
    <IsHomeContext.Provider value={{ isHome: isHome }}>
      {props.children}
    </IsHomeContext.Provider>
  );
};

export default IsHomeProvider;
