import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { useTaskContext } from '../context/task_context';

const CompletedTasks = () => {
  // Use task_context
  const { tasks, uncompleteTask, deleteTask } = useTaskContext();

  const [arrCompletedTasks, setArrCompletedTasks] = useState([]);

  useEffect(() => {
    const tasksCompleted = tasks.filter((task) => task.completed === true);
    setArrCompletedTasks(tasksCompleted);
  }, [tasks]);

  // Task not performed
  const handleUnComplete = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    uncompleteTask(findTask);
  };

  // Delete taks permanently
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      deleteTask(id);
    }
  };

  return (
    <Wrapper>
      <h3>Completed - {arrCompletedTasks.length}</h3>
      <ul>
        {arrCompletedTasks < 1 ? (
          <p>You have no completed tasks</p>
        ) : (
          arrCompletedTasks.map((task) => (
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
          ))
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    margin: 1.5rem 0;
  }

  p {
    text-align: center;
    font-size: 18px;
    padding: 6px;
    background: #65bcb7;
    border: 1px solid #25252f;
    border-radius: 5px;
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
      display: none;
    }

    &:hover {
      .delete {
        display: inline;
        margin-left: 10px;
        color: #fc6b97;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 600px) {
    width: 260px;
    margin-left: 70px;
    li {
      width: 260px;
    }
  }
`;

export default CompletedTasks;
