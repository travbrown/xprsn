import React from 'react';

const SocialLink = ({ href, label, dark }) => {
  const color = dark ? 'rgba(255,255,255,0.6)' : '#555';
  const hoverColor = dark ? '#fff' : '#1a1a1a';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 400,
        fontSize: '0.75rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={e => e.target.style.color = hoverColor}
      onMouseLeave={e => e.target.style.color = color}
    >
      {label}
    </a>
  );
};

export const Footer = ({ dark }) => {
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#e0e0e0';
  const textColor = dark ? 'rgba(255,255,255,0.35)' : '#999';

  return (
    <footer style={{
      padding: '32px',
      borderTop: `1px solid ${borderColor}`,
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '28px',
        marginBottom: '20px',
        flexWrap: 'wrap',
      }}>
        <SocialLink href="https://instagram.com/_xprsv" label="Instagram" dark={dark} />
        <SocialLink href="https://x.com" label="X" dark={dark} />
        <SocialLink href="https://linkedin.com/in/xprsv" label="LinkedIn" dark={dark} />
        <SocialLink href="https://github.com/travbrown" label="GitHub" dark={dark} />
      </div>
      <p style={{
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 300,
        fontSize: '0.7rem',
        letterSpacing: '0.06em',
        color: textColor,
        margin: 0,
      }}>
        &copy; {new Date().getFullYear()} XPRSV
      </p>
    </footer>
  );
};
