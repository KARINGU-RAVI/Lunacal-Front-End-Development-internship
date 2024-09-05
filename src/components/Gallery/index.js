import React, { useState } from 'react';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import './index.css'
const defaultImages = [
  
];
const Gallery = () => {
  const [images, setImages] = useState(defaultImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const updatedImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        updatedImages.push(reader.result);
        setImages(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <div className="controls">
          <label className="add-image-btn">
            + Add Image
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />  
          </label>
          <div className='Navbuttons'>
            <button className='arrow-button' onClick={goToNext}>
            <FaRegArrowAltCircleLeft />
          </button>
          <button className='arrow-button'  onClick={goToPrevious}>
          <FaRegArrowAltCircleRight />
        </button>
          </div>
          
        </div>
      </div>
      
      <div className="gallery-display">
        <div class="gallery-item">
          <img
          className="gallery-image"
            src="https://c7.alamy.com/comp/2C1KEH8/single-mute-swan-sitting-in-the-grass-at-the-shore-2C1KEH8.jpg"
            alt="Image1"
          />
        </div>
        <div class="gallery-item">
          <img
          className="gallery-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN1efpeSbqJYPoeE-bIAE8nciowrJfGCTsA&s"
            alt="Image 2"
          />
        </div>
        <div class="gallery-item">
          <img className="gallery-image"
            src="https://kjwb.b-cdn.net/media/17332/nb.png?format=webp"
            alt="Image 3"
          />
        </div>
      
        <div className="gallery-item">
          <img 
            src={images[currentIndex]} 
            alt={`uploaded-${currentIndex}`} 
            className="gallery-image" 
          />
       </div>
       
      </div>
     
    </div>
  );
};

export default Gallery;
