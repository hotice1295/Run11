import React from 'react';
import './section8_form_bottom_text1.css';
const Section8_form_bottom_text1 = (props) => {
  return (
    <p className="section8_form_bottom_text1">
      {props.text1_value}
      <br /> <span id={props.id}>{props.text2_value}</span>
    </p>
  );
};
export default Section8_form_bottom_text1;
