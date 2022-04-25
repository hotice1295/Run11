import React from 'react';
import Header_logo from './header_logo';
import Header_tabs from './header_tabs';
import Header_icons from './header_icons';
import './header.css';
const Header = () => {
  return (
    <div id="header">
      <Header_logo />
      <Header_tabs name={'Тіхонов Сергій'} />
      <Header_tabs name={'GitHub'} url={'https://github.com/hotice1295'} />
      <Header_tabs
        name={'Original Design'}
        url={
          'https://nicepage.com/ru/website-templates/preview/begovoy-klub-dlya-sporta-88779?device=desktop'
        }
      />
      <Header_icons icon={'https://i.imgur.com/zrq4mrY.png'} />
      <Header_icons icon={'https://i.imgur.com/krY6IC3.png'} />
      <Header_icons icon={'https://i.imgur.com/YlhciPM.png'} />
      <span id="menu">
        <Header_icons icon={'https://i.imgur.com/wdHC9mh.png'} />
      </span>
    </div>
  );
};
export default Header;
