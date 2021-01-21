import React from 'react';
import styled from 'styled-components';

import { Image } from '../../elements/Image';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ModalContent = styled.div`
  position: absolute;
  width: 1190px;
  height: 700px;
  margin: 0 auto;
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(30px);
  z-index: 1;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1190px;
  height: 700px;
  z-index: 9999;
`
const Img = styled(Image)`
  width: auto;
  height: 100%;
  z-index: 9999;
`

export const Modal = ({ src, handleClose }) => {
  return (
    <ModalWrapper onClick={handleClose}>
      <ModalContent src={src} />
      <ImageWrapper>
        <Img 
          className=''
          src={src}
        />
      </ImageWrapper>
    </ModalWrapper>
  );
}