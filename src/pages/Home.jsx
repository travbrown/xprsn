import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />

      <section className="hero">
        <h1 className="hero-title">XPRSV</h1>
        <p className="hero-tagline">
          Capturing moments, moods, and meaning through a lens.
        </p>
      </section>

      <section className="domains">
        <Link to="/photography" className="domain-card domain-card--active">
          <span className="domain-name">xprsv.img</span>
          <span className="domain-desc">Photography</span>
        </Link>
        <div className="domain-card domain-card--soon">
          <span className="domain-name">xprsv.film</span>
          <span className="domain-desc">Coming Soon</span>
        </div>
        <div className="domain-card domain-card--soon">
          <span className="domain-name">xprsv.tech</span>
          <span className="domain-desc">Coming Soon</span>
        </div>
      </section>

      <section className="about">
        <div className="about-inner">
          <h2>About</h2>
          <p>
            XPRSV is a visual portfolio by Trav Brown — a space dedicated to
            the art of seeing. Every frame is an expression, every shot a story
            waiting to be felt.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
