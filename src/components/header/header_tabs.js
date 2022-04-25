import React from 'react';
import './header_tabs.css';
const Header_tabs = (props) => {
  return (
    <a className="tabs" href={props.url}>
      {props.name}
    </a>
  );
};
export default Header_tabs;
