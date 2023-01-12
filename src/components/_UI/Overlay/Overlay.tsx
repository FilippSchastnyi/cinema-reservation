import React, { ReactElement } from 'react';
import classes from './Overlay.module.scss';

const Overlay = ({ onHandleOverlayClick }: { onHandleOverlayClick: () => void }): ReactElement => (
  <div
    aria-hidden
    className={classes.overlay}
    onClick={() => {
      onHandleOverlayClick();
    }}
  />
);

export default Overlay;
