import { createSlice } from '@reduxjs/toolkit';


//initializing the projects state
 const firstProject = {id: 1, name: "InitialProject", description:"React-Manager Project"};
 
//the state:
//The actual data this slice manages (the array and the count)
const initialState = {
  array: [firstProject], 
  count: 1,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.array.push(action.payload); // action.payload is the item we pass
      //generating a unique id for the project to add
      action.payload.id = Date.now();
      state.count = state.array.length;
     
    },
    removeProject: (state, action) => {
      // action.payload is the id of the item to remove
      state.array = state.array.filter(project => project.id !== action.payload);
      state.count = state.array.length;
    },
  },
});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addProject, removeProject } = projectsSlice.actions;

// Export the reducer to be used in the store
export default projectsSlice.reducer;