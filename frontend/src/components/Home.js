import classes from "./modules/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./UI/Modal";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [onRegister, setOnRegister] = useState(false);

  const handleClick = () => {
    console.log("click");
    setOpenModal(true);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          {!onRegister && <LoginForm setOnRegister={setOnRegister} />}
          {onRegister && <RegisterForm setOnRegister={setOnRegister} />}
        </Modal>,
        document.querySelector("#modal")
      )}
      <main className={classes.main}>
        <button className={classes["user-btn"]} onClick={handleClick}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </main>
    </>
  );
};

export default Home;
