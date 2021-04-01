import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Modal from "../../components/modal/";
import Header from "../../components/Header";
import { AuthButtonGroup, Button } from "../../components/buttons";
import Footer from "../../components/footer/";
import "./home.css";

const Home = ({ theme, changeTheme }) => {
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
      <Header theme={theme} changeTheme={changeTheme}>
        <AuthButtonGroup manageModal={manageModal} />
      </Header>
      <main className="home__container">
        <Modal
          modalType={modalType}
          handleModalState={handleModalState}
          modal={modal}
          changeModal={changeModal}
        />
        <img src="../../img/cool_girl.png" alt="cool girl coding" />
        <div className="home__main">
          <h1 className="home__h">
            Get things done.
            <br />
            Manage your tasks and achieve more.
          </h1>
          <div className="home__buttons">
            <AuthButtonGroup manageModal={manageModal} />
            <Button onClick={manageGuest} classn="guest">
              Try as a guest
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
