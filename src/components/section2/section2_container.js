import React from 'react';
import './section2_container.css';
import Section2_container_img from './section2_container_img';
import Section2_container_text1 from './section2_container_text1';
import Section2_container_text2 from './section2_container_text2';
const Section2_container = (props) => {
  return (
    <div className="section2_container">
      <Section2_container_img src={props.src1} />
      <Section2_container_text1 name_container={props.name_container1} />
      <Section2_container_text2
        text_value={props.text_value1}
        text1_value1={props.text1_value2}
      />
    </div>
  );
};
export default Section2_container;
