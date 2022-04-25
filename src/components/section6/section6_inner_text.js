import React from 'react';
import './section6_inner_text.css';
import Section4_name from '../section4/section4_name';
import Section4_text from '../section4/section4_text';
import Section6_text from './section6_text';
const Section6_inner_text = () => {
  return (
    <div id="section6_inner_text">
      <Section4_name name={'02'} />
      <Section4_text text={'How can I get motivated to run?'} />
      <Section6_text id={'section6_text1'} text={'Just Go. ...'} />
      <Section6_text
        text={
          "Schedule Your Run Into Your Day Like It's An Appointment You Can't Miss."
        }
      />
      <Section6_text text={'Plan Around Your Workout. '} />
      <Section6_text text={'Reward Yourself For Going.'} />
      <Section6_text text={'Get Some Fun Workout Clothes.'} />
      <Section6_text text={"Commit To A Running Group's Weekly Run."} />
      <Section6_text text={'Download Some Motivational Music.'} />
    </div>
  );
};
export default Section6_inner_text;
