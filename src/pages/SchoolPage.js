import React from 'react';
import styled from 'styled-components';
import AddTask from '../components/AddTask';

const SchoolPage = () => {
  return (
    <Wrapper>
      <h1>School</h1>
      <AddTask />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 437px;
  color: #fff;
  margin-top: 5rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export default SchoolPage;
