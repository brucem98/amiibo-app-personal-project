import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

export const favoritesSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const amiiboIdToAdd = action.payload
            state.push(amiiboIdToAdd);
        }
    }
})

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;