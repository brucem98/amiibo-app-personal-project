import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
]

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const amiiboToAdd = action.payload;
            state.push(amiiboToAdd);
        },
        removeFavorite: (state, action) => {
            const amiiboToRemove = action.payload;
            return state.filter((amiibo) => amiibo.id !== amiiboToRemove.id);
        }
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;