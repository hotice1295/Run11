import React from 'react';
import './section5_inner_text.css';
import Section5_inner_text1 from './section5_inner_text1';
import Section5_inner_text2 from './section5_inner_text2';
import Section3_midle_top_text2 from '../section3/section3_midle_top_text2';
const Section5_inner_text = () => {
  return (
    <div id="section5_inner_text">
      <Section5_inner_text1 />
      <Section5_inner_text2 text={'BE'} />
      <Section5_inner_text2 text={'HAPPY!'} />
      <Section3_midle_top_text2 />
    </div>
  );
};
export default Section5_inner_text;
