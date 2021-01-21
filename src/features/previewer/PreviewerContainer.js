import React from 'react';

import { useStore } from '../../contexts/storeContext';
import { Previewer } from './Previewer';

export const PreviewerContainer = () => {
  const {getPreviewerList, getNextImage, getPrevImage, isFetching } = useStore();
  
  const handleNext = () => {
    getNextImage();
  }

  const handlePrev = () => {
    getPrevImage();
  }

  return (
    <Previewer
      list={getPreviewerList()}
      handleNext={handleNext}
      handlePrev={handlePrev}
      isFetching={isFetching}
    />
  );
}