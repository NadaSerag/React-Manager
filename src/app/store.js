import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/tasks/taskSlice.js';
import projectsReducer from '../features/projects/projectsSlice.js';

export const store = configureStore({
  reducer: {
    projects: projectsReducer
   // task: cartReducer,
  },
});