import Button from "../UI/Button";
import Input from "../UI/Input";
import InfoAlert from "../UI/InfoAlert";
import classes from "./forms_modules/LoginForm.module.css";
import { useContext, useState, useEffect, useRef } from "react";
import { LoginModalContext } from "../../providers/LoginModalProvider";
import ApiRequest from "../../services/apiRequest";

const LoginForm = () => {
  const { setOnRegister, setOpenLoginModal } = useContext(LoginModalContext);
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [succesfullLogin, setSuccesfullLogin] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [loggedUser]);

  const errRef = useRef();
  const emailRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await ApiRequest.login(loggedUser);
    if (response === "Failed to fetch") {
      setErrMsg("Conection error. Please reload the app");
      succesfullLogin(false);
    }
    if (response.error === "Wrong email or password") {
      setErrMsg(response.error);
      succesfullLogin(false);
    }
    if (response.accessToken) {
      setSuccesfullLogin(true);
      if (loggedUser.rememberMe) {
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("userId", response.id);
      }
      setTimeout(() => {
        setOpenLoginModal(false);
        setSuccesfullLogin(false);
      }, 1500);

      sessionStorage.setItem("accessToken", response.accessToken);
      sessionStorage.setItem("refreshToken", response.refreshToken);
      sessionStorage.setItem("userId", response.id);
      setLoggedUser({
        email: "",
        password: "",
        rememberMe: false,
      });
    }
    // Update last login date
    const update = await ApiRequest.update(
      { lastLogin: new Date() },
      sessionStorage.getItem("userId")
    );
  };

  return (
    <form
      className={classes["login-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <h5>Accede a CODE SPACE WORKS</h5>
      {errMsg && <InfoAlert className='alert-red' alertTxt={errMsg} reference={errRef}/>}
      {succesfullLogin && (
        <InfoAlert className='alert-green' alertTxt='Signed in successfully' />
      )}

      <label htmlFor='email'>Email</label>
      <Input
        type='email'
        name='userName'
        id='userName'
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
