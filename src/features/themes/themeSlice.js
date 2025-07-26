import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  theme: 'Light',
};


export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      //ternary operator:
      //condition ? value_if_true : value_if_false;
      const themeToAssign = state.theme === 'Light' ? 'Dark': 'Light';
      state.theme = themeToAssign;
  },
}});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;