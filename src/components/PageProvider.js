import React, { useState } from "react";

const PageContext = React.createContext();
const PageProvider = props => {
  const [page, setPage] = useState("SignIn");

  const changePage = () => {
    setPage("Home");
  };

  return (
    <PageContext.Provider
      value={{
        page: page,
        changePage: changePage
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageProvider;
