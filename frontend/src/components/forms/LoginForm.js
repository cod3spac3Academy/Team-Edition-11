import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./forms_modules/LoginForm.module.css";
import { useContext, useState } from "react";
import { LoginModalContext } from "../../providers/LoginModalProvider";

const LoginForm = () => {
  const { setOnRegister } = useContext(LoginModalContext);
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
    lastLogin: new Date(),
  });

  const handleLogin = () => {
    console.log(loggedUser);
    setLoggedUser({
      email: "",
      password: "",
      rememberMe: false,
      lastLogin: new Date(),
    });
  };

  return (
    <form
      className={classes["login-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <h5>Accede a CODE SPACE WORKS</h5>
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
            checked
            onChange={(e) => {
              setLoggedUser({ ...loggedUser, rememberMe: e.target.checked });
            }}
          />
          <label htmlFor='rememberMe'>Recuérdame</label>
        </div>

        {/* open modal with change password form */}
        <a href='#'>Contarseña olvidada?</a>
      </div>
      <Button buttonTxt='Acceder' onClick={handleLogin} />
      <div className={classes["no-account"]}>
        <p>
          ¿No tienes cuenta?
          <span
            className={classes.register}
            onClick={() => {
              setOnRegister(true);
            }}
          >  Regístrate
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
