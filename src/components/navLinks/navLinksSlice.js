import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNavLinks: true,
}

const navLinksSlice = createSlice({
    name: 'navlinks',
    initialState,
    reducers: {
        toggleNavLinks: (state) => {
            state.showNavLinks = !state.showNavLinks
        }
    }
})

export const { toggleNavLinks } = navLinksSlice.actions;
export default navLinksSlice.reducer