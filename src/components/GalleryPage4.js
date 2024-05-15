import React from 'react';
import '../styles/GalleryPage.css';  // Make sure this path is correct and you've created a CSS file for this gallery

function GalleryPage4() {
  const startImage = 157;  // Starting image number for this gallery
  const endImage = 213;  // Ending image number
  const images = [];

  for (let i = startImage; i <= endImage; i++) {
    images.push(
      <img key={i} src={`${process.env.PUBLIC_URL}/img/img4/buster${i}.webp`} alt={`Buster ${i}`} />
    );
  }

  return (
    <div className="gallery">
      {images}
    </div>
  );
}

export default GalleryPage4;
