import classes from "./modules/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { LoginModalContext } from "../providers/LoginModalProvider";

import ReactDOM from "react-dom";
import Modal from "./UI/Modal";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

const Home = () => {
  const {onRegister, openModal,setOpenModal } = useContext(LoginModalContext);

  const handleClick = () => {
    console.log("click");
    setOpenModal(true);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Modal openModal={openModal} setOpenModal ={setOpenModal}>
          {!onRegister && <LoginForm />}
          {onRegister && <RegisterForm />}
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
