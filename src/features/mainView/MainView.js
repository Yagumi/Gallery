import React from 'react';
import styled from 'styled-components';

import { Arrow } from '../../elements/Arrow';
import { Image } from '../../elements/Image';

const MainViewWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  height: 350px;
  display: flex;
  justify-content:center;
`

const ImageWrapper = styled.div`
  width: inherit;
  height: inherit;
  cursor: pointer;
`

export const MainView = ({url, handleClick, getPrevImage, getNextImage }) => {
  return (
    <MainViewWrapper>
      <Arrow
        width="300px"
        handleClick={getPrevImage}
      />
      <ImageWrapper onClick={handleClick}>
        <Image 
          src={url}
        />
      </ImageWrapper>
      <Arrow
        width="300px"
        handleClick={getNextImage}
      />
    </MainViewWrapper>
  );
}