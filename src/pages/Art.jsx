import React from 'react';
import { Header } from '../components/molecules/Header';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../styles/Art.css';
import { Container } from '@material-ui/core';
import { Gallery } from '../components/organism/Gallery';

function Art() {
 
  return (
    <Container className="pageContent">
        <Header></Header>

        {/* <Body></Body> */}
        <main>
          <Gallery folder_name={'photography/'}/>
          {/* Can't call images from firebase anymore, change to cloudinary */}

        </main>
        
        
    </Container>
  );
}

export default Art;