import React from 'react';
import styled from 'styled-components';

import { useStore } from '../../contexts/storeContext';
import { Image } from '../../elements/Image';

const ImgWrapper = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 2%;
  border: ${({ id, selectedImageId }) => 
    id === selectedImageId ? '2px solid red' : 'none'};
    
  &:last-of-type {
    margin: 0;
  }
`

export const PreviewerItem = ({
  className,
  id,
  src,
  alt,
  width,
  height,
}) => {
  const { selectedImageId, setCurrentImageId } = useStore();

  const handleClick = () => {
    setCurrentImageId(id)
  }

  return (
    <ImgWrapper 
      className={className}
      width={width}
      height={height}
      onClick={handleClick}
      id={id}
      selectedImageId={selectedImageId}
    >
      <Image
        className="" 
        src={src}
        alt={alt}
        width="100%"
      />
    </ImgWrapper>
  );
}