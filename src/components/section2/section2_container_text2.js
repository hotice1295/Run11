import React from 'react';
import './section2_container_text2.css';
import Section2_container_text3 from './section2_container_text3';
const Section2_container_text2 = (props) => {
  return (
    <span className="text_inner_container">
      {props.text_value}
      <Section2_container_text3 text1_value={props.text1_value1} />
    </span>
  );
};
export default Section2_container_text2;
