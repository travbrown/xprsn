import React from 'react';
import {  } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Home.css';
import MenuIcon from '@material-ui/icons/Menu';
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