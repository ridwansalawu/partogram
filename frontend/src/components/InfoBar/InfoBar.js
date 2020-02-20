import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="">
    <div className="">

      <h3>{room}</h3>
    </div>
    <div className="">
      <a href="/">leave room</a>
    </div>
  </div>
);

export default InfoBar;