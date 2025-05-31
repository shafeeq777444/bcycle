// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth:false,
    user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state,action) => {
      state.isAuth =action.payload;
    },
    
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
