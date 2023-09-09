import React from 'react';
import './Gallery.css';

import Footer from '../../components/Footer/Footer';
import HomeNav from '../../components/HomeNav/HomeNav';

const images = [
  {
    src: 'https://picsum.photos/350/250?image=444',
    title: 'Library',
    category: 'Architect Design',
  },
  {
    src: 'https://picsum.photos/350/250/?image=232',
    title: 'Night Sky',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250/?image=431',
    title: 'Tea Talk',
    category: 'Composite',
  },
  {
    src: 'https://picsum.photos/350/250?image=474',
    title: 'Road',
    category: 'Landscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  }
];

const Gallery = () => {
  return (
    <div className="Gallery-component">
      <div className="Gallery-nav">
        <HomeNav />
      </div>
      <div className="Gallery-header">
        <h1>Journey Through Time: <span>Unveiling Unforgettable Memories in Our Gallery</span> </h1>
      </div>
      <div className="Gallery-one">
      {images.map((image, index) => (
        <div className="img-box" key={index}>
          <img src={image.src} alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>{image.title}</p>
              <p className="opacity-low">{image.category}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="Gallery-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
