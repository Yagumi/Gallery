import React, { useEffect } from 'react';

import { useStore } from '../../contexts/storeContext';
import { MainView } from './MainView';

export const MainViewContainer = () => {
  const { selectedImageId, getSelectedImage, toggleModal, setCurrentImageId, getPrevImage, getNextImage } = useStore();

  useEffect(() => {
    const getImage = () => {
    }

    getImage()
  }, [selectedImageId])

  const handleClick = () => {
    toggleModal();
    setCurrentImageId(selectedImageId)
  }

  return (
    <MainView
      url={getSelectedImage()}
      handleClick={handleClick}
      getPrevImage={getPrevImage}
      getNextImage={getNextImage}
    />
  );
}