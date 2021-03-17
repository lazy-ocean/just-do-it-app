/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";

const ModalTxt = {
  login: {
    header: "Welcome back!",
    button: "Login",
  },
  register: {
    header: "Register",
    button: "Create account",
  },
};

const Form = ({ type, button }) => {
  return type === "login" ? (
    <form action="/session" method="post">
      <FormControl id="username" isRequired>
        <FormLabel>Login</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        {button}
      </Button>
    </form>
  ) : (
    <>
      <FormControl id="email" isRequired>
        <FormLabel>Create a login</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Create a password</FormLabel>
        <Input />
        <FormHelperText>
          Can contain a minimum of 6 letters with numbers
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue">{button}</Button>
    </>
  );
};

const ModalWindow = (props) => {
  const { modalType, modal, handleModalState } = props;
  const { header, button } = ModalTxt[modalType];
  return (
    <Modal isOpen={modal} onClose={handleModalState}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form type={modalType} button={button} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
