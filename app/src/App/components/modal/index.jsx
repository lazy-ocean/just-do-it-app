/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import Form from "../forms/Form";
import { Button } from "../buttons/";
import { VscChromeClose } from "react-icons/vsc";
import "./modal.css";

const Redirect = ({ changeModal, modalType }) => {
  return modalType === "register" ? (
    <p className="modal__helper">
      Already have an account?{" "}
      <a onClick={() => changeModal("login")} className="link link--emphasized">
        Log in
      </a>
    </p>
  ) : (
    <p className="modal__helper">
      Don&apos;t have an account?{" "}
      <a
        onClick={() => changeModal("register")}
        className="link link--emphasized"
      >
        Sign up
      </a>
    </p>
  );
};

const ModalTxt = {
  login: {
    header: "Welcome back!",
  },
  register: {
    header: "Register",
  },
};

const ModalWindow = (props) => {
  const { modalType, modal, handleModalState, changeModal } = props;
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
      <Redirect changeModal={changeModal} modalType={modalType} />
      <Form type={modalType} />
    </Modal>
  );
};

export default ModalWindow;
