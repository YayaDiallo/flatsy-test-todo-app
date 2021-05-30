import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { useTaskContext } from '../context/task_context';

const CompletedTasks = () => {
  const { tasks, uncompleteTask, deleteTask } = useTaskContext();

  const [arrCompletedTasks, setArrCompletedTasks] = useState([]);

  useEffect(() => {
    const tasksCompleted = tasks.filter((task) => task.completed === true);
    setArrCompletedTasks(tasksCompleted);
  }, [tasks]);

  const handleUnComplete = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    uncompleteTask(findTask);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      deleteTask(id);
    }
  };

  return (
    <Wrapper>
      <h3>Completed - {arrCompletedTasks.length}</h3>
      <ul>
        {arrCompletedTasks.map((task) => (
          <li key={task.id}>
            <RiCheckboxBlankCircleFill
              onClick={() => handleUnComplete(task.id)}
            />
            {task.taskValue}
            <RiCloseCircleFill
              className='delete'
              onClick={() => handleDelete(task.id)}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    margin: 1.5rem 0;
  }

  li {
    width: 411px;
    background: #25252f;
    padding: 6px;
    margin: 10px 0;
    border: 1px solid #25252f;
    border-radius: 5px;
    text-decoration: line-through;
    color: #afafaf;
    text-transform: capitalize;
    word-wrap: break-word;

    svg {
      margin-right: 10px;
      color: #fc6b97;
      cursor: pointer;
    }
    .delete {
      margin-right: 0px;
      color: #fc6b97;
      cursor: pointer;
    }
  }
`;

export default CompletedTasks;
