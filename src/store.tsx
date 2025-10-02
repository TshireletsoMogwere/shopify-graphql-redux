import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.tsx';

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // add slices here
  },
});
