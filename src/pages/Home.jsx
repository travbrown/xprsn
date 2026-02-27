import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="video-bg">
        <iframe
          src="https://www.youtube.com/embed/BZp7v1R4DlE?autoplay=1&mute=1&loop=1&playlist=BZp7v1R4DlE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <div className="video-overlay" />
      </div>

      <div className="home-content">
        <Header dark />

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
        </section>

        <section className="about">
          <div className="about-inner">
            <h2>About</h2>
            <p>
              XPRSV is a creative portfolio by Trav Brown — a space dedicated to
              the art of seeing. Every frame is an expression, every shot a story
              waiting to be felt.
            </p>
          </div>
        </section>

        <Footer dark />
      </div>
    </div>
  );
}

export default Home;
