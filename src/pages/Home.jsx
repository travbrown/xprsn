import React from 'react';
import { Header } from '../components/molecules/Header';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../styles/Home.css';
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
        
        
    </Container>
  );
}

export default Home;