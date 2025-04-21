// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/counterSlics';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
