import React, { useEffect } from 'react';

import { useStore } from '../contexts/storeContext';
import { ModalContainer } from '../features/modal/ModalContainer';
import { MainViewContainer } from '../features/mainView/MainViewContainer';
import { PreviewerContainer } from '../features/previewer/PreviewerContainer';

export const AppContent = () => {
  const {fetchImages, isModalOpen } = useStore();

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <MainViewContainer />
      <PreviewerContainer/>
      { isModalOpen && <ModalContainer /> }
    </>
  );
}