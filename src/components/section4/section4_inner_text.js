import React from 'react';
import './section4_inner_text.css';
import Section4_name from './section4_name';
import Section4_text from './section4_text';
import Section4_text1 from './section4_text1';
const Section4_inner_text = (props) => {
  return (
    <div id="section4_inner_text">
      <Section4_name name={props.name1} />
      <Section4_text text={props.text1} />
      <Section4_text1 />
    </div>
  );
};
export default Section4_inner_text;
