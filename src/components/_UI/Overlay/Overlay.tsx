import React, { ReactElement } from 'react';
import OverlayCss from './Overlay.module.scss';

const Overlay = ({ onHandleOverlayClick }: { onHandleOverlayClick: () => void }): ReactElement => (
  <div
    aria-hidden
    className={OverlayCss.overlay}
    onClick={() => {
      onHandleOverlayClick();
    }}
  />
);

export default Overlay;
