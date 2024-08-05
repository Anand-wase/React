import counterSlice from './counter';
import privacySlice from './privacy';
import { configureStore } from '@reduxjs/toolkit';

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer,
}});

export default counterStore;
