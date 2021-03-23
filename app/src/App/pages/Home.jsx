import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Modal from "../components/Modal";
import Header from "../components/Header/";
import { AuthButtonGroup, Button } from "../components/buttons/";

const Home = () => {
  const [modal, toggleModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [modalType, changeModal] = useState("login");

  const handleModalState = () => {
    modal ? toggleModal(false) : toggleModal(true);
  };

  const manageModal = (type) => {
    changeModal(type);
    handleModalState();
  };

  const manageGuest = () => {
    axios
      .post("/guest")
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {});
  };

  return redirect ? (
    <Redirect to="/tasks" />
  ) : (
    <>
      <Header>
        <AuthButtonGroup manageModal={manageModal} />
      </Header>
      <main>
        <Modal
          modalType={modalType}
          handleModalState={handleModalState}
          modal={modal}
        />
        <h1>Welcome</h1>
        <AuthButtonGroup manageModal={manageModal} />
        <Button onClick={manageGuest}>Try as a guest</Button>
      </main>
    </>
  );
};
export default Home;
