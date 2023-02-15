import classes from "./modulesUI/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
const Modal = ({ openModal, setOpenModal , children}) => {
  return (
    <>
      <div
        className={`${classes["md-modal"]} 
        ${classes["md-effect"]} ${openModal && classes["md-show"]}`}
      >
        <div className={classes["md-content"]}>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            role='button'
            onClick={() => setOpenModal(false)}
            className={classes.close}
          />

         {children}
        </div>
      </div>
      <div className={classes["md-overlay"]} />
    </>
  );
};

export default Modal;
