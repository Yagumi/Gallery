import React from 'react';
import styled from 'styled-components';

import { PreviewerItem } from './PreviewerItem';

const ImagesList = styled.ul`
  display: flex; 
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const PreviewerList = ({ list }) => {
  return (
    <ImagesList>
      {
        list.map(image => (
          <PreviewerItem
              key={image.id}
              id={image.id}
              src={image.photo_604}
          />
        ))
      }
    </ImagesList>
  );
}