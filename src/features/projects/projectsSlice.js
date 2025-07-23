import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [], 
  projectsCount: 0,
};

export const projectsSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload); // action.payload is the item we pass
      state.projectsCount = state.projects.length;
    },
    removeProject: (state, action) => {
      // action.payload is the id of the item to remove
      state.projects = state.projects.filter(project => project.id !== action.payload);
      state.projectsCount = state.projects.length;
    },
  },
});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addProject, removeProject } = projectsSlice.actions;

// Export the reducer to be used in the store
export default projectsSlice.reducer;