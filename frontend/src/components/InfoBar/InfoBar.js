import React from 'react';
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