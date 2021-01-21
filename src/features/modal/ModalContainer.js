import React, { useState } from 'react';

import { useStore } from '../../contexts/storeContext';
import { Modal } from './Modal';
import { useEffect } from 'react';

export const ModalContainer = () => {
  const { selectedImageId, imagesList, toggleModal } = useStore();
  const [currentImage, setCurrentImage] = useState()
  
  useEffect(() => {
    const getCurrentImage = () => {
      const img = imagesList.find(item => item.id === selectedImageId);
       setCurrentImage(img); 
    }

    getCurrentImage();
  }, [selectedImageId, imagesList]);

  return (
    <>
      { 
        currentImage && 
        <Modal
          src={currentImage.photo_604}
          handleClose={toggleModal}
        />
      }
    </>
  );
}