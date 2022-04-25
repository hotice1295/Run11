import React from 'react';
import './section7_left_part_text_wrapper.css';
import Section7_left_part_text from './section7_left_part_text';
import Section7_left_part_button from './section7_left_part_button';
const Section7_left_part_text_wrapper = () => {
  return (
    <div id="section7_left_part_text_wrapper">
      <Section7_left_part_text
        text_value={'Avoid caffeine or alcohol three hours before'}
        text1={'bedtime.'}
      />
      <Section7_left_part_text text_value={"Don't take midday naps."} />
      <Section7_left_part_text
        text_value={'Get into a nightly routine to help you unwind,'}
        text1={
          'such as a warm bath, meditation, or listening to calming music.'
        }
      />
      <Section7_left_part_text
        text_value={'Plan to go to sleep at the same time every '}
        text1={'night.'}
      />
      <Section7_left_part_button />
    </div>
  );
};
export default Section7_left_part_text_wrapper;
