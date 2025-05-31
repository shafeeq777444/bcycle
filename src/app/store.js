// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
