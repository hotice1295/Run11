import React from 'react';
import './footer_img.css';
const Footer_img = (props) => {
  return (
    <a href="#">
      <img className="footer_icons" src={props.img} alt=" "></img>
    </a>
  );
};
export default Footer_img;
