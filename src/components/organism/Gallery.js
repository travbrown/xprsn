import React, { useState, useEffect } from 'react';
import { Column } from '../molecules/Column';
import imageIds from '../../data/images.json';

export function Gallery() {
  const [columns, setColumns] = useState([[], [], []]);

  useEffect(() => {
    const allImages = [...imageIds];

    // Shuffle (Fisher-Yates)
    for (let i = allImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    // Split into 3 columns
    const cols = [[], [], []];
    allImages.forEach((img, i) => {
      cols[i % 3].push(img);
    });
    setColumns(cols);
  }, []);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
    }}>
      {columns.map((col, i) => (
        <Column key={i} columnImages={col} />
      ))}
    </div>
  );
}
