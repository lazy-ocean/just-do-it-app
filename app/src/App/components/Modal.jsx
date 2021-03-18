/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
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
    <Modal isOpen={modal} onClose={handleModalState}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form type={modalType} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
