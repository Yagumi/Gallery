import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: ${({ width }) => width};
  height: 100%;
`

export const Image = ({
  className,
  src,
  alt,
  width,
  height,
}) => {

  return (
    <Img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}