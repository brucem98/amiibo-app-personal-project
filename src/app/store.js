import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import amiibosReducer from '../features/amiibos/amiibosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    amiibos: amiibosReducer
  },
});
