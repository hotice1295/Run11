import React from 'react';
import './section8_form_bottom_part.css';
import Section8_form_bottom_img from './section8_form_bottom_img';
import Section8_form_bottom_text from './section8_form_bottom_text';
import Section8_form_bottom_text1 from './section8_form_bottom_text1';
const Section8_form_bottom_part = (props) => {
  return (
    <div className="section8_form_bottom_part">
      <Section8_form_bottom_img img={props.img1} />
      <Section8_form_bottom_text text_value={props.text_value1} />
      <Section8_form_bottom_text1
        text1_value={props.text1_value1}
        text2_value={props.text2_value1}
        id={props.id1}
      />
    </div>
  );
};
export default Section8_form_bottom_part;
