import React from 'react';
import './section1_card_item_inner.css';
import Section1_card_item_inner_text1 from './section1_card_item_inner_text1';
import Section1_card_item_inner_text2 from './section1_card_item_inner_text2';
import Section1_card_item_inner_text3 from './section1_card_item_inner_text3';
const Section1_card_item_inner = (props) => {
  return (
    <div className="inner_card">
      <Section1_card_item_inner_text1 text_value={props.text_value1} />
      <Section1_card_item_inner_text2
        text1_value={props.text1_value1}
        text2_value={props.text2_value1}
        text3_value={props.text3_value1}
      />
      <Section1_card_item_inner_text3 class_name={props.class_name1} />
    </div>
  );
};
export default Section1_card_item_inner;
