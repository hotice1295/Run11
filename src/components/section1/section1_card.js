import React from 'react';
import './section1_card.css';
import Section1_card_item from './section1_card_item';
const Section1_card = () => {
  return (
    <div id="card">
      <Section1_card_item
        id={'card1'}
        text_value2={'OUR MISSION'}
        text1_value2={'Our Club promotes and friendship through running.'}
        class_name2={'button_more'}
      />
      <Section1_card_item
        id={'card2'}
        text_value2={'TRAINING'}
        text1_value2={' Our trainers will keep you challenged and engaged'}
        class_name2={'button_more'}
      />
      <Section1_card_item
        id={'card3'}
        text_value2={'MEMBERSHIP'}
        text1_value2={'$200/year (includes'}
        text2_value2={' weekly workout and'}
        text3_value2={' training shirt)'}
        class_name2={'button_more1'}
      />
    </div>
  );
};
export default Section1_card;
