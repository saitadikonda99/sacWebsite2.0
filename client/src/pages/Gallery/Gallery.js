import React from 'react';
import './Gallery.css';

const Gallery = () => {


    const images = [
        { id: 1, url: "https://drive.google.com/uc?id=1BGIApZs3E3ViAsaQwPowzvqhG7nAhwtk", alt: "Image 1" },
        { id: 2, url: "https://drive.google.com/uc?id=1_DrObrZxThSXUZYUUg8cZTQg-dn4DJ3Q", alt: "Image 2" },
        { id: 3, url: "https://drive.google.com/uc?id=DRIVE_FILE_ID_3", alt: "Image 3" }
    ]


  return (
    <div className='GalleryComponent'>
      <div class="gallery-image">
    <div class="img-box">
    {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.alt} />
      ))}
      <div class="transparent-box">
        <div class="caption">
          <p>Library</p>
          <p class="opacity-low">Architect Design</p>
        </div>
      </div> 
    </div>
  </div>
    </div>
  )
}

export default Gallery; // Export the Gallery component
