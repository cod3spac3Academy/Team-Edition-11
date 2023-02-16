import classes from "./modules/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { LoginModalContext } from "../providers/LoginModalProvider";

import ReactDOM from "react-dom";
import Modal from "./UI/Modal";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import img1 from "../assets/img/banner-img-1.png";
import img2 from "../assets/img/banner-img-2.png";
import img3 from "../assets/img/banner-img-3.png";

const Home = () => {
  const { onRegister, setOpenLoginModal, openLoginModal } =
    useContext(LoginModalContext);

  const handleClick = () => {
    console.log("click");
    setOpenLoginModal(true);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal}>
          {!onRegister && <LoginForm />}
          {onRegister && <RegisterForm />}
        </Modal>,
        document.querySelector("#modal")
      )}
      <main className={classes.main}>
        <div className={classes["background"]}></div>
        <button className={classes["user-btn"]} onClick={handleClick}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <div className={classes["main-container"]}>
          {/* <div className={classes["content-container"]}>
            <div className={classes["texto"]}>
              <h5>
                Más de 500 de nuestros alumnos ya estan trabajando en las
                empresas-partners
              </h5>
            </div>
          </div>
        <div className={classes["images-container"]}>
          <div className={classes["images-box"]}>
            <div className={classes["images-row"]}>
              <div className={classes["image-one-box"]}>
                <figure className={classes["image"]}>
                  <img src={img1} alt='people' />
                </figure>             
              </div>
              <div className={classes["image-two-three-box"]}>
                <figure className={classes["image"]}>
                  <img src={img2} alt='people' />
                </figure>
                <figure className={classes["image"]}>
                  <img src={img3} alt='people' />
                </figure>
              </div>
            </div>
          </div>
        </div> */}
        </div>
        

        {/* <div className={classes["images-container"]}>
          <div
            className={`${classes["img1-container"]} ${classes["grid-item"]}`}
          >
            <img src={img1} alt='people' />
          </div>
          <div
            className={`${classes["img2-container"]} ${classes["grid-item"]}`}
          >
            <img src={img2} alt='people' />
          </div>
          <div
            className={`${classes["img3-container"]} ${classes["grid-item"]}`}
          >
            <img src={img3} alt='people' />
          </div>
        </div> */}
        
      </main>
    </>
  );
};

export default Home;
