import { slide as Menu } from 'react-burger-menu';
import React from 'react';

function Slider() {
    
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/aboutME">About Me</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={()=> showSettings()} className="menu-item--small" href="">Settings</a>
      </Menu>
    );

}
export default Slider;