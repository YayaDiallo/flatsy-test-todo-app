import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/tasks_reducer';
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  UNCOMPLETE_TASK,
} from '../actions';

// Initial State
const initialState = {
  tasks: [],
  completedTasks: [],
  uncompletedTasks: [],
  errorMsg: '',
};

// Create context
const TaskContext = React.createContext();

// Task Provider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add Task
  const addTask = (taskValue) => {
    dispatch({ type: ADD_TASK, payload: taskValue });
  };

  // Complete Task
  const completeTask = (task) => {
    dispatch({ type: COMPLETE_TASK, payload: task });
  };

  // Uncomplete Task
  const uncompleteTask = (task) => {
    dispatch({ type: UNCOMPLETE_TASK, payload: task });
  };

  // Delete Task
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: { id } });
  };

  return (
    <TaskContext.Provider
      value={{ ...state, addTask, completeTask, uncompleteTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Use TaskContext
export const useTaskContext = () => {
  return useContext(TaskContext);
};
