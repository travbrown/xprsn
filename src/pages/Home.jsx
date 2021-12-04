import React from 'react';
import { Footer } from '../components/molecules/Footer';
import { Header } from '../components/molecules/Header';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../styles/Home.css';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import MenuIcon from '@material-ui/icons/Menu';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Container } from '@material-ui/core';
import { Gallery } from '../components/organism/Gallery';

function Home() {
 
  return (
    <Container className="pageContent">
        <Header></Header>

        {/* <Body></Body> */}
        <main>
          <Gallery folder_name={'photography/'}/>
        </main>
        
        <Footer></Footer>
    </Container>
  );
}

export default Home;