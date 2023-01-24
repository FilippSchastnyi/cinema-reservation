import React from 'react';
import MarqueeScc from './Marquee.module.scss';
import '@css/common/section.scss';
import '@css/common/text.scss';

const Marquee = () => (
  <div className="section section--marquee">
    <div className={MarqueeScc.marquee}>
      <div className={MarqueeScc.list}>
        <span className="title--subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab commodi consequatur distinctio, facere illum ipsam libero
          molestias nam necessitatibus odit
        </span>
      </div>
    </div>
  </div>
);

export default Marquee;
