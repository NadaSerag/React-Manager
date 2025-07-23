import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // e.g., [{ id: 1, name: 'Product A' }]
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // Reducers are functions that define how the state can be updated.
    // Redux Toolkit uses Immer, so you can write "mutating" logic here.
    addItem: (state, action) => {
      state.items.push(action.payload); // action.payload is the item we pass
      state.itemCount = state.items.length;
    },
    removeItem: (state, action) => {
      // action.payload is the id of the item to remove
      state.items = state.items.filter(item => item.id !== action.payload);
      state.itemCount = state.items.length;
    },
  },
});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addItem, removeItem } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;