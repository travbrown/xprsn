import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ dark }) => {
  const color = dark ? '#fff' : '#1a1a1a';
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#e0e0e0';

  return (
    <header style={{
      padding: '24px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${borderColor}`,
    }}>
      <Link to="/" style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 700,
        fontSize: '1.2rem',
        letterSpacing: '0.15em',
        color,
        textDecoration: 'none',
      }}>
        XPRSN
      </Link>

      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link to="/photography" style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 400,
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color,
          textDecoration: 'none',
        }}>
          Photography
        </Link>
      </nav>
    </header>
  );
};
