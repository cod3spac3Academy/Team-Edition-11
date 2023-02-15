import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./forms_modules/LoginForm.module.css";
import { useContext } from "react";
import { LoginModalContext } from "../../providers/LoginModalProvider";
const LoginForm = () => {
  const { setOnRegister } = useContext(LoginModalContext);
  
  return (
    <form className={classes["login-form"]}>
      <h5>Accede a CODE SPACE WORKS</h5>
      <label htmlFor='email'>Email</label>
      <Input type='email' name='userName' id='userName' placeholder={"Email"} />
      <label htmlFor='password'>Contraseña</label>

      <Input
        type='password'
        name='password'
        id='password'
        placeholder={"Contaseña"}
      />
      <div className={classes.flex}>
        <div className={classes.remember}>
          <input type='checkbox' />
          <label htmlFor='rememberMe'>Recuérdame</label>
        </div>

        {/* open modal with change password form */}
        <a href='#'>Contarseña olvidada?</a>
      </div>
      <Button buttonTxt='Acceder' />
      <div className={classes["no-account"]}>
        <p>
          ¿No tienes cuenta?
          <span
            className={classes.register}
            onClick={() => {
              setOnRegister(true);
            }}
          > Regístrate</span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
