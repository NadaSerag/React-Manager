import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice.js';
import projectsReducer from '../features/projects/projectsSlice.js';

export const store = configureStore({
  //configureStore will take an object as a parameter,
  //add reducers
  reducer: {
    //key-value pairs
    //Slice name : reducer function for that slice
    projects: projectsReducer,
    tasks: taskReducer
  },
});