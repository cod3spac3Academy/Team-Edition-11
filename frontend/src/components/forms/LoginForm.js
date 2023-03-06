/**
 * @fileoverview This file contains the LoginForm component.
 * @author Alina Dorosh
 */

import Button from "../UI/Button";
import Input from "../UI/Input";
import InfoAlert from "../UI/InfoAlert";
import classes from "./forms_modules/LoginForm.module.css";
import { useContext, useState, useEffect, useRef } from "react";
import { LoginModalContext } from "../../providers/LoginModalProvider";
import ApiRequest from "../../services/apiRequest";
import { EMAIL_REGEX } from "../../utils/regExp";
const LoginForm = () => {
  //access to context
  const { setOnLogin, setOnRegister, openLoginModal, setOpenLoginModal } =
    useContext(LoginModalContext);

  //reference to focus on error message for accesibility
  const errRef = useRef();

  //state to control inputs
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  //state to control succesfull login
  const [succesfullLogin, setSuccesfullLogin] = useState(false);

  //state to control error message
  const [errMsg, setErrMsg] = useState("");

  //state to control email validation
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(loggedUser.email); //email validation with regex
    setValidEmail(result);
  }, [loggedUser.email]);

  useEffect(() => {
    if (errMsg) errRef.current.focus(); //focus on error message for accesibility
  }, [errMsg]);

  //if login modal is closed, reset states
  useEffect(() => {
    if (!openLoginModal) {
      setOnLogin(false);
      setOnRegister(false);
    }
  }, [openLoginModal]);

  //any change in loggedUser state, reset error message
  useEffect(() => {
    setErrMsg("");
  }, [loggedUser]);

  const handleLogin = async (e) => {
    e.preventDefault();

    //if email is not valid, show error message, avoid requests to backend
    if (!validEmail) {
      setErrMsg("Please enter a valid email");
      return;
    }
    const response = await ApiRequest.login(loggedUser);
    if (response.message === "Failed to fetch") {
      setErrMsg("Conection error. Please reload the app");
      succesfullLogin(false);
    }
    if (response.error === "Wrong email or password") {
      setErrMsg(response.error);
      succesfullLogin(false);
    }
    if (response.accessToken) {
      setSuccesfullLogin(true);

      //if remember me is checked, save tokens in localStorage
      if (loggedUser.rememberMe) {
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("role", response.role);
      }
      setTimeout(() => {
        setOpenLoginModal(false);
        setSuccesfullLogin(false);
        //reset loggedUser state after succesfull login
        setLoggedUser({
          email: "",
          password: "",
          rememberMe: false,
        });
      }, 1500);

      sessionStorage.setItem("accessToken", response.accessToken);
      sessionStorage.setItem("refreshToken", response.refreshToken);
      sessionStorage.setItem("userId", response.id);
      sessionStorage.setItem("role", response.role);
    }
  };

  return (
    <form
      className={classes["login-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <h5>Accede a CODE SPACE WORKS</h5>
      {errMsg && (
        <InfoAlert className='alert-red' alertTxt={errMsg} reference={errRef} />
      )}
      {succesfullLogin && (
        <InfoAlert className='alert-green' alertTxt='Signed in successfully' />
      )}

      <label htmlFor='email'>Email</label>
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={loggedUser.email}
        onChange={(e) => {
          setLoggedUser({ ...loggedUser, email: e.target.value });
        }}
      />
      <label htmlFor='password'>Contraseña</label>

      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Contaseña'
        value={loggedUser.password}
        onChange={(e) => {
          setLoggedUser({ ...loggedUser, password: e.target.value });
        }}
      />
      <div className={classes.flex}>
        <div className={classes.remember}>
          <input
            type='checkbox'
            value={loggedUser.rememberMe}
            name='rememberMe'
            onChange={(e) => {
              setLoggedUser({ ...loggedUser, rememberMe: e.target.checked });
            }}
          />
          <label htmlFor='rememberMe'>Recuérdame</label>
        </div>

        {/* open modal with change password form */}
        <a href='#'>Contarseña olvidada?</a>
      </div>
      <Button
        buttonTxt='Acceder'
        onClick={handleLogin}
        disabled={!loggedUser.email || !loggedUser.password ? true : false}
        className={
          !loggedUser.email || !loggedUser.password ? "disabled" : "form-btn"
        }
      />
      <div className={classes["no-account"]}>
        <p>
          ¿No tienes cuenta?
          <span
            className={classes.register}
            onClick={() => {
              setOnRegister(true);
              setOnLogin(false);
            }}
          >
            {" "}
            Regístrate
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
