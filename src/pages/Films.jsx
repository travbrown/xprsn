import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import '../styles/Films.css';

const films = [
  { id: 'BZp7v1R4DlE', title: 'Tobago - Short Film (2022)' },
  { id: '802VtWojfjo', title: 'An Ital Tingz Commercial' },
  { id: 'yDpnvh6wSVU', title: 'Falling Edge (2021)' },
  { id: 'R9ue_SbjjQo', title: 'Falling Edge mini reel 1' },
  { id: 'zdjxfn8m1wg', title: 'Mother Earth - Ital Tingz Commercial (2021)' },
  { id: 'V6IfQHg52BM', title: 'Lessons from Ghana' },
];

function Films() {
  const [activeFilm, setActiveFilm] = useState(null);

  const closeLightbox = useCallback(() => setActiveFilm(null), []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (activeFilm) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activeFilm, closeLightbox]);

  return (
    <div className="films-page">
      <Header dark />

      <main className="films-main">
        <h1 className="films-heading">Films</h1>
        <div className="films-grid">
          {films.map((film) => (
            <button
              key={film.id}
              className="film-card"
              onClick={() => setActiveFilm(film)}
            >
              <img
                src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
                alt={film.title}
                className="film-card__thumb"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://img.youtube.com/vi/${film.id}/hqdefault.jpg`; }}
              />
              <div className="film-card__overlay">
                <span className="film-card__title">{film.title}</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {activeFilm && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>&times;</button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeFilm.id}?autoplay=1&rel=0`}
              title={activeFilm.title}
              className="lightbox__iframe"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <p className="lightbox__title">{activeFilm.title}</p>
          </div>
        </div>
      )}

      <Footer dark />
    </div>
  );
}

export default Films;
