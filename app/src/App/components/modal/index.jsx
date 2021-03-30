/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import Form from "../forms/Form";
import { Button } from "../buttons/";
import { VscChromeClose } from "react-icons/vsc";
import "./modal.css";

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
      overlayClassName="modal__overlay"
    >
      <div className="modal__header">
        <h3 className="modal__h">{header}</h3>
        <Button classn="task" onClick={handleModalState}>
          <VscChromeClose />
        </Button>
      </div>
      <Form type={modalType} />
    </Modal>
  );
};

export default ModalWindow;
