import React from 'react';
import './section8_form_bottom.css';
import Section8_form_bottom_part from './section8_form_bottom_part';
const Section8_form_bottom = () => {
  return (
    <div id="section8_form_bottom">
      <Section8_form_bottom_part
        img1={'https://i.imgur.com/5PviOqB.png'}
        text_value1={'ADDRESS'}
        text1_value1={'27 13 Lowe'}
        text2_value1={'Haven'}
        id1={'section8_form_bottom_text2'}
      />
      <Section8_form_bottom_part
        img1={'https://i.imgur.com/BXd41yF.png'}
        text_value1={'PHONE'}
        text1_value1={'111 343 43'}
        text2_value1={'43'}
        id1={'section8_form_bottom_text3'}
      />
      <Section8_form_bottom_part
        img1={'https://i.imgur.com/WqSE1sS.png'}
        text_value1={'EMAIL'}
        text1_value1={'business@info.com'}
      />
    </div>
  );
};
export default Section8_form_bottom;
