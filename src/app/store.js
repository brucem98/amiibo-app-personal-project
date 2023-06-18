import { configureStore } from '@reduxjs/toolkit';
import amiibosReducer from '../features/amiibos/amiibosSlice';

export const store = configureStore({
  reducer: {
    amiibos: amiibosReducer
  },
});
