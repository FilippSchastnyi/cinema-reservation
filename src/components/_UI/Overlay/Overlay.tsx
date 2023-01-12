import React, { ReactElement } from 'react';
import classes from './Overlay.module.scss';

function Overlay({ onHandleOverlayClick }: { onHandleOverlayClick: () => void }): ReactElement {
  return (
    <div
      aria-hidden
      className={classes.overlay}
      onClick={() => {
        onHandleOverlayClick();
      }}
    />
  );
}

export default Overlay;
