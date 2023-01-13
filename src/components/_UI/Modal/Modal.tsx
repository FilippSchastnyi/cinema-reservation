import React from 'react';
import classes from './Modal.module.scss';
import Portal from '../../Portal/Portal';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';

interface IModal {
  active?: boolean;
  children?: JSX.Element;
  setActive: (b: boolean) => void;
}

const Modal = ({ active, setActive, children }: IModal): JSX.Element | null => {
  if (!active) return null;
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={() => setActive(false)} />
        <div className={classes.modal}>
          {children}
          <Button onClick={() => setActive(false)}>
            <span>Close</span>
          </Button>
        </div>
      </>
    </Portal>
  );
};

export default Modal;
