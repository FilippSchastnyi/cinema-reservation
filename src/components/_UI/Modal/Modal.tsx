import React from 'react';
import classes from './Modal.module.scss';
import Portal from '../../Portal/Portal';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';

interface IModal {
  isOpen?: boolean;
  children?: JSX.Element;
  closePopup: () => void;
}

function Modal({ isOpen = false, children, closePopup }: IModal): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closePopup} />
        <div className={classes.modal}>
          {children}
          <Button onClick={closePopup}>
            <span>Close</span>
          </Button>
        </div>
      </>
    </Portal>
  );
}

export default Modal;
