import React from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <li>
      <button className="btn">
        <Link to="/">Sign out</Link>
      </button>
    </li>
  );
};

export default SignOut;
