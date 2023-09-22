import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
