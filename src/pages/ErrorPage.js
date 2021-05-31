import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Wrapper>
      <Link to='/school'>Back to task</Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  a {
    text-transform: uppercase;
    background: #65bcb7;
    color: #fff;
    padding: 6px 12px;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 400;
    transition: all 0.3s linear;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border-color: transparent;

    &:hover {
      background: #1abc9c;
    }
  }
`;

export default ErrorPage;
