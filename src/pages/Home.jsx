import React from 'react';
import {  } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Home.css';
import MenuIcon from '@material-ui/icons/Menu';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./../portfolio/DSC_0223.jpg";
import image2 from "./../portfolio/DSC_2504.jpg";
import image3 from "./../portfolio/DSC_4172.jpg";
import image4 from "./../portfolio/DSC_1322.jpg";
import image5 from "./../portfolio/DSC_2263.jpg";
import image6 from "./../portfolio/DSC_2511.jpg";
import {SocialMediaIconsReact} from 'social-media-icons-react';


function Home() {

  return (
      <body className="pageContent">
        <header className="App-header">
          <div className="headerContainer">
            <div>XPRSN</div>
            <MenuIcon style={{ fontSize: 50 }}></MenuIcon>
          </div>
        </header>
        
        <main>
          {/**Insert Image Slider 
            - Make Awesome slider work
            - else customize Alice Carousel
          */}
          
          {/* <AliceCarousel autoPlay autoPlayInterval="3000">
            
            <img src={image2} className="sliderimg"/>
            <img src={image3} className="sliderimg"/>
            <img src={image4} className="sliderimg"/>
        </AliceCarousel> */}

          {/* <AwesomeSlider animation="cubeAnimation">
            <div data-src={image2} />
            <div data-src={image3} /> 
            <div data-src={image1} />
          </AwesomeSlider> */}
        </main>

        <footer style={{textAlign:"center", marginBottom:"10px"}}>
          <div>{/**Insert contact me button */}
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