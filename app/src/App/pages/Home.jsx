import React, { useState } from "react";
import Modal from "../components/Modal";
import { Button } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [modal, toggleModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [redirect, setRedirect] = useState(false);
  const [modalType, changeModal] = useState("login");

  const handleModalState = () => {
    modal ? toggleModal(false) : toggleModal(true);
  };

  const manageModal = (type) => {
    changeModal(type);
    handleModalState();
  };

  return redirect ? (
    <Redirect to="/tasks" />
  ) : (
    <>
      <Modal
        modalType={modalType}
        handleModalState={handleModalState}
        modal={modal}
      />
      <div>
        <h1>Welcome</h1>
        <Button onClick={() => manageModal("login")}>Login</Button>
        <Button onClick={() => manageModal("register")}>Register</Button>
        <Button onClick={() => setRedirect(true)}>Try as a guest</Button>
      </div>
    </>
  );
};
export default Home;
