import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import '../../styles/ImgDisplay.css';

export const ImgDisplay = ({ imgFullPath }) => {
  const [url, setUrl] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storage = firebase.storage();
    const imgRef = storage.ref(imgFullPath);
    imgRef.getDownloadURL()
      .then((imageUrl) => {
        setUrl(imageUrl);
      })
      .catch((error) => {
        console.log('Error loading image:', error);
      });
  }, [imgFullPath]);

  return (
    <div className="img-card">
      {/* Skeleton loader — visible until image loads */}
      {!loaded && (
        <div className="img-skeleton">
          <div className="img-skeleton-shimmer" />
        </div>
      )}

      {url && (
        <img
          className={`img-photo ${loaded ? 'img-photo--loaded' : ''}`}
          src={url}
          alt=""
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};
