import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${({ width }) => width};
  padding:0;

  &:hover {
    background-color: #a6aba7;
  } 
`

export const Arrow = ({ children, width, handleClick, isFetching }) => {
  return (
    <Button
      width={width} 
      onClick={handleClick}
      disabled={isFetching ? true : false}
    >
      {children}
    </Button>
  );
}