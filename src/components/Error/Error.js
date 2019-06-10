import React from "react";
import { Link, withRouter } from "react-router-dom";

const Error = props => {
  // const handleRedirect = event => {
  //   event.preventDefault();
  //   props.history.goBack();
  // };

  console.log(props.history);
  return (
    <div className="errorPage">
      <h1> 404 Page !</h1>
      <Link
        to="/"
        className="btn signin-button"
        // onClick={event => {
        //   handleRedirect(event);
        // }}
      >
        Go back !
      </Link>
    </div>
  );
};

export default withRouter(Error);
