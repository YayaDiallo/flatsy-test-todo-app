import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import Tasks from './Tasks';
import CompletedTasks from './CompletedTasks';
import { useTaskContext } from '../context/task_context';

const AddTask = () => {
  const { addTask, tasks, errorMsg } = useTaskContext();

  const [taskValue, setTaskValue] = useState('');

  const handleClick = () => {
    addTask(taskValue);
    setTaskValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <FormGroup>
        <AiFillPlusCircle size={30} onClick={() => handleClick()} />
        <input
          type='text'
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder='Add a task ...'
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <p style={{ display: errorMsg !== '' ? 'block' : 'none' }}>
          {errorMsg}
        </p>
      </FormGroup>
      <Tasks tasks={tasks} />
      <CompletedTasks tasks={tasks} />
    </>
  );
};

const FormGroup = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    width: 260px;
    margin-left: 70px;
  }

  p {
    font-size: 18px;
    text-align: center;
    padding: 6px;
    background: #ff7675;
    border: 1px solid #25252f;
    border-radius: 5px;
  }

  svg {
    position: absolute;
    color: #fc6b97;
    cursor: pointer;
    padding: 5px 0 1px 7px;
  }

  input {
    width: 100%;
    padding: 8px;
    text-align: center;
    background: transparent;
    border: 1px solid #25252f;
    border-radius: 60px;
    color: #fff;

    &:focus {
      border: 3px solid #25252f;
      outline: none;
    }
  }
`;

export default AddTask;
