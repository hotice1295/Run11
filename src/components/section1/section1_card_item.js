import React from 'react';
import './section1_card_item.css';
import Section1_card_item_inner from './section1_card_item_inner';
import Section1_card_item_inner_text4 from './section1_card_item_inner_text4';
const Section1_card_item = (props) => {
  return (
    <div id={props.id} className="card">
      <Section1_card_item_inner
        text3_value1={props.text3_value2}
        text2_value1={props.text2_value2}
        text1_value1={props.text1_value2}
        text_value1={props.text_value2}
        class_name1={props.class_name2}
      />
    </div>
  );
};
export default Section1_card_item;
