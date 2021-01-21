import React from 'react';
import styled from 'styled-components';

import { PreviewerListContainer } from './PreviewerListContainer';
import { Arrow } from '../../elements/Arrow';
import { Image } from '../../elements/Image';

import prev from '../../static/back.svg';
import next from '../../static/next.svg';

const PreviewerWrapper = styled.div`
  width: 50%;
  height: 80px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
`

export const Previewer = ({ list, handleNext, handlePrev, isFetching }) => {
  return (
    <PreviewerWrapper>
      <Arrow
        handleClick={handlePrev}
        isFetching={isFetching}
      >
        <Image 
          src={prev}
          width="100%"
        />
      </Arrow>
      <PreviewerListContainer list={list} />
      <Arrow
        handleClick={handleNext}
        isFetching={isFetching}
      >
        <Image 
          src={next}
          width="100%"
        />
      </Arrow>
    </PreviewerWrapper>
  );
}