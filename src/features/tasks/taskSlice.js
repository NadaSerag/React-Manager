import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // e.g., [{ id: 1, name: 'Product A' }]
  itemCount: 0,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload); // action.payload is the item we pass
      state.itemCount = state.items.length;
    },
    removeTask: (state, action) => {
      // action.payload is the id of the item to remove
      state.items = state.items.filter(item => item.id !== action.payload);
      state.itemCount = state.items.length;
    },
  },
});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addTask, removeTask } = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;