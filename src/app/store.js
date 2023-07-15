import { configureStore } from '@reduxjs/toolkit';
import amiibosReducer from '../features/amiibos/amiibosSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    amiibos: amiibosReducer,
    favorites: favoritesReducer
  },
});
