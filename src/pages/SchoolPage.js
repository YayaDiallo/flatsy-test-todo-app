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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 437px;
  color: #fff;
  margin-top: 5rem;

  h1 {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    width: 350px;
    h1 {
      margin-left: 70px;
    }
  }
`;

export default SchoolPage;
