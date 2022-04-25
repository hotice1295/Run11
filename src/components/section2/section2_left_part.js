import React from 'react';
import './section2_left_part.css';
import Section2_container from './section2_container';
const Section2_left_part = () => {
  return (
    <div id="section2_left_part">
      <Section2_container
        src1={'https://i.imgur.com/w2GObKJ.png'}
        name_container1={'JOIN THE MOVEMENT'}
        /*   text_value1={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        } */
        text1_value2={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        }
      />
      <Section2_container
        src1={'https://i.imgur.com/v7LxHIa.png'}
        name_container1={'TRANSFORM LIVES'}
        /*   text_value1={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        } */
        text1_value2={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        }
      />
      <Section2_container
        src1={'https://i.imgur.com/YqK6UeT.png'}
        name_container1={'TRAIN FOR A RACE'}
        /*   text_value1={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        } */
        text1_value2={
          'Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.'
        }
      />
    </div>
  );
};
export default Section2_left_part;
