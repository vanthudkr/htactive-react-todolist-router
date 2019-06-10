import React from "react";
import Content from "../components/Content";
import "./Login.css";

const Login = props => {
  return <Content onLogin={props.onLogin} />;
};

export default Login;
