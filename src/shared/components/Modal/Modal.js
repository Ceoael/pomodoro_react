import React from "react";

import classes from "./Modal.module.css";

const Modal = ({background, modalOpen, modalName, modalOFF, children}) => {

  // Props:
  //  modalOpen, modalName, modalOFF
    
  return (
    <div
        className={classes.Modal}
        style={{
            background: background,
            opacity: modalOpen ? 1 : 0,
            transform: modalOpen ? 
            'translate(-50%, -50%)' : 'translate(-50%, -200vh)'}}>
            
        <div className={classes.Modal__header}>
            <p>{modalName}</p>
            <div
                className={classes.Modal__closeButton}
                onClick={modalOFF}>
                    <div className={classes.Modal__X}></div>
            </div>
        </div>

        <div className={classes.Modal__contentWrapper}>
            {children}
        </div>
    </div>
  );
};

export default Modal;