import React, { useState } from "react";
import Button from "./Button";

const Content = props => {
  const [socials] = useState(["google", "github", "twitter"]);

  return (
    <div className="flexcontainer">
      <div className="signin">
        <h1 className="sign-in__heading">Sign in</h1>
        {socials.map((s, key) => (
          <Button key={key} text={s} onLogin={props.onLogin} />
        ))}
      </div>
    </div>
  );
};

export default Content;
