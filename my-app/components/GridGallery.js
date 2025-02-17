import React from 'react'
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function GridGallery({ images }) {
    const [imagesShownArray, setImagesShownArray] = useState(
      Array(images.length).fill(false)
    );
  
    const imageVisibleChange = (index, isVisible) => {
      if (isVisible) {
        setImagesShownArray((currentImagesShownArray) => {
          currentImagesShownArray[index] = true;
          return [...currentImagesShownArray];
        });
      }
    };
  
    return (
   

      <div className="mx-20 mt-10 grid grid-cols-2 ">
        {images &&
          images.map((imageUrl, index) => (
            <VisibilitySensor
              key={index}
              partialVisibility={true}
              offset={{ bottom: 80 }}
              onChange={(isVisible) => imageVisibleChange(index, isVisible)}
            >
              <GridGalleryCard
                imageUrl={imageUrl}
                show={imagesShownArray[index]}
              />
            </VisibilitySensor>
          ))}
      </div>
    );
  }
  
  function GridGalleryCard({ imageUrl, show }) {
    return (
      

      <div
        className={`  
        relative transition ease-in duration-300 transform ${
          show ? "" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm italic">
            Event Type
          </div>
        </div>
        <img className='lg:h-96 h-40 w-96 lg:w-[600px]' src={imageUrl} alt="" />
      </div>
   
    );
  }
  