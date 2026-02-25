import React from 'react';
import { ImgDisplay } from '../atoms/ImgDisplay';

export function Column({ columnImages }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {columnImages.map((imgFullPath) => (
        <ImgDisplay key={imgFullPath} imgFullPath={imgFullPath} />
      ))}
    </div>
  );
}
