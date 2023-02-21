import classes from './modules/HeaderProvisional.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { LoginModalContext } from "../providers/LoginModalProvider";

import ReactDOM from "react-dom";
import Modal from "./UI/Modal";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

const HeaderProvisional = () => {
    const { onRegister, setOpenLoginModal, openLoginModal } =
    useContext(LoginModalContext);

  const handleClick = () => {
      setOpenLoginModal(true);
  };
  return (
    <header className = {classes.header}>
        <button className={classes["user-btn"]} onClick={handleClick}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {ReactDOM.createPortal(
        <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal}>
          {!onRegister && <LoginForm />}
          {onRegister && <RegisterForm />}
        </Modal>,
        document.querySelector("#modal")
      )}
    </header>
  )
}

export default HeaderProvisional