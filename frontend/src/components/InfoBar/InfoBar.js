import React from 'react';
import './InfoBar.css';
import { Button } from 'react-bootstrap';
import "../parturients.css"

const InfoBar = ({ room }) => (
  <div className="">
    <div className="">

      <h3>{room}</h3>
    </div>
    <div className="">
      <Button className="button-update"><a href="/">leave room</a></Button>
      
    </div>
  </div>
);

export default InfoBar;