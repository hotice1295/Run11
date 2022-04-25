import React from 'react';
import './section6_text.css';
const Section6_text = (props) => {
  return (
    <p id={props.id} className="section6_text">
      <img
        className="section6_icon"
        src="https://i.imgur.com/p6dGLk0.png"
        alt="Іконка"
      ></img>
      {props.text}
    </p>
  );
};
export default Section6_text;
