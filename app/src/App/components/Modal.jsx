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
import React, { useState } from "react";
import axios from "axios";

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
  const defUser = { username: "", password: "" };
  const [user, setUser] = useState(defUser);
  const [errors, setErrors] = useState([]);
  const handleSubmit = () => {
    axios.post("/session", user).catch(() => {
      setErrors(["Invalid username or password"]);
    });
  };

  return type === "login" ? (
    <form onSubmit={handleSubmit}>
      {errors.length ? <FormHelperText>{errors[0]} </FormHelperText> : null}
      <FormControl id="username" isRequired>
        <FormLabel>Login</FormLabel>
        <Input
          name="username"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        {button}
      </Button>
    </form>
  ) : (
    <>
      <FormControl id="username" isRequired>
        <FormLabel>Create a username</FormLabel>
        <Input
          name="username"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Create a password</FormLabel>
        <Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <FormHelperText>
          Can contain a minimum of 6 letters and at least one number
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
