import React from 'react';
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
  return (
    <div className="films-page">
      <Header dark />

      <main className="films-main">
        <h1 className="films-heading">Films</h1>
        <div className="films-grid">
          {films.map((film) => (
            <a
              key={film.id}
              href={`https://www.youtube.com/watch?v=${film.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="film-card"
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
            </a>
          ))}
        </div>
      </main>

      <Footer dark />
    </div>
  );
}

export default Films;
