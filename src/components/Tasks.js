import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { useTaskContext } from '../context/task_context';

const Tasks = () => {
  // Use task_context
  const { tasks, completeTask } = useTaskContext();

  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  useEffect(() => {
    const tasksCompleted = tasks.filter((task) => task.completed === false);
    setUncompletedTasks(tasksCompleted);
  }, [tasks]);

  // Task completed
  const handleComplete = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    completeTask(findTask);
  };

  return (
    <Wrapper>
      <h3>Task - {uncompletedTasks.length}</h3>
      <ul>
        {uncompletedTasks < 1 ? (
          <p>You have no tasks to do</p>
        ) : (
          uncompletedTasks.map((task) => (
            <li key={task.id}>
              <RiCheckboxBlankCircleLine
                onClick={() => handleComplete(task.id)}
              />
              {task.taskValue}
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
    font-size: 18px;
    text-align: center;
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
    text-transform: capitalize;
    word-wrap: break-word;

    svg {
      margin-right: 10px;
      color: #fc6b97;
      cursor: pointer;
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

export default Tasks;
