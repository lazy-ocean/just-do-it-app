/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import Form from "./Form";

const ModalTxt = {
  login: {
    header: "Welcome back!",
  },
  register: {
    header: "Register",
  },
};

const ModalWindow = (props) => {
  const { modalType, modal, handleModalState } = props;
  const { header } = ModalTxt[modalType];
  return (
    <Modal
      isOpen={modal}
      onRequestClose={handleModalState}
      className="modal"
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={handleModalState}>Close Modal</button>
      {header}
      <Form type={modalType} />
    </Modal>
  );
};

export default ModalWindow;
