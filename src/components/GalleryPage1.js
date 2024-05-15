import React from 'react';
import '../styles/GalleryPage.css';  // Ensure this is the correct path to your CSS file

function GalleryPage1() {
  const imageCount = 56; // Total number of images
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(
      <img key={i} src={`${process.env.PUBLIC_URL}img/img1/buster${i}.webp`} alt={`Buster ${i}`} />
    );
  }

  return (
    <div className="gallery">
      {images}
    </div>
  );
}

export default GalleryPage1;
