import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Home.css';

import MenuIcon from '@material-ui/icons/Menu';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Home() {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const [images, setImages] = useState(importAll(require.context('../portfolio', false, /\.(png|jpe?g|svg)$/)));
 
  return (
      <body className="pageContent">
        <header className="App-header">
          <div className="headerContainer">
            <div>XPRSN</div>
            <MenuIcon style={{ fontSize: 50 }}></MenuIcon>
          </div>
        </header>
        <nav></nav>
        <main>
          {
          /**
          Insert Image Slider
            - Make Awesome slider work
            - else customize Alice Carousel
          */
          }

          {
          /*
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <img src={image2} className="sliderimg"/>
              <img src={image3} className="sliderimg"/>
              <img src={image4} className="sliderimg"/>
            </AliceCarousel>
          */
          }

          <AwesomeSlider>
            {images.items.map(image => (
              <div>
                <img
                  src={`public/${image.key}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </AwesomeSlider>
        </main>

        <footer style={{textAlign:"center", marginBottom:"10px"}}>
          <div>
            <a className="contactBTN">
              <Link to="/contact">Contact Me</Link>
            </a>
          </div>
          <div className="socialMediaLinks">
            <SocialMediaIconsReact 
              iconSize="6" 
              size="40" 
              backgroundColor="rgba(20,21,21,1)" 
              iconColor="rgba(255,255,255,1)" 
              roundness="50%" 
              icon="github" 
              url="https://github.com/travbrown"/>
              <div style={{width:"15px"}}></div>
            <SocialMediaIconsReact 
              iconSize="6" 
              size="40" 
              backgroundColor="rgba(20,21,21,1)" 
              iconColor="rgba(255,255,255,1)" 
              roundness="50%" 
              icon="instagram" 
              url="https://instagram.com/_xprsv"/>
              <div style={{width:"15px"}}></div>
            <SocialMediaIconsReact 
              iconSize="6" 
              size="40" 
              backgroundColor="rgba(20,21,21,1)" 
              iconColor="rgba(255,255,255,1)" 
              roundness="50%" 
              icon="linkedin" 
              url="https://linkedin.com/in/xprsn"/>
          </div>
        </footer>
      </body>
  );
}

export default Home;