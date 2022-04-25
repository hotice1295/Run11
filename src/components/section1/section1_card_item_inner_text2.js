import React from 'react';
import './section1_card_item_inner_text2.css';
const Section1_card_item_inner_text2 = (props) => {
  return (
    <h3 className="text_block">
      {props.text1_value} <br /> {props.text2_value} <br /> {props.text3_value}
    </h3>
  );
};
export default Section1_card_item_inner_text2;
