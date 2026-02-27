import React, { useState } from 'react';
import '../../styles/ImgDisplay.css';

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'xprsv';

export const ImgDisplay = ({ imgFullPath }) => {
  const [loaded, setLoaded] = useState(false);

  const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_600/${imgFullPath}`;

  return (
    <div className="img-card">
      {/* Skeleton loader — visible until image loads */}
      {!loaded && (
        <div className="img-skeleton">
          <div className="img-skeleton-shimmer" />
        </div>
      )}

      <img
        className={`img-photo ${loaded ? 'img-photo--loaded' : ''}`}
        src={url}
        alt=""
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
