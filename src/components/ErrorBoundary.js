import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default props => {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(modalIsOpen);
  };

  useEffect((error, errorInfo) => {
    setError(error);
    setErrorInfo(errorInfo);
  }, []);

  if (errorInfo) {
    return (
      <div>
        <Modal
          isOpen={openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>x</button>
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {error && error.toString()}
              <br />
              {errorInfo.componentStack}
            </details>
          </div>
        </Modal>
      </div>
    );
  }
  return props.children;
};
