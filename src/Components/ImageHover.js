import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleImageCarosel from './SingleImageCarosel'
function ImageHover() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    const images = [
        { id: 1, src: '/img/parts1.jpeg', alt: 'Image 1' },
        { id: 2, src: '/img/parts2.jpeg', alt: 'Image 2' },
        { id: 3, src: '/img/parts4.jpeg', alt: 'Image 3' },
        { id: 4, src: '/img/parts3.jpeg', alt: 'Image 4' },
        // { id: 5, src: '/img/parts5.jpeg', alt: 'Image 5' },
        // { id: 6, src: '/img/img3.jpeg', alt: 'Image 6' },
      ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  function handleImageHover(image) {
    setSelectedImage(image);
  }

  return (
    <div className="d-flex align-items-center ">
      <div className="image-list m-3">
        {images.map((image) => (
          <img
          className='side-small-images'
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageHover(image)}
          />
        ))}
      </div>
    <div className='col-3 m-3 p-5'>
    <SingleImageCarosel>
    <img src={selectedImage.src} alt={selectedImage.alt} className='watch-img-big' />
      </SingleImageCarosel> 
   
 
   
     </div>
 
    </div>
  );
}
export default ImageHover

