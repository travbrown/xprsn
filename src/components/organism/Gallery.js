import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import '../../firebase'; // ensures initializeApp runs before storage calls
import { Column } from '../molecules/Column';

export function Gallery({ folder_name }) {
  const [columns, setColumns] = useState([[], [], []]);

  useEffect(() => {
    const allImages = [];
    const storage = firebase.storage();
    const folderRef = storage.ref(folder_name);

    folderRef.listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          allImages.push(itemRef.fullPath);
        });

        // Shuffle
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
      })
      .catch((error) => {
        console.log('Error loading images:', error);
      });
  }, [folder_name]);

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
