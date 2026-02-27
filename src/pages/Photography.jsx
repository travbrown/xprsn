import React from 'react';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import { Gallery } from '../components/organism/Gallery';
import '../styles/Photography.css';

function Photography() {
  return (
    <div className="photography-page">
      <Header dark />

      <main className="photography-main">
        <Gallery />
      </main>

      <Footer dark />
    </div>
  );
}

export default Photography;
