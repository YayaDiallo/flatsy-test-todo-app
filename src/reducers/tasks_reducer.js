import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  UNCOMPLETE_TASK,
} from '../actions';
import { v4 as uuidv4 } from 'uuid';

const task_reducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const taskValue = action.payload;
    const isExist = state.tasks.find((task) => task.taskValue === taskValue);

    if (isExist || taskValue.trim() === '') {
      return { ...state, errorMsg: 'Please enter a valid task' };
    }

    const newTask = {
      id: uuidv4(),
      taskValue: taskValue,
      completed: false,
    };

    return { ...state, tasks: [...state.tasks, newTask], errorMsg: '' };
  }

  if (action.type === COMPLETE_TASK) {
    action.payload.completed = true;

    return { ...state, tasks: [...state.tasks] };
  }

  if (action.type === UNCOMPLETE_TASK) {
    action.payload.completed = false;

    return { ...state, tasks: [...state.tasks] };
  }

  if (action.type === DELETE_TASK) {
    const { id } = action.payload;
    const newTasks = state.tasks.filter((task) => task.id !== id);

    return { ...state, tasks: newTasks };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default task_reducer;
