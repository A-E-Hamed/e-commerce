import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useColorMode } from "@chakra-ui/react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const { colorMode } = useColorMode();
  const cardClass =
    colorMode === "dark" ? classes.darkBackground : classes.lightBackground;

  return (
    <div className={`${classes.modal} ${cardClass}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
