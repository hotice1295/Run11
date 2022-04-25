import React from 'react';
import './header_icons.css';
const Header_icons = (props) => {
  return (
    <a href="*">
      <img className="head_icons" src={props.icon} alt="іконка"></img>
    </a>
  );
};
export default Header_icons;
