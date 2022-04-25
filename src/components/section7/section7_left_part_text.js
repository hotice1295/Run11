import React from 'react';
import './section7_left_part_text.css';
import Section7_left_part_text1 from './section7_left_part_text1';
const Section7_left_part_text = (props) => {
  return (
    <p className="section7_left_part_text">
      <img src="https://i.imgur.com/JvPvTWi.png" alt=" " />
      {props.text_value}
      <Section7_left_part_text1 text={props.text1} />
    </p>
  );
};
export default Section7_left_part_text;
