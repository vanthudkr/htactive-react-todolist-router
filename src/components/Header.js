import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "./Logo";
import ButtonColor from "./ButtonColor";
import SignOut from "./SignOut";
import Error from "./Error/Error";

const Headers = props => {
  const pageHomeURL = "/home";
  const pageLoginURL = "/";

  console.log("thus", props.location.pathname);
  if (pageLoginURL === props.location.pathname) {
    return (
      <div className="item item1">
        <h1 className="header__title">Todo React</h1>
        <ul className="header__actions">
          <Logo />
          <ButtonColor />
        </ul>
      </div>
    );
  } else if (pageHomeURL === props.location.pathname) {
    return (
      <div className="item item1">
        <h1 className="header__title">Todo React</h1>
        <ul className="header__actions">
          <Logo />
          <SignOut />
        </ul>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default withRouter(Headers);
